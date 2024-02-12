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
						if (credentials?.password) {
							const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
							if (isPasswordCorrect) {
								return user;
							} else {
								throw new Error("Credenciales incorrectas");
							}
						} else {
							throw new Error("La contraseña no fue proporcionada");
						}
					} else {
						throw new Error("Usuario no encontrado");
					}
				} catch (err) {
					console.log(err);
					throw new Error("Error en la autenticación");
				}
			},
		}),
	],
	pages: {
		error: "/login",
	},
});

export { handler as GET, handler as POST };
