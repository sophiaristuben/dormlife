function ReviewListItem(props) {
    const review = props.review

    return (
        <li key={review.id}>
            <h3>{review.name}</h3>
        </li>
    )
}

export default ReviewListItem