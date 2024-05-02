import React, { useState } from 'react';
import './ReviewForm.css'; // Import the CSS file specifically for the ReviewForm

const ReviewForm = () => {
    const dormList = [
        "Walker", "Blaisdell", "Clark 1", "Clark III", "Clark V",
        "Dialynas", "Gibson", "Harwood", "Lyon", "Mudd", "Oldenborg",
        "Smiley", "Sontag", "Wig"
    ];

    // States for each form field
    const [selectedDorm, setSelectedDorm] = useState(dormList[0]);
    const [roomNumber, setRoomNumber] = useState('');
    const [layoutRating, setLayoutRating] = useState(3);
    const [locationRating, setLocationRating] = useState(3);
    const [soundRating, setSoundRating] = useState(3);
    const [bathroomRating, setBathroomRating] = useState(3);
    const [review, setReview] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you will handle submitting these data to Firebase
        console.log({
            selectedDorm,
            roomNumber,
            layoutRating,
            locationRating,
            soundRating,
            bathroomRating,
            review
        });
        // Reset the form or do other actions following form submission
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <div className="inputGroup">
                    <label>Dorm Name:</label>
                    <select value={selectedDorm} onChange={(e) => setSelectedDorm(e.target.value)}>
                        {dormList.map(dorm => (
                            <option key={dorm} value={dorm}>{dorm}</option>
                        ))}
                    </select>
                </div>
                <div className="inputGroup">
                    <label>Room Number:</label>
                    <input
                        type="text"
                        value={roomNumber}
                        onChange={(e) => setRoomNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="inputGroup">
                    <label>Layout Rating:</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={layoutRating}
                        onChange={(e) => setLayoutRating(parseInt(e.target.value))}
                    />
                </div>
                <div className="inputGroup">
                    <label>Location Rating:</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={locationRating}
                        onChange={(e) => setLocationRating(parseInt(e.target.value))}
                    />
                </div>
                <div className="inputGroup">
                    <label>Sound Level Rating:</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={soundRating}
                        onChange={(e) => setSoundRating(parseInt(e.target.value))}
                    />
                </div>
                <div className="inputGroup">
                    <label>Bathroom Rating:</label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={bathroomRating}
                        onChange={(e) => setBathroomRating(parseInt(e.target.value))}
                    />
                </div>
                <div className="inputGroup">
                    <label>Review:</label>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Submit Review</button>
            </form>
        </div>
    );
};

export default ReviewForm;
