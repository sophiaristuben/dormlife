// ReviewForm.js

import React, { useState } from "react";
import "./Popup.css";

export const ReviewForm = () => {
    const [openForm, setOpenForm] = useState(false);

    const toggleForm = () => {
        setOpenForm(!openForm);
    };

    return (
        <div className="reviewForm-container">
            {!openForm && (
                <button onClick={toggleForm} className="reviewForm-submit-btn">
                    Write a Review
                </button>
            )}
            {openForm && (
                <div className="reviewForm-form">
                    <h2 className="reviewForm-title">Review Form</h2>
                    <form>
                        <label htmlFor="review" className="reviewForm-label">Thoughts!</label>
                        <textarea
                            id="review"
                            className="reviewForm-input"
                            rows="4"
                            placeholder="Write your review here..."
                        ></textarea>
                        <button
                            type="submit"
                            className="reviewForm-submit-btn"
                            onClick={toggleForm}
                        >
                            Submit Review
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};
