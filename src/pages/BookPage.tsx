import { useParams } from "react-router-dom";
import fetchSpecificBook from "../hooks/FetchSpecificBook";
import BookmarkButton from "../components/book-components/bookmarkButton";
import ReviewButton from "../components/book-components/reviewButton";
import ReviewWrapper from "../components/book-components/reviewWrapper";
import { useUser } from "../contexts/UserContext";



function BookPage() {
	const { googleBooksId } = useParams();
	const bookData = fetchSpecificBook(googleBooksId).data;

	return (
		<div className="flex flex-col h-screen items-center pt-[106px] text-white">
			{bookData && <BookDetails bookData={bookData} />}
			{bookData && <ReviewWrapper bookId={bookData.id} />}
		</div>
	);
}

function BookDetails({ bookData }: { bookData: any }) {
	const { results } = useUser();

	if (!bookData) {
		return null; 
	}

	return (
		<div className="flex bg-[#3F3A6B] p-6 rounded-xl shadow-lg text-white space-x-6 w-3/4 mb-12">
			<div className="flex-shrink-0">
				<img
					className="w-36 h-48 object-fit rounded-lg"
					src={bookData.thumbnail}
					alt={bookData.title}
				/>
			</div>
			<div className="flex flex-col flex-grow space-y-4">
				<h2 className="text-4xl font-bold">{bookData.title}</h2>
				<p className="text-lg font-medium">
					Subtitle: {bookData.subtitle}
				</p>
				<p className="text-lg font-medium">
					Language: {bookData.language}
				</p>
				<p className="text-lg font-medium">
					Author: {bookData.authors}
				</p>
				<p className="text-lg font-medium">
					Published in: {bookData.published_date}
				</p>
				<p className="text-sm">{bookData.description}</p>
				{results.length !== 0 ? (
					<div className="flex space-x-4">
						<BookmarkButton bookId={bookData.id} />
						<ReviewButton bookId={bookData.id} />
					</div>
				) : (
					<p className="text-lg font-medium text-red-500">
						Log in to review and bookmark
					</p>
				)}
			</div>
		</div>
	);
}

export default BookPage;
