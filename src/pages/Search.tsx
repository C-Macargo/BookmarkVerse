import { useParams } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";

function Search() {
	const { name } = useParams();
	const { results } = useSearch();
	const items = results.items;
	console.log(name);
	console.log(results);
	console.log(results[0]);

	return (
		<div className="flex items-center justify-center h-screen  mt-44">
			<div className="grid grid-cols-2 gap-4">
				{items.map((item) => (
					<div key={item.id} className="flex items-center border-2 border-slate-950">
						{item.volumeInfo.imageLinks &&
							item.volumeInfo.imageLinks.thumbnail && (
								<img
									src={item.volumeInfo.imageLinks.thumbnail}
									alt="Thumbnail"
									className="flex-shrink-0 mr-4"
								/>
							)}
						<div>
							<h3>Title: {item.volumeInfo.title}</h3>
							<p>Author: {item.volumeInfo.authors}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Search;
