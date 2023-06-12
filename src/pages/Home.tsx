import background from "../assets/background.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#14181c] flex flex-col items-center justify-start">
      <div className="relative flex items-center justify-center">
        <div className="w-4/5 sm:w-2/3">
          <img
            src={background}
            className="mx-auto h-auto object-cover rounded-xl opacity-75"
            alt="Under Construction"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            BookmarkVerse: <br />
            Discover, Bookmark, and Rate Your Favorite Reads!
          </h2>
          <button className="px-4 py-2 bg-white text-black rounded-md">Join us now!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
