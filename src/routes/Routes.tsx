import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Header from "../components/header-components/Header";
import { SearchProvider } from "../contexts/SearchContext";
import Search from "../pages/Search";

const AppRoutes = () => {
	return (
		<Router>
			<SearchProvider>
				<Header />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/" element={<Home />} />
					<Route path="/search/:name" element={<Search />} />
				</Routes>
			</SearchProvider>
		</Router>
	);
};

export default AppRoutes;
