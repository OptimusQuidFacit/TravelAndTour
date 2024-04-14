import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
import { authConfig } from "./auth.config";
import User from "./models/user";
import { connectToDb } from "./config/dbconnection";
import bcrypt from "bcryptjs"


//define login function to be used in the CredentialsProvider

const login = async (credentials)=>{
  try{
      connectToDb();
      const user= await User.findOne({email: credentials.email});

      if(!user){
        throw new Error("Email is not registered");
      }
      const passwordIsCorrect= bcrypt.compare(credentials.password, user.password)
      if(passwordIsCorrect) return user;
      return null;
    }
  catch(err){
    throw new Error('Something went Wrong while trying to login with credentials')
  }
}
// export const authOptions = 

export const { handlers: { GET, POST },
                auth, signIn, signOut } = NextAuth({
                  ...authConfig,
                  // Configure one or more authentication providers
                  providers: [
                    GitHub({
                        clientId: process.env.AUTH_GITHUB_ID,
                        clientSecret: process.env.AUTH_GITHUB_SECRET,
                      }),
                    GoogleProvider({
                      clientId: process.env.AUTH_GOOGLE_ID,
                      clientSecret: process.env.AUTH_GOOGLE_SECRET,
                    }),
                    CredentialsProvider(
                      {
                        async authorize(credentials){
                          try {
                            const user = await login(credentials);
                            return user;
                          }
                          catch(err){
                            console.log(err)
                            return null;
                          }
                        }
                      }
                     ),
                    //add more providers here
                  ],
                  callbacks:{
                    async signIn({user, account, profile}){
                     
                      if(account.provider==='github'){
                          try {
                            connectToDb();
                            const userExists = await User.findOne({email:profile.email})
                            const newUser= new User({
                              firstname: profile.name,
                              email: profile.email,
                              img: profile.avatar_url,
                              github_id: profile.id,
                            })

                            if(!userExists){
                              
                              await newUser.save();

                              console.log('User Created');
                            }
                          }
                          catch(err){
                            console.log(err);
                          }
                        }
                        if(account.provider==='google'){
                          try{
                            connectToDb();
                            const user = await User.findOne({email: profile.email})
                            const newUser= new User({
                              firstname: profile.given_name,
                              lastname: profile.family_name,
                              email: profile.email,
                              img: profile.picture,
                              google_id: profile.sub,
  
  
                            })
                            if(!user){
                              
                              await newUser.save();
                            }
                          }
                          catch(err){
                            console.log(err);
                          }
                        }
                        
                        //include the admin property as part of the returned user which is used to set the token and then the session in the auth.config file
                       
                        let returnedUser= await User.findOne({email: user.email}).lean();
                        user.isAdmin=returnedUser.admin;
                        return true;
                    },
                    ...authConfig.callbacks
                  }
                });
