function BookCard ({ book, index }){
    return (
        <div key={index} className="w-28 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 m-2">
            <img className="object-fit w-full h-40" src={book.thumbnail} alt="book thumbnail" />
            <div className="py-3 text-center">
                <a href="#" className="block text-l font-bold text-gray-800 dark:text-white">
                    {book.title ? book.title : "Unknown Title"}
                </a>
            </div>
        </div>
    );
};

export default BookCard;
