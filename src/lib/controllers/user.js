"use server";
import bcrypt from "bcryptjs"
// import {signIn} from "next-auth/react"

import User from "../models/user";
import { connectToDb } from "../config/dbconnection";
import { signIn, signOut } from "../auth";

export const addUser= async (prevState, formData) => {
    const { firstname, lastname, email, password, passwordconfirm } = 
    Object.fromEntries(formData);
    

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        if(password!==passwordconfirm){
            return {
                error: "Passwords do not match"
            }
            
        }
        connectToDb();
        // if(!firstname || !password || !lastname || !email){

        // }
        const newUser = new User({
            firstname, lastname, email, password:hashedPassword
        })
        const user= await User.findOne({email:email});
        if(user){
            return{
                error:"Email already registered"
            }
        }
        await newUser.save();
        return{
            message:'Successful registration'
        }
    }
    catch(err){
        console.log(err.message);
        return {
            error: err.message
        }
    }
}

export const login= async(prevState, formData)=>{
    const {email, password}= Object.fromEntries(formData);
    try{

        await signIn('credentials', {email, password});
    }
    catch(err){
        if(err?.type?.includes('CredentialsSignin')){
            return{
                error: "Invalid email or password"
            };
        }
        throw err;
        console.log(err);
    }
}
export const handleGoogleLogin= async()=>{
    await signIn('google');
}
export const handleGitHubLogin= async ()=>{
    await signIn('github');
}
export const handleLogout= async ()=>{
    await signOut();
}

export const updateUser = async (prevState, formData)=>{
    try{
        const data= Object.fromEntries(formData);
        let id=data.id;
        connectToDb();
        console.log(data);
        await User.findOneAndUpdate({_id:id }, data);
        return {message: "User updated successfully"}
    }
    catch(err){
        console.log(err);
        return {
            error: "Something went wrong"
        }
    }
}
