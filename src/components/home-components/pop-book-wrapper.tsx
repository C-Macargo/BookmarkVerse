import fetchPopularBooks from "../../hooks/FetchPopularBooks";
import BookCard from "./book-card";

export function PopularBookWrapper() {
    const { data: bookData, isLoading, error } = fetchPopularBooks();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-row flex-wrap">
            {bookData && bookData.map((book) => (
                <BookCard key={book.id} book={book}/>
            ))}
        </div>
    );
}
