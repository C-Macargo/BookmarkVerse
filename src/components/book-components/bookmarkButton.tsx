import { useEffect, useState } from "react";
import useFetchBookmarks from "../../hooks/FetchUserBookmarks";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";

function BookmarkButton({ bookId }: { bookId: number }) {
    const { bookmarks }: { bookmarks: any } = useFetchBookmarks();
    const bookmarkArray: any = bookmarks.bookmarkIds;
	const [isBookmarked, setIsBookmarked] = useState(false);
	const { results } = useUser();

	useEffect(() => {
		if (bookmarkArray) {
			const bookmarkExists = bookmarkArray.includes(bookId);
			setIsBookmarked(bookmarkExists);
			console.log("Bookmark exists:", bookmarkExists);
		}
	}, [bookmarkArray, bookId]);

	const handleBookmark = async () => {
		try {
			const config = {
				headers: {
					Authorization: `Bearer ${results.token}`,
				},
			};

			if (isBookmarked) {

				await axios.delete(`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/bookmark/delete`,
				{
					data: { bookId },
					...config,
				});
				setIsBookmarked(false);
				console.log("Bookmark removed successfully");
			} else {
				await axios.post(
					`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/bookmark/create`,
					{ bookId },
					config
				);
				setIsBookmarked(true);
				console.log("Bookmark created successfully");
			}
		} catch (error) {
			console.log("Error bookmarking the book:", error);
		}
	};

	return (
		<button
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			onClick={handleBookmark}>
			{isBookmarked ? "Bookmarked" : "Bookmark"}
		</button>
	);
}

export default BookmarkButton;
