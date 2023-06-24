import { useEffect, useState } from "react";
import axios from "axios";

interface Book {
	id: number;
	google_books_id: string;
	thumbnail?: string;
	title?: string;
}

interface FetchPopularBooksResult {
	data: Book[] | null;
	isLoading: boolean;
	error: any;
}

function fetchPopularBooks(): FetchPopularBooksResult {
	const [data, setData] = useState<Book[] | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true);
			setError(null);
			try {
				const response = await axios.get(
					`http://localhost:5000/book/find/popular`
				);
				setData(response.data);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		}

		fetchData();
	}, []);

	return { data, isLoading, error };
}

export default fetchPopularBooks;
