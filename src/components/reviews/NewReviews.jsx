'use client'

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import StarRatings from "react-star-ratings";

const NewReview = () => {
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
      </div> */}
      <div className="mb-4 mt-5">
        <label className="d-block form-floating my-2"> Writte a Review: </label>
        <textarea
          rows="4"
          className="form-control w-100 w-lg-25"
          placeholder="Your review"
          name="description"
          required
        ></textarea>
      </div>

      <button type="button" class="btn btn-primary">Post Review</button>
    </div>
  );
};

export default NewReview;
