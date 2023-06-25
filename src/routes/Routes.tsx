import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Header from "../components/header-components/Header";
import { SearchProvider } from "../contexts/SearchContext";
import Search from "../pages/Search";
import BookPage from "../pages/BookPage";
import Background from "../components/Background";
import { UserProvider } from "../contexts/UserContext";

const AppRoutes = () => {
	return (
		<Router>
			<UserProvider>
			<SearchProvider>
				<Background>
					<Header />
					<div className="absolute inset-0 z-0 overflow-auto">
						<Routes>
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/" element={<Home />} />
							<Route path="/search/:name" element={<Search />} />
							<Route
								path="/book/:googleBooksId"
								element={<BookPage />}
							/>
						</Routes>
					</div>
				</Background>
			</SearchProvider>
			</UserProvider>
		</Router>
	);
};

export default AppRoutes;
