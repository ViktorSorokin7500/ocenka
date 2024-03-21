import { connectionToDB } from "@/lib/mongoose";
import User from "@/models/userModel";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

async function login(credentials) {
	try {
		connectionToDB();
		const user = await User.findOne({ email: credentials.email });
		if (!user) throw new Error("Wrong credentials");
		const isCorrect = await bcrypt.compare(credentials.password, user.password);
		if (!isCorrect) throw new Error("Wrong password");
		return user;
	} catch (error) {
		console.log("route.js =>", error);
		throw new Error("Something went wrong");
	}
}

export const authOptions = {
	pages: {
		signIn: "/sign-in",
	},
	providers: [
		CredentialsProvider({
			name: "credentials",
			credentials: {},
			async authorize(credentials) {
				try {
					console.log(credentials);
					const user = await login(credentials);
					return user;
				} catch (error) {
					console.log("nextAuth error", error);
					throw new Error("Failed login");
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.name = user.name;
				token.email = user.email;
				token.password = user.password;
			}
			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.id = token.id;
			}
			return session;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
