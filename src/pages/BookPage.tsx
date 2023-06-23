import { useParams } from "react-router-dom";
import fetchSpecificBook from "../hooks/FetchSpecificBook";

function BookPage() {
	const { googleBooksId } = useParams<{ googleBooksId: string }>();
	const bookData = fetchSpecificBook(googleBooksId).data;
	return (
		<div className="flex flex-col h-screen items-center pt-[106px] text-white">
			<h1 className="text-5xl font-semibold mb-8">Book</h1>
			{bookData && (
				<div className="flex bg-[#3F3A6B] p-6 rounded-xl shadow-lg text-white space-x-6 w-3/4">
					<div className="flex-shrink-0">
						<img className="w-36 h-48 object-fit rounded-lg" src={bookData.thumbnail} alt={bookData.title} />
					</div>
					<div className="flex flex-col flex-grow space-y-4">
						<h2 className="text-4xl font-bold">{bookData.title}</h2>
						<p className="text-lg font-medium">Subtitle: {bookData.subtitle}</p>
						<p className="text-lg font-medium">Language: {bookData.language}</p>
						<p className="text-lg font-medium">Author: {bookData.authors}</p>
						<p className="text-lg font-medium">Published in: {bookData.published_date}</p>
						<p className="text-sm">{bookData.description}</p>
						<div className="flex space-x-4">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								onClick={() => {}}
							>
								Bookmark
							</button>
							<button
								className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
								onClick={() => {}}
							>
								Review
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
	
}

export default BookPage;
