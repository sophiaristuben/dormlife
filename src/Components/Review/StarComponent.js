import React, { useState } from "react";
import "./ReviewComponent.css"; 

const StarRating = ({ onChange }) => {
    const [rating, setRating] = useState(0);

    const unHighlight = () => {
        setRating(0);
        onChange(0);
    };

    const handleClick = (value) => {
        const newRating = value === rating ? 0 : value; 
        setRating(newRating);
        onChange(newRating);
    };

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    className={value <= rating ? "star-filled" : "star-empty"}
                    onClick={() => handleClick(value)}
                >
                    &#9733; {/*  star unicode */}
                </span>
            ))}
        </div>
    );
};

export default StarRating;
