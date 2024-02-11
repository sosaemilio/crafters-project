import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/connection";
import User from "@/models/Users";
import bcrypt from "bcryptjs";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "email" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials) {
				await connectDB();

				try {
					const user = await User.findOne({
						email: credentials?.email,
					});

					if (user) {
						const isPasswordCorrect = await bcrypt.compare(credentials?.password, user.password);

						if (isPasswordCorrect) {
							return user;
						} else {
							throw new Error("Wrong Credentials!");
						}
					} else {
						throw new Error("User not found!");
					}
				} catch (err) {
					console.log(err);
					throw new Error("Error in authentication");
				}
			},
		}),
	],
	pages: {
		error: "/login",
	},
});

export { handler as GET, handler as POST };
