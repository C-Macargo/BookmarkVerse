import { FormEvent, ChangeEvent } from "react";
import AuthInputField from "./Auth-input-field";
import AuthSubmitButton from "./Auth-submit-button";

interface RegisterFormProps {
	email: string;
	setEmail: (email: string) => void;
	password: string;
	setPassword: (password: string) => void;
	confirmPassword: string;
	setConfirmPassword: (confirmPassword: string) => void;
	name: string;
	setName: (name: string) => void;
	pictureUrl: string;
	setPictureUrl: (pictureUrl: string) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function RegisterForm({
	email,
	setEmail,
	password,
	setPassword,
	name,
	setName,
	pictureUrl,
	setPictureUrl,
	onSubmit,
	confirmPassword,
	setConfirmPassword,
}: RegisterFormProps) {
	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const handlePictureUrlChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPictureUrl(event.target.value);
	};

	const handleConfirmPassowrdChange = (
		event: ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
			<AuthInputField
				label="Name"
				type="text"
				id="name"
				name="name"
				placeholder="Enter your name"
				value={name}
				onChange={handleNameChange}
				required
			/>
			<AuthInputField
				label="Email"
				type="email"
				id="email"
				name="email"
				placeholder="Enter your email"
				value={email}
				onChange={handleEmailChange}
				required
			/>
			<AuthInputField
				label="Profile Picture"
				type="text"
				id="picture"
				name="picture"
				placeholder="Enter your profile picture URL"
				value={pictureUrl}
				onChange={handlePictureUrlChange}
				required
			/>
			<AuthInputField
				label="Password"
				type="password"
				id="password"
				name="password"
				placeholder="Enter your password"
				value={password}
				onChange={handlePasswordChange}
				required
			/>
			<AuthInputField
				label="Confirm Password"
				type="password"
				id="confirm-password"
				name="confirm-password"
				placeholder="Confirm your password"
				value={confirmPassword}
				onChange={handleConfirmPassowrdChange}
				required
			/>
			<AuthSubmitButton label="Register" />
		</form>
	);
}

export default RegisterForm;
