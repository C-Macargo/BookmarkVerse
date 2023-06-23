import { useNavigate } from "react-router-dom";
import { BookItemProps } from "../../pages/Search";

function BookItem({ item }: BookItemProps) {

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/book/${item.id}`);
  }

  return (
    <div
      key={item.id}
      className="flex items-start w-[520px] h-36 overflow-hidden rounded-xl space-x-6 bg-[#3F3A6B] bg-opacity-90 shadow-xl"
      onClick={handleClick}
    >
      {item.volumeInfo?.imageLinks?.thumbnail ? (
        <img
          src={item.volumeInfo.imageLinks.thumbnail}
          alt="Thumbnail"
          className="flex-shrink-0 mr-4 h-full w-28"
        />
      ) : (
        <div className="flex-shrink-0 mr-4 h-full w-28 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      <div className="flex flex-col text-white">
        <h3 className="truncate">
          <span className="font-bold">Title:</span> {item.volumeInfo?.title}
        </h3>
        <p className="truncate ">
        <span className="font-bold">Author:</span> {item.volumeInfo?.authors}
          {item.volumeInfo?.authors}
        </p>
      </div>
    </div>
  );
}  


export default BookItem;
