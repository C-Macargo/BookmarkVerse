import { useParams } from "react-router-dom";
import { useSearch } from "../contexts/SearchContext";
import BookItem from "../components/search-components/BookItem";

interface ImageLinks {
	thumbnail?: string;
}

interface VolumeInfo {
	title?: string;
	authors?: string;
	imageLinks?: ImageLinks;
}

export interface BookItemProps {
	item: {
		id?: string;
		volumeInfo?: VolumeInfo;
	};
}

function Search() {
	const { name } = useParams();
	const { results } = useSearch();
	const items = results.items as BookItemProps['item'][]; 

	return (
		<div className="flex items-center justify-center h-screen mt-14">
			<div className="grid grid-cols-2 gap-4">
				{items.map((item) => (
					<BookItem key={item.id} item={item} /> 
				))}
			</div>
		</div>
	);
}

export default Search;
