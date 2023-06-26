import axios from "axios";
import { useUser } from "../contexts/UserContext";
import { useRefresh } from "../contexts/RefreshContext";

interface CreateBookReviewParams {
    bookId: { bookId: number };
    reviewRating: string;
    reviewText: string;
}

function useCreateBookReview() {
    const { results } = useUser();
    const { setRefreshToken } = useRefresh(); 

    const createBookReview = async ({
        bookId: { bookId: actualBookId },
        reviewRating,
        reviewText,
    }: CreateBookReviewParams) => {
        try {
            const parsedReviewRating = parseInt(reviewRating, 10);
            console.log(actualBookId);
            const response = await axios.post(
                `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/review/create`,
                {
                    bookId: actualBookId,
                    reviewRating: parsedReviewRating,
                    reviewText,
                },
                {
                    headers: {
                        Authorization: `Bearer ${results.token}`,
                    },
                }
            );
            console.log("Review created successfully:", response.data);
            setRefreshToken(prevToken => prevToken + 1);

        } catch (error) {
            console.log("Error creating book review:", error);
        }
    };

    return {
        createBookReview,
    };
}

export default useCreateBookReview;
