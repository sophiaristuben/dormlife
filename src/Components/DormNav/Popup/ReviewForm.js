import React, { useState } from 'react';
import './ReviewForm.css'; 
// connection to firebase
import { db } from './firebase';
import { doc, setDoc, Timestamp} from "firebase/firestore";


const ReviewForm = () => {
    const dormList = [
        "Walker", "Blaisdell", "Clark 1", "Clark III", "Clark V",
        "Dialynas", "Gibson", "Harwood", "Lyon", "Mudd", "Oldenborg",
        "Smiley", "Sontag", "Wig"
    ];

    const [selectedDorm, setSelectedDorm] = useState(dormList[0]);
    const [roomNumber, setRoomNumber] = useState('');
    const [layoutRating, setLayoutRating] = useState(3);
    const [locationRating, setLocationRating] = useState(3);
    const [soundRating, setSoundRating] = useState(3);
    const [bathroomRating, setBathroomRating] = useState(3);
    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(db);

        const reviewData = {
            dorm: selectedDorm,
            roomNumber: roomNumber,
            layoutRating: parseInt(layoutRating, 10),
            locationRating: parseInt(locationRating, 10),
            soundRating: parseInt(soundRating, 10),
            bathroomRating: parseInt(bathroomRating, 10),
            reviewText: review
        };
        console.log("Submitting:", reviewData);

        try {
            const id_timestamp = Timestamp.fromDate(new Date()).toMillis().toString();

            await setDoc(doc(db, "reviews", id_timestamp), reviewData);

            console.log("Review submitted successfully!");

            setSelectedDorm(dormList[0]);
            setRoomNumber('');
            setLayoutRating(3);
            setLocationRating(3);
            setSoundRating(3);
            setBathroomRating(3);
            setReview('');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
 
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
