import logo from "../../assets/logo.png";

interface LogoProps {
	handleNavigation: (path: string) => void;
}

function Logo({ handleNavigation }: LogoProps) {
	return (
		<div className=" inline-flex">
			<img
				src={logo}
				alt="BookmarkVerse Logo"
				className="w-16 h-12 -mt-2 -mb-2"
			/>
			<h1
				onClick={() => handleNavigation("/")}
				className="text-white text-3xl font-bold hover:text-purple-600 transition duration-1000 ease-in-out">
				BookmarkVerse
			</h1>
		</div>
	);
}

export default Logo;
