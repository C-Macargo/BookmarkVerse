import { ReactNode } from "react";

interface GradientBackgroundProps {
	children: ReactNode;
}

function Background({ children }: GradientBackgroundProps) {
	return (
		<div className="min-h-screen bg-gradient-to-b from-[#4616A6] to-[#250C59]">
			{children}
		</div>
	);
}

export default Background;
