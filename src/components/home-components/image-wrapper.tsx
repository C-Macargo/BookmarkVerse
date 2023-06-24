interface ImageWrapperProps {
	src: string;
	alt: string;
}

export function ImageWrapper({ src, alt }: ImageWrapperProps) {
	return (
		<div className="relative flex items-center justify-center w-2/3 sm:w-2/3">
			<img
				src={src}
				className="mx-auto h-auto object-cover rounded-xl opacity-95"
				alt={alt}
			/>
		</div>
	);
}
