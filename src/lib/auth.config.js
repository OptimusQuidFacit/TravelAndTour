export const authConfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks:{
        async jwt({ token, user }) {
            if (user) {
              token.id = user.id;
              token.isAdmin = user.isAdmin;
            }
            return token;
          },
          async session({ session, token }) {
            if (token) {
              session.user.id = token.id;
              session.user.isAdmin = token.isAdmin;
            }
            return session;
          },
        authorized({auth, request}){
            const user = auth?.user;
            //check if the user is on a certain page
            const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin');
            const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');
            const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
            const isOnPackagesPage = request.nextUrl?.pathname.startsWith('/packages');
            const isOnDestinationsPage = request.nextUrl?.pathname.startsWith('/destinations');
            const isOnBookingsPage = request.nextUrl?.pathname.startsWith('/bookings');

            if(isOnLoginPage && user){

                return Response.redirect(new URL("/", request.nextUrl))
            }

            if(isOnBlogPage && !user){
                return false;
            }
            if(isOnAdminPage && !user?.isAdmin){
                return false;
            }
            if(isOnLoginPage && user){
                return false;
            }
            if(isOnBookingsPage && !user){
                return false;
            }
            if(isOnPackagesPage && !user){
                return false;
            }
            if(isOnDestinationsPage && !user){
                return false;
            }
            return true;
        }
    }
};