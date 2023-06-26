import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";

function useFetchBookmarks() {
	const [bookmarks, setBookmarks] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<any>(null);
	const { results } = useUser();

	useEffect(() => {
		const fetchBookmarks = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/bookmark/find`,
					{
						headers: {
							Authorization: `Bearer ${results.token}`,
						},
					}
				);
				setBookmarks(response.data);
			} catch (error: any) {
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchBookmarks();
	}, [results]);

	return { bookmarks, isLoading, error };
}

export default useFetchBookmarks;
