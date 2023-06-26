import React, { createContext, useState, useContext, ReactNode } from "react";

interface UserContextType {
	results: any;
	setResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
	children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
	const [results, setResults] = useState<any[]>([]);

	return (
		<UserContext.Provider value={{ results, setResults }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUser(): UserContextType {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error("useUser must be used within a SearchProvider");
	}
	return context;
}
