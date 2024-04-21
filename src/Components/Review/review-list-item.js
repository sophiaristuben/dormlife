import React from 'react';

function ReviewListItem(props) {
    const review = props.review;

    return (
        <li key={review.id}>
            <h3>{review.reviewText}</h3>
        </li>
    );
}

export default ReviewListItem;
