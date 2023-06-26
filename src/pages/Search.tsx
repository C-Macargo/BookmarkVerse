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
	const { results } = useSearch() as any;
	const items = results.items as any[];

	return (
		
		<div className="flex flex-col h-screen items-center pt-[106px]">
			<div className="flex flex-col justify-center items-center flex-grow">
				<h1 className="text-4xl text-white mb-6 font-semibold tracking-wide shadow-lg">
					{name}
				</h1>
				<div className="grid grid-cols-2 gap-8">
					{items.map((item) => (
						<BookItem key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
}



export default Search;
