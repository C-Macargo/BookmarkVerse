import { useEffect, useState } from "react";
import axios from "axios";
import { useRefresh } from "../contexts/RefreshContext"; // Import useRefresh

interface Review {
    id: number;
    rating: number;
    text: string;
    user:{
        name:string;
        picture_url:string
    }
}

interface FetchPopularBooksResult {
    totalReviews: number;
    currentPage: number;
    reviewsPerPage: number;
    data: Review[] | null;
    isLoading: boolean;
    error: any;
}

function fetchBookReviews(bookId: number): FetchPopularBooksResult {
    const [data, setData] = useState<Review[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<any>(null);
    const [totalReviews, setTotalReviews] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [reviewsPerPage, setReviewsPerPage] = useState<number>(10);

    const { refreshToken } = useRefresh(); 

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/review/find/${bookId}`,
                );
                const { totalReviews, currentPage, reviewsPerPage, reviews } =
                    response.data;
                setTotalReviews(totalReviews);
                setCurrentPage(currentPage);
                setReviewsPerPage(reviewsPerPage);
                setData(reviews);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [bookId, refreshToken]); 

    return {
        totalReviews,
        currentPage,
        reviewsPerPage,
        data,
        isLoading,
        error,
    };
}

export default fetchBookReviews;
