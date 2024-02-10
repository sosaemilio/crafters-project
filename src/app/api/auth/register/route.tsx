import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connection";
import User from "@/models/Users";
import bcrypt from "bcryptjs";

export async function POST(request: any) {
	const { name, lastName, email, password }: { name: string; lastName: string; email: string; password: string } =
		await request.json();

	await connectDB();

	const hasPassword = await bcrypt.hash(password, 5);

	const newUser = new User({
		name,
		lastName,
		email,
		password: hasPassword,
	});

	try {
		await newUser.save();
		return new NextResponse("User has been created", {
			status: 201,
		});
	} catch (err: any) {
		return new NextResponse(err.message, {
			status: 500,
		});
	}
}
