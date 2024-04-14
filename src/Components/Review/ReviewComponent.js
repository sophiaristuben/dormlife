import React, { useState } from "react";
import "./ReviewComponent.css"; 
import StarRating from "./StarComponent"; 

const ReviewComponent = () => {
    const [review, setReview] = useState("");
    const [locationRating, setLocationRating] = useState(0);
    const [soundRating, setSoundRating] = useState(0);
    const [layoutRating, setLayoutRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // can link database

        setReview("");
        setLocationRating(0);
        setSoundRating(0);
        setLayoutRating(0);
        setSubmitted(true);
    };

    const handleChange = (event) => {
        setReview(event.target.value);
    };

    const handleLocationRatingChange = (value) => {
        setLocationRating(value);
    };

    const handleSoundRatingChange = (value) => {
        setSoundRating(value);
    };

    const handleLayoutRatingChange = (value) => {
        setLayoutRating(value);
    };

    return (
        <div className="review-container">
            <h1 className="review-heading">Submit a Review</h1>
            {submitted ? (
                <div className="thanks-message">
                    <h2>Thanks for submitting your review!</h2>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label className="review-label">
                        Location:
                        <StarRating onChange={handleLocationRatingChange} />
                    </label>
                    <label className="review-label">
                        Noise level:
                        <StarRating onChange={handleSoundRatingChange} />
                    </label>
                    <label className="review-label">
                        :ayout:
                        <StarRating onChange={handleLayoutRatingChange} />
                    </label>
                    <label className="review-label">
                        Write your review:
                        <textarea
                            value={review}
                            onChange={handleChange}
                            placeholder="Write your review here..."
                            className="review-textbox"
                        />
                    </label>
                    <br />
                    <br />
                    <button type="submit" className="review-submit-btn">Submit Review</button>
                </form>
            )}
        </div>
    );
};

export default ReviewComponent;
