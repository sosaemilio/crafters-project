import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connection";
import Product from "@/models/Products";

export async function GET(request, { params }) {
	try {
		connectDB();
		const productFound = await Product.findById(params.id);
	
		if (!productFound)
			return NextResponse.json({
				message: "Product not found",
			}, {
				status: 404
			})
		return NextResponse.json(productFound);
	} catch (error) {
		return NextResponse.json(error.message, {
			status: 400 
		})
	}
}
	
export async function DELETE(request, {params}) {
	try {
		const productDeleted = await Product.findByIdAndDelete(params.id)
		
		if (!productDeleted)
			return NextResponse.json({
				message: "Task not found",
			}, {
				status: 400
			})
		return NextResponse.json(productDeleted);
	} catch (error) {
		return NextResponse.json(error.message, {
			status: 400 
		})
	}
}

export async function PUT(request, {params}) {
	try {
		const data = await request.json()
		const productUpdated = await Product.findByIdAndUpdate(params.id, data, {
			new: true
		})
		return NextResponse.json(productUpdated)	
	} catch (error) {
		return NextResponse.json(error.message, {
			status: 400 
		})
	}
}
