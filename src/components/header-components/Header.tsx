import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
	const navigate = useNavigate();

	function handleNavigation(path: string) {
		navigate(path);
	}

	return (
		<header className="bg-gray-900 bg-opacity-70 py-4 text-xl fixed top-0 w-full z-10 opacity-80">
			<Navbar handleNavigation={handleNavigation} />
		</header>
	);
}

export default Header;
