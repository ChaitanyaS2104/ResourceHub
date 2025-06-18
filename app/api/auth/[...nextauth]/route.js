import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "../../../../utils/database";
import User from "../../../../models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    //Keep the runnung session for the user
    async session({ session }) {
      //Get current user and set the id for session.user for accessing later
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB();
        //Check if user already exists
        const userExists = await User.findOne({
          email: profile.email,
        });
        //If not create new user and store it in db
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log("Error in signIn callback:", error);
      }
    },
  },
});

export { handler as GET, handler as POST };
