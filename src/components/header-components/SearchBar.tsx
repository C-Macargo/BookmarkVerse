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
				"http://localhost:5000/book/find",
				data
			);
			console.log(response.data);
            setResults(response.data)
            navigate(`/search/${searchQuery}`)
		} catch (error: any) {
			if (error.response) {
				console.log(error.response.status);
				alert(error.response.data.message);
			}
		}
	}

	return (
		<form onSubmit={handleSubmit} className="flex items-center space-x-2">
			<input
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				className="py-2 px-4 rounded-full"
				placeholder="Search for books..."
			/>
			<button
				type="submit"
				className="py-2 px-4 rounded bg-purple-600 text-white">
				Search
			</button>
		</form>
	);
}

export default SearchBar;
