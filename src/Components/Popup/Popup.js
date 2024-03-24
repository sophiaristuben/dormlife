import React from "react";
import "./Popup.css";
import AC from './air-conditioner-icon.png'

export const Popup = (roomProps) => {
    const {building, roomNumber} = roomProps;
    return (
        <div className="popupContainer">
            <h1>{building} {roomNumber}</h1>
            <div className="popupSymbols">
                <img src={AC} alt="air conditioner" className="symbol" />
            </div>
            <div className="popupRatings">
                <div>Layout</div>
                <div>Sound Level</div>
                <div>Location</div>
                <div>Bathroom</div>
            </div>
            <div className="popupReviews">
                <ul>
                    <li>review 1</li>
                    <li>review 2</li>
                </ul>
            </div>
        </div>
    )
}