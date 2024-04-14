import React, { useState } from "react";
import "./Popup.css";

export const ReviewForm = () => {
    const [openForm, setOpenForm] = useState(false)
    return (
        <>
            {!openForm && (
                <button onClick={() => setOpenForm(!openForm)}>Write a Review</button> 
            )}
            {openForm && (
                <>
                    <p>Review Form</p>
                    <form>
                        <label>Thoughts!</label>
                        <input></input>
                        <input type="submit" value="Submit Review" onClick={() => setOpenForm(!openForm)} />
                    </form>
                </>
            )}
        </>
    )
}
