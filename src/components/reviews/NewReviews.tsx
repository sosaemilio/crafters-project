"use client";

import React, { ChangeEvent, FormEvent, useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createReview } from "@/lib/action";
// import StarRatings from "react-star-ratings";

export default function NewReview({productId}:{productId: string}) {
	// const [newReview, setNewReview] = useState ({
	// 	review: ""
	// })

	// const createReview = async () => {
	// 	const reviewData = { review: newReview.review }; 
    
	// 	try {
	// 		const res = await fetch('/api/products', { 
	// 			method: "POST",
	// 			body: JSON.stringify(reviewData),
	// 			headers: { "Content-Type": "application/json" }
	// 		});

	// 		if (!res.ok) {
	// 			throw new Error("Failed to create review");
	// 		}

	// 		const data = await res.json();
	// 		console.log(data);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	// const handleSubmit = async (e: FormEvent) => {
	// 	e.preventDefault()
	// 	await createReview()
	// }

	// const handleChange = (
	// 	e: ChangeEvent<HTMLTextAreaElement> 
	// 	) => setNewReview ({ ...newReview, [e.target.name]: e.target.value });

	return (
		<div className="p-3">
			<hr className="my-3" />
			<h1 className="text-secondary  text-2xl">Your Review</h1>

			{/* <h4 className="my-4">Rating</h4>
				<div className="mb-4 mt-3">
					<div className="ratings">
					<StarRatings
						rating={5}
						starRatedColor="#ffb829"
						numberOfStars={5}
						name="rating"
					/>
					</div>
				</div> 
			*/}
			<div className="mb-4 mt-5">
				<form action={createReview}>
				<label className="d-block form-floating my-2"> Writte a Review: </label>
					<textarea
						rows={4}
						className="form-control w-100 w-lg-25"
						placeholder="Your review"
						name="review"
						required
						id="review"
						// onChange={handleChange}
					>
					</textarea>
					<input type="hidden" name="productId" value={productId} id="productName"/>
					<input className="btn btn-primary my-3 px-4" type="submit" value="Post"/>
				</form>
			</div>
		</div>
	);
};


