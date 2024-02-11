"use client";

import React, { ChangeEvent, FormEvent, useState }  from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import StarRatings from "react-star-ratings";

const NewReview = () => {

	const [newReview, setNewReview] = useState ({
		review: ""
	})

	const createReview = async () => {
		const reviewData = { review: newReview.review }; 
    
		try {
			const res = await fetch('/api/products', { 
				method: "POST",
				body: JSON.stringify(reviewData),
				headers: { "Content-Type": "application/json" }
			});

			if (!res.ok) {
				throw new Error("Failed to create review");
			}

			const data = await res.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		await createReview()

	}

	const handleChange = (
		e: ChangeEvent<HTMLTextAreaElement> 
		) => setNewReview ({ ...newReview, [e.target.name]: e.target.value });

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
				<label className="d-block form-floating my-2"> Writte a Review: </label>
				<form onSubmit={handleSubmit}>
					<textarea
						rows={4}
						className="form-control w-100 w-lg-25"
						placeholder="Your review"
						name="review"
						required
						onChange={handleChange}>
					</textarea>
					<button className="btn btn-primary">
						Post Review
					</button>
				</form>
			</div>

			
		</div>
	);
};

export default NewReview;
