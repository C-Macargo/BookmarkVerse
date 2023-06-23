import background from "../assets/background.jpeg";
import { ImageWrapper } from "../components/home-components/image-wrapper";
import { OverlayText } from "../components/home-components/overlay-text";
import { PopularBookWrapper } from "../components/home-components/pop-book-wrapper";

function Home() {
	return (
		<div className="flex flex-col items-center justify-start">
			<div className="relative flex items-center justify-center">
				<ImageWrapper src={background} alt="Under Construction" />
				<OverlayText />
			</div>
			<h1 className=" text-gray-100">POPULAR BOOKS</h1>
			<PopularBookWrapper/>
		</div>
	);
}

export default Home;
