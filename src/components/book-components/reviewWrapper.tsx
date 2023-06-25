import fetchBookReviews from "../../hooks/FetchBookReviews";

function ReviewWrapper({ bookId }) {
    const { data: reviews, isLoading, error } = fetchBookReviews(bookId);
    console.log(reviews)
    
    if (isLoading) {
        return <div>Loading reviews...</div>;
    }
    
    if (error) {
        return <div>Failed to load reviews.</div>;
    }

    return (
        <div>
            {reviews && reviews.map((review, index) => (
                <div key={index}>
                    <p>{review.text}</p>
                    <p>Rating: {review.rating}</p>
                </div>
            ))}
        </div>
    );
}

export default ReviewWrapper;
