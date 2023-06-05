function AuthSubmitButton({ label }: { label: string }) {
	return (
		<button
			className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-purple-600 transition-colors duration-1000"
			type="submit">
			{label}
		</button>
	);
}

export default AuthSubmitButton;