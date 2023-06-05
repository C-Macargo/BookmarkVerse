import { FormEvent, ChangeEvent } from "react";
import AuthInputField from "./Auth-input-field";
import AuthSubmitButton from "./Auth-submit-button";

interface LoginFormProps {
	email: string;
	setEmail: (email: string) => void;
	password: string;
	setPassword: (password: string) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function LoginForm({
	email,
	setEmail,
	password,
	setPassword,
	onSubmit,
}: LoginFormProps) {
	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
	};

	return (
		<form onSubmit={onSubmit}>
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
				label="Password"
				type="password"
				id="password"
				name="password"
				placeholder="Enter your password"
				value={password}
				onChange={handlePasswordChange}
				required
			/>
			<AuthSubmitButton label="Sign In" />
		</form>
	);
}

export default LoginForm;
