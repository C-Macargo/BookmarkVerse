import axios from "axios";
import React, { useState } from "react";
import { useSearch } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

function SearchBar() {
	const [searchQuery, setSearchQuery] = useState("");
	const searchContext = useSearch();
	const setResults = searchContext.setResults;
	const navigate = useNavigate();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = {
			title: searchQuery,
		};
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/book/find/`,
				data
			);
			setResults(response.data);
			navigate(`/search/${searchQuery}`);
		} catch (error: any) {
			if (error.response) {
				console.log(error.response.status);
				alert(error.response.data.message);
			}
		}
		setSearchQuery('')
	}

	return (
		<form onSubmit={handleSubmit} className=" inline-flex items-center space-x-2">
			<div className="relative rounded-full">
				<input
					type="text"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="py-2 px-4 rounded-full h-1/2"
					placeholder="Search for books..."
				/>
				<button
					type="submit"
					className="absolute right-0 top-1/2 py-2 px-4 rounded-full text-purple-700 transform -translate-y-1/2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-4 h-4">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</button>
			</div>
		</form>
	);
}

export default SearchBar;
