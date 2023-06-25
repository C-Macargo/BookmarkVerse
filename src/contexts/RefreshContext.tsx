import React, { createContext, useState, useContext, ReactNode } from "react";

interface RefreshContextValue {
	refreshToken: number;
	setRefreshToken: React.Dispatch<React.SetStateAction<number>>;
}

const RefreshContext = createContext<RefreshContextValue | undefined>(
	undefined
);

interface RefreshProviderProps {
	children: ReactNode;
}

export function RefreshProvider({ children }: RefreshProviderProps) {
	const [refreshToken, setRefreshToken] = useState<number>(0);

	return (
		<RefreshContext.Provider value={{ refreshToken, setRefreshToken }}>
			{children}
		</RefreshContext.Provider>
	);
}

export function useRefresh() {
	const context = useContext(RefreshContext);

	if (!context) {
		throw new Error("useRefresh must be used within a RefreshProvider");
	}

	return context;
}
