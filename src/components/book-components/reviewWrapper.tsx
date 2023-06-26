import fetchBookReviews from "../../hooks/FetchBookReviews";

function ReviewWrapper(bookId:any) {
    const { bookId: id } = bookId;
	const { data: reviews, isLoading, error } = fetchBookReviews(id);
	if (isLoading) {
		return <div>Loading reviews...</div>;
	}

	if (error) {
		return <div>Failed to load reviews.</div>;
	}
    return (
        <div>
            {reviews &&
                reviews.map((review, index) => (
                    <div
                        className="max-w-2xl min-w-[672px] px-8 py-4 mb-4 bg-gray-100 rounded-lg shadow-md"
                        key={index}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img
                                    className="w-10 h-10 rounded-full mr-4"
                                    src={review.user.picture_url}
                                    alt="User"
                                />
                            </div>
                            <span className="text-sm font-semibold text-gray-600">
                                {review.user.name}
                            </span>
                        </div>
                        <span className="text-sm font-semibold text-gray-600">
                                    Rating: {review.rating}
                                </span>
                        <div className="mt-2">
                            <p className="text-gray-700 break-words">{review.text}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default ReviewWrapper;
