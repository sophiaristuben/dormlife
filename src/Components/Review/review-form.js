import { useState, useEffect } from 'react'
import { findAll, create } from './review.js'
import AddReviewBar from './add-review-bar.js'
import ReviewListItem from './review-list-item.js'
import StarRating from "./StarComponent"; 
import "./ReviewComponent.css";

function ReviewList() {
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    const [locationRating, setLocationRating] = useState(0);
    const [noiseRating, setNoiseRating] = useState(0);
    const [layoutRating, setLayoutRating] = useState(0);

    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()

        setReviews([...res])
        setLoading(false)
    }

    const createReview = async args => {
        // const res = await create(args)
        const res = await create({
            locationRating,
            noiseRating,
            layoutRating
        });

        setReviews([...reviews, {
            id: res.id,
            ...args
        }])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section className="review-container"> 
        <header>
            <h2 className="review-heading">Add Review</h2> 
        </header>
        <div className="review-form">
                <label className="review-label">
                    Location:
                    <StarRating value={locationRating} onChange={setLocationRating} />
                </label>
                <label className="review-label">
                    Noise level:
                    <StarRating value={noiseRating} onChange={setNoiseRating} />
                </label>
                <label className="review-label">
                    Layout:
                    <StarRating value={layoutRating} onChange={setLayoutRating} />
                </label>
                
        </div>

        <AddReviewBar createReview={createReview}/>

        { loading && 
            <p>loading...</p>
        }

        <ul>
            {reviews.length > 0 && reviews.map(review => (
                <ReviewListItem review={review}/>
            ))}
        </ul>
    </section>
    )
}

export default ReviewList