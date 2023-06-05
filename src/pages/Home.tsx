import background from "../assets/background.jpeg";

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<img
				src={background}
				className="w-full h-full object-cover"
				alt="Under Construction"
			/>
			<div className="absolute top-1/3 flex items-center justify-center text-center text-white">
				<h2 className="text-4xl font-bold">
					BookmarkVerse : Discover, Bookmark, and Rate Your Favorite Reads!
				</h2>
			</div>
		</div>
	);
};

export default Home;
