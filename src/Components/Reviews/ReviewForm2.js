import React, { useState, useEffect } from 'react'
import { findAll, create } from './review.js'
import AddReviewBar from './add-review-bar.js'
import StarRating from "./StarComponent.js"; 
import "./review.css";

const ReviewForm2 = () => {
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [locationRating, setLocationRating] = useState(0);
    const [noiseRating, setNoiseRating] = useState(0);
    const [layoutRating, setLayoutRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const [showThankYouScreen, setShowThankYouScreen] = useState(false);
    const [dormName, setDorm] = useState("");
    const [roomNumber, setRoomNumber] = useState("");


    // probs not the best way to do this
    const dormList = [
        "Walker", "Blaisdell", "Clark 1", "Clark III", "Clark V",
        "Dialynas", "Gibson", "Harwood", "Lyon", "Mudd", "Oldenborg",
        "Smiley", "Sontag", "Wig"
    ];


    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()

        setReviews([...res])
        setLoading(false)
    }

    const createReview = async args => {
        // const res = await create(args)
        const res = await create({
            locationRating,
            noiseRating,
            layoutRating,
            reviewText,
            dormName,
            roomNumber
        });

        setReviews([...reviews, {
            id: res.id,
            ...args
        }])
        console.log("New Review:", res);

        setReviewText("");
        setDorm("");
        setRoomNumber("");
        setLocationRating(0);
        setNoiseRating(0);
        setLayoutRating(0);
        setShowThankYouScreen(true);
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <section className="review-container"> 
        <header>
            <h2 className="review-heading">Add Review</h2> 
        </header>
        <div className="review-form">
        <label className="review-label">
                    Dorm:
                    <select value={dormName} onChange={(e) => setDorm(e.target.value)}>
                        <option value="">Select Dorm</option>
                        {dormList.map((dorm) => (
                            <option key={dorm} value={dorm}>{dorm}</option>
                        ))}
                    </select>
                </label>
                <label className="review-label">
                    Room Number:
                    <input
                        type="text"
                        value={roomNumber}
                        onChange={(e) => setRoomNumber(e.target.value)}
                        placeholder="Enter room number"
                    />
                </label>
                <label className="review-label">
                    Location:
                    <StarRating value={locationRating} onChange={setLocationRating}/>
                </label>
                <label className="review-label">
                    Noise level:
                    <StarRating value={noiseRating} onChange={setNoiseRating} />
                </label>
                <label className="review-label">
                    Layout:
                    <StarRating value={layoutRating} onChange={setLayoutRating} />
                </label>
                <label className="review-label">
                    Write your review:
                    <textarea
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        placeholder="Write your review here..."
                        className="review-textbox"
                    />
                </label>
                
        </div>

        {/* <AddReviewBar createReview={createReview}/> */}
        <AddReviewBar 
            reviewText={reviewText}
            locationRating={locationRating}
            noiseRating={noiseRating}
            layoutRating={layoutRating}
            // dormName={dormName} 
            roomNumber={roomNumber} 
            onReviewAdded={createReview}
        />

        {showThankYouScreen && (
            <div className="thank-you-screen">
                <h3>Thank you for your review!</h3>
            </div>
        )}

        { loading && 
            <p>loading...</p>
        }

        {/* <ul>
            {reviews.length > 0 && reviews.map(review => (
                <ReviewListItem review={review}/>
            ))}
        </ul> */}
    </section>
    )
};

export default ReviewForm2;