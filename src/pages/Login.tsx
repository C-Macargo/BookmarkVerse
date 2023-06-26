import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/auth-components/Login-form";
import axios from "axios";
import { useState } from "react";
import background from "../assets/background.jpeg";
import { useUser } from "../contexts/UserContext";

type SetResultsFunction = (results: any) => void;

function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const userContext = useUser();
	const setResults: SetResultsFunction = userContext.setResults;
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = {
			email: email,
			password: password,
		};

		try {
			const response = await axios.post(
				`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/login`,
				data
			);
			console.log(response.data);
			setResults(response.data);
			alert("User login sucesseful!");
			navigate("/");
		} catch (error: any) {
			if (error.response) {
				console.log(error.response.status);
				alert(error.response.data.message);
			}
		}
	}

	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen bg-cover "
			style={{
				backgroundImage: `url(${background})`,
			}}>
			{" "}
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
