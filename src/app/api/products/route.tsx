import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connection";
import Product from "@/models/Products";

export async function GET() {
	connectDB();

	const products = await Product.find();
	return NextResponse.json(products);
}

export function POST() {
	return NextResponse.json({
		message: "Creating products",
	});
}
