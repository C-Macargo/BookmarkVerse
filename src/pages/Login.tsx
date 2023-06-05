import { Link } from "react-router-dom";
import LoginForm from "../components/auth-components/Login-form";
import axios from "axios";
import { useState } from "react";

function Login() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log("Login form submitted");

		const data = {
			email: email,
			password: password,
		};

		try {
			const response = await axios.post(
				"http://localhost:5000/auth/login",
				data
			);
			console.log(response);
			console.log(response.data.userToken);
			alert(response.data.userToken)
		} catch (error: any) {
			if (error.response) {
				console.log(error.response.status);
				alert(error.response.data.message);
			}
		}
	};

	return (
		<div className="flex bg-flex flex-col items-center justify-center min-h-screen bg-gray-700">
			<div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
				<h2 className="text-2xl font-semibold mb-6">Login</h2>
				<LoginForm
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					onSubmit={handleSubmit}
				/>
				<div className="flex justify-center m-2">
					<span className="hover:text-purple-600 transition-colors duration-500">
						<Link to="/register">
							Don't have an account yet? Register now!
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Login;
