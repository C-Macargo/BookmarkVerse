import { useNavigate } from "react-router-dom";

function BookCard({ book }: { book: any }) {
	const navigate = useNavigate();

	function handleClick() {
		navigate(`/book/${book.google_books_id}`);
	}

	return (
		<div
			className="w-28 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-2"
			onClick={handleClick}>
			{book.thumbnail ? (
				<img
					className="object-fit w-full h-40"
					src={book.thumbnail}
					alt="book thumbnail"
				/>
			) : (
				<div className="w-full h-40 bg-gray-300 flex items-center justify-center">
					<span>No Image</span>
				</div>
			)}
			<div className="py-3 text-center">
				<a
					href="#"
					className="block text-l font-bold text-gray-800 dark:text-white">
					{book.title ? book.title : "Unknown Title"}
				</a>
			</div>
		</div>
	);
}

export default BookCard;
