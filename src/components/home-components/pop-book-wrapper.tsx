import fetchPopularBooks from "../../hooks/FetchPopularBooks";
import BookCard from "./home-book-card";

export function PopularBookWrapper() {
    const { data: bookData, isLoading, error } = fetchPopularBooks();
    console.log(bookData)
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-row flex-wrap">
            {bookData && bookData.map((book, index) => (
                <BookCard book={book} index={index} />
            ))}
        </div>
    );
    
}
