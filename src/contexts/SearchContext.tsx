import React, { createContext, useState, useContext, ReactNode } from "react";

interface SearchContextType {
	results: any[];
	setResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
	children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
	const [results, setResults] = useState<any[]>([]);

	return (
		<SearchContext.Provider value={{ results, setResults }}>
			{children}
		</SearchContext.Provider>
	);
};

export const useSearch = (): SearchContextType => {
	const context = useContext(SearchContext);
	if (!context) {
		throw new Error("useSearch must be used within a SearchProvider");
	}
	return context;
};
