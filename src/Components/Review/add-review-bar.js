import { useState } from "react";

function AddReviewBar(props) {

    const [ newReview, setNewReview ] = useState("")

    const handleChange = (e) => setNewReview(e.target.value)

    const submit = () => {
        props.createReview({name: newReview})
        setNewReview("")
    }

    return (
        <div>
            <input type="text" value={newReview} onChange={handleChange} />
            <button onClick={submit}>Add review</button>
        </div>
    )
}

export default AddReviewBar;