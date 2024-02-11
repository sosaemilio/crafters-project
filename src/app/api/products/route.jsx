import { NextResponse } from "next/server";
import { connectDB } from "@/lib/connection";
import {Product, Review} from "@/models/Products";

export async function GET() {
	connectDB();

	const products = await Product.find();
	return NextResponse.json(products);
}

// export function POST() {
// 	return NextResponse.json({
// 		message: "Creating products",
// 	});
// }

// export async function POST(request) {
//   try {
// 	connectDB();

//     const body = await request.json();
//     const newReview = new Product(body);
//     const savedReview = await newReview.save();
//     return NextResponse.json(savedReview);
//   } catch (error) {
//     return NextResponse.json(error.message, {
//       status: 400,
//     });
//   }
// }

export async function POST(request) {
  try {
      connectDB();
      
      const { review } = await request.json();
      
      if (!review) {
          return NextResponse.json({ error: "Review is required" }, { status: 400 });
      }

      const newReview = new Review({ review });
      const savedReview = await newReview.save();

      return NextResponse.json(savedReview);
  } catch (error) {
      return NextResponse.json(error.message, { status: 500 });
  }
}