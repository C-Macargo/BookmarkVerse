import axios from "axios";
import { useState, useEffect } from "react";

interface BookData {
	id?: number;
	google_books_id?: string;
	thumbnail?: string;
	title?: string;
	subtitle?: string;
	language?: string;
	authors?: string;
	published_date?: string;
	description?: string;
}

interface UseFetchSpecificBookResult {
	data: BookData | null;
	isLoading: boolean;
	error: any;
}

function fetchSpecificBook(googleBooksId: any): UseFetchSpecificBookResult {
	const [data, setData] = useState<BookData | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			setError(null);
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/book/find/${googleBooksId}`
				);
				setData(response.data);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [googleBooksId]);

	return { data, isLoading, error };
}

export default fetchSpecificBook;
