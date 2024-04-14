import { useState, useEffect } from 'react'
import { findAll, create } from './review.js'
import AddReviewBar from './add-review-bar.js'
import ReviewListItem from './review-list-item.js'

function ReviewList() {
    const [loading, setLoading] = useState(false)
    const [reviews, setReviews] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()

        setReviews([...res])
        setLoading(false)
    }

    const createReview = async args => {
        const res = await create(args)

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