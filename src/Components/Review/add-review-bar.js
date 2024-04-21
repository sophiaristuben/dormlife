import { useState } from "react";
import { create } from "./review";

function AddReviewBar(props) {
    const [newReview, setNewReview] = useState("");

    const handleChange = (e) => setNewReview(e.target.value);

    const submit = async () => {
        // await create({ name: newReview });
        await create({ 
            name: newReview,
            locationRating: props.locationRating,
            noiseRating: props.noiseRating,
            layoutRating: props.layoutRating,
            reviewText: props.reviewText,
            // dorm: props.dorm, 
            roomNumber: props.roomNumber
        });
        setNewReview("");
        props.onReviewAdded(); // Notify parent component that a new review has been added
    };

    return (
        <div>
            {/* <input type="text" value={newReview} onChange={handleChange} /> */}
            <button onClick={submit}>Add review</button>
        </div>
    );
}

export default AddReviewBar;
