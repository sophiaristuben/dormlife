import React from "react";
import AC from './air-conditioner-icon.png'
import { ReviewForm } from "./ReviewForm";
import "./Popup.css";

export const Popup = (roomProps) => {
    const {building, roomNumber} = roomProps;
    return (
        <div className="popupContainer">
            <div className="popUp">
            <h3>{building} {roomNumber}</h3>
            <div className="popupSymbols">
                <img src={AC} alt="air conditioner" className="symbol" />
            </div>
            <div className="popupRatingsContainer">
                <div className="popupRatings">Layout</div>
                <div className="popupRatings">Sound Level</div>
                <div className="popupRatings">Location</div>
                <div className="popupRatings">Bathroom</div>
            </div>
            <div className="reviewForm">
                <ReviewForm />
            </div>
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