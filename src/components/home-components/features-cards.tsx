import { IoHeart } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { IoConstruct } from "react-icons/io5";


import React from "react";

interface FeatureCardProps {
	icon: React.ReactNode;
	text: string;
}

export function Features() {
	return (
		<div className="m-10 text-white font-semibold">
			<h1>bookmarkVerse lets you...</h1>
			<div className="text-white text-center grid grid-cols-3 gap-4">
				<FeatureCard
					icon={<IoEye className="m-2 w-8 h-8" />}
					text="Keep track of every book you've ever read (or just start from the day you join)"
				/>
				<FeatureCard
					icon={<IoHeart className="m-2 w-8 h-8" />}
					text="Show some love for your favorite books"
				/>
				<FeatureCard
					icon={<IoStar className="m-2 w-8 h-8" />}
					text="Rate each book on a five-star scale to record and share your reactions"
				/>
				<FeatureCard
					icon={<IoBookmark className="m-2 w-8 h-8" />}
					text="Bookmark your favorite reads"
				/>
				<FeatureCard
					icon={<IoConstruct className="m-2 w-8 h-8" />}
					text="More features under construction"
				/>
				<FeatureCard
					icon={<IoConstruct className="m-2 w-8 h-8" />}
					text="More features under construction"
				/>
			</div>
		</div>
	);
}

function FeatureCard({ icon, text }: FeatureCardProps) {
	return (
		<div className="rounded-lg shadow-lg dark:bg-gray-800 h-40 w-72 flex items-center">
			<div className="flex items-center m-2">{icon}</div>
			<div className="w-full m-3">{text}</div>
		</div>
	);
}
