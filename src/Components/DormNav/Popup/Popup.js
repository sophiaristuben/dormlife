import React, { useEffect, useState } from "react";
// import { ReviewForm } from "./Review/ReviewForm";
import "./Popup.css";
// import {db} from "./firebase.js";
// import { getAllReviews } from "./reviewService";


export const Popup = (roomProps) => {
    const {building, roomNumber} = roomProps;
    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     const fetchReviews = async () => {
    //         const gottedReviews = await getAllReviews();
    //         setReviews(gottedReviews);
    //     }
    //     fetchReviews();
    //     console.log(reviews);
    //   },[reviews]);

    return (
        <div className="popupContainer">
            <div className="popUp">
            <h3>{building} {roomNumber}</h3>

            <div className="popupRatingsContainer">
                <div className="popupRatings">Layout</div>
                <div className="popupRatings">Sound Level</div>
                <div className="popupRatings">Location</div>
                <div className="popupRatings">Bathroom</div>
            </div>
            {/* <div className="reviewForm">
                <ReviewForm />
            </div> */}
            <div className="popupReviews">
                <ul>
                    <li>review 1</li>
                    <li>review 2</li>
                </ul>
            </div>
            </div>
        </div>
    )
}