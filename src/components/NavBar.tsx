import { useNavigate } from "react-router-dom";

function NavBar() {
	const navigate = useNavigate();

	const handleNavigation = (path: any) => {
		navigate(path);
	};

	return (
		<header className="bg-gray-900 py-4 text-xl fixed top-0 w-full z-10">
			<nav className="flex items-center justify-between container mx-auto px-6">
				<h1
					onClick={() => handleNavigation("/")}
					className="text-white text-3xl font-bold hover:text-purple-600 transition duration-1000 ease-in-out">
					BookmarkVerse
				</h1>
				<ul className="flex space-x-4">
					<li>
						<a
							className="text-white hover:text-purple-600 transition duration-1000 ease-in-out"
							onClick={() => handleNavigation("/")}>
							Home
						</a>
					</li>
					<li>
						<a
							className="text-white hover:text-purple-600 transition duration-1000 ease-in-out"
							onClick={() => handleNavigation("/login")}>
							Login
						</a>
					</li>
					<li>
						<a
							className="text-white hover:text-purple-600 transition duration-1000 ease-in-out"
							onClick={() => handleNavigation("/register")}>
							Register
						</a>
					</li>
					<li>
						<a
							className="text-white hover:text-purple-600 transition duration-1000 ease-in-out"
							onClick={() => handleNavigation("/review")}>
							Review
						</a>
					</li>
					<li>
						<a
							className="text-white hover:text-purple-600 transition duration-1000 ease-in-out"
							onClick={() => handleNavigation("/bookmarks")}>
							Bookmarks
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavBar;
