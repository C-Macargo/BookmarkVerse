import { BookItemProps } from "../../pages/Search";


function BookItem({ item }: BookItemProps) {
  return (
    <div
      key={item.id}
      className="flex items-start w-[480px] h-40 w- overflow-hidden rounded-xl space-x-6 bg-white bg-opacity-50 shadow-xl"
    >
      {item.volumeInfo?.imageLinks?.thumbnail ? (
        <img
          src={item.volumeInfo.imageLinks.thumbnail}
          alt="Thumbnail"
          className="flex-shrink-0 mr-4 w-40 h-40 object-fit"
        />
      ) : (
        <div className="flex-shrink-0 mr-4 w-40 h-40 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <div className="flex flex-col">
        <h3 className="truncate font"><span className="font-bold">Title:</span> {item.volumeInfo?.title}</h3>
        <p className="truncate"><span className="font-bold">Author:</span>{item.volumeInfo?.authors}</p>
      </div>
    </div>
  );
}


export default BookItem;
