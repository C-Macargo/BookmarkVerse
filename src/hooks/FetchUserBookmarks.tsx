import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";

function useFetchBookmarks() {
	const [bookmarks, setBookmarks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { results } = useUser();

	useEffect(() => {
		const fetchBookmarks = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(
					"http://localhost:5000/bookmark/find",
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
	}, []);

	return { bookmarks, isLoading, error };
}

export default useFetchBookmarks;
