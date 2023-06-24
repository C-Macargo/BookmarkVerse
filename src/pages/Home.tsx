import background from "../assets/background.jpeg";
import { Features } from "../components/home-components/features-cards";
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
			<div className=" flex flex-col items-center">
			<p className=" p-4 font-bold text-xl text-gray-100">Check out the most popular books on our website!</p>
			</div>
			<PopularBookWrapper/>
			<Features/>
		</div>
	);
}

export default Home;
