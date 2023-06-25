import { useState } from "react";
import Modal, { Styles } from "react-modal";
import useCreateBookReview from "../../hooks/CreateBookReview";

// Set the app element for react-modal
Modal.setAppElement("#root");

const customStyles = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		zIndex: 100,
	},
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		width: "800px",
		padding: "20px",
		border: "none",
		borderRadius: "8px",
		boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	reviewText: {
		width: "100%",
		marginBottom: "20px",
	},
	ratingContainer: {
		display: "flex",
		justifyContent: "center",
		marginBottom: "20px",
	},
	ratingButton: {
		backgroundColor: "#ddd",
		border: "none",
		borderRadius: "4px",
		padding: "4px 8px",
		margin: "0 4px",
		cursor: "pointer",
	},
	activeRatingButton: {
		backgroundColor: "#a0d4ff",
	},
};

function RatingButton({
	value,
	active,
	onClick,
}: {
	value: string;
	active: boolean;
	onClick: () => void;
}) {
	const buttonStyle = `px-2 m-2 py-1 rounded ${
		active ? "bg-blue-500 text-white" : "bg-gray-300"
	}`;

	return (
		<button className={buttonStyle} onClick={onClick}>
			{value}
		</button>
	);
}

function ReviewButton(bookId:any) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [ratingValue, setRatingValue] = useState("");
	const [reviewText, setReviewText] = useState("");
    const { createBookReview } = useCreateBookReview();

	const handleButtonClick = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setRatingValue("");
		setReviewText("");
	};

	const handleInputChange = (event: any) => {
		const { name, value } = event.target;
		if (name === "rating") {
			setRatingValue(value);
		} else if (name === "reviewText") {
			setReviewText(value);
		}
	};

	const handleKeyDown = (event: any) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSubmit();
		}
	};

	const handleRatingChange = (value: any) => {
		setRatingValue(value);
	};

	const handleSubmit = () => {
        createBookReview({bookId, reviewRating:ratingValue, reviewText})
		setIsModalOpen(false);
		setRatingValue("");
		setReviewText("");
	};

	return (
		<>
			<button
				className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				onClick={handleButtonClick}>
				Review
			</button>
			<Modal
				isOpen={isModalOpen}
				onRequestClose={handleCloseModal}
				contentLabel="Review Modal"
				style={customStyles as Styles}>
				<h2 className="text-xl font-bold mb-4">
					Review and rate this book!
				</h2>
				<div className="flex justify-center mb-4">
					<RatingButton
						value="1"
						active={ratingValue === "1"}
						onClick={() => handleRatingChange("1")}
					/>
					<RatingButton
						value="2"
						active={ratingValue === "2"}
						onClick={() => handleRatingChange("2")}
					/>
					<RatingButton
						value="3"
						active={ratingValue === "3"}
						onClick={() => handleRatingChange("3")}
					/>
					<RatingButton
						value="4"
						active={ratingValue === "4"}
						onClick={() => handleRatingChange("4")}
					/>
					<RatingButton
						value="5"
						active={ratingValue === "5"}
						onClick={() => handleRatingChange("5")}
					/>
				</div>
				<textarea
					id="reviewText"
					name="reviewText"
					value={reviewText}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					rows={4}
					style={customStyles.reviewText}
					placeholder="Enter your review..."
				/>
				<div className="flex justify-center mt-4">
					<button
						onClick={handleCloseModal}
						className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
						Close
					</button>
					<button
						className="bg-green-600 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition ease-in duration-200"
						onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</Modal>
		</>
	);
}

export default ReviewButton;
