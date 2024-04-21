import React, { useState, useEffect } from "react";
import "./Popup.css";
import ReviewListItem from "../../Review/review-list-item.js";
import { findAll } from '../../Review/review.js';

export const Popup = ( roomProps ) => {
    
    const {building, roomNumber} = roomProps;

    // get reviews
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const fetchedReviews = await findAll(); 
                setReviews(fetchedReviews);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []);

    // only geet the reviews that are the same dorm and romo number
    const filteredReviews = reviews.filter(review => 
        review.dormName === building && review.roomNumber === roomNumber
    );

    // lets get the ratings averages
    const calculateAverageRating = (reviews, property) => {
        if (reviews.length === 0) return 0;

        const totalRating = reviews.reduce((accumulator, review) => accumulator + review[property], 0);
        return totalRating / reviews.length;
    };


    const averageLayoutRating = calculateAverageRating(filteredReviews, 'layoutRating');
    const averageLocationRating = calculateAverageRating(filteredReviews, 'locationRating');
    const averageNoiseRating = calculateAverageRating(filteredReviews, 'noiseRating');

    // make the ratings rounded to use the star display
    const roundToFive = (rating) => {
        return Math.round(rating * 5) / 5;
    };

    // show the ratings througha star system
    const renderStars = (rating) => {
        const roundedRating = roundToFive(rating);
        const starArray = [];
        for (let i = 1; i <= 5; i++) {
            starArray.push(
                <span key={i} className={i <= roundedRating ? "star-filled" : "star-empty"}>&#9733;</span>
            );
        }
        return starArray;
    };

    return (
        <div className="popupContainer">
            <div className="popUp">
            <h3>{building} {roomNumber}</h3>
            {/* <div className="popupSymbols">
                <img src={AC} alt="air conditioner" className="symbol" />
            </div> */}
            <div className="popupRatingsContainer">
                <div className="popupRatings"> Layout: {renderStars(averageLayoutRating)}</div>
                <div className="popupRatings">Location: {renderStars(averageLocationRating)}</div>
                <div className="popupRatings">Sound Level: {renderStars(averageNoiseRating)}</div>
                {/* <div className="popupRatings">Bathroom</div> */}
            </div>
            {/* <div className="reviewForm">
                <ReviewForm />
            </div> */}
            <div className="popupReviews">
                {filteredReviews.length > 0 ? (
                    <ul>
                        {filteredReviews.map((review, index) => (
                            <ReviewListItem key={index} review={review} />
                        ))}
                    </ul>
                ) : (
                    <p>No reviews yet</p>
                )}
            </div>

            
            {/* <div className="popupReviews">
                <ul>
                    <li>review 1</li>
                    <li>review 2</li>
                </ul>
            </div> */}
            </div>
        </div>
    )
}