import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import RegisterForm from "../components/auth-components/Register-form";
import background from "../assets/background.jpeg";

function Register() {
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [name, setName] = useState<string>("");
	const [pictureUrl, setPictureUrl] = useState<string>("");

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = {
			email: email,
			password: password,
			name: name,
			picture_url: pictureUrl,
		};
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_REACT_APP_API_BASE_URL}/auth/register`,
				data
			);
			console.log(response.data);
			alert("User registered successfully!");
			navigate("/login");
		} catch (error: any) {
			if (error.response) {
				console.log(error.response.data);
				alert(error.response.data.errors);
			}
		}
	}

	return (
		<div
			className="flex flex-col items-center justify-center min-h-screen bg-cover bg-gradient-to-t"
			style={{
				backgroundImage: `url(${background})`,
			}}>
			<div className="max-w-md w-full p-6 bg-white rounded-lg shadow">
				<h2 className="text-2xl font-semibold mb-6">Register</h2>
				<RegisterForm
					email={email}
					setEmail={setEmail}
					password={password}
					setPassword={setPassword}
					confirmPassword={confirmPassword}
					setConfirmPassword={setConfirmPassword}
					name={name}
					setName={setName}
					pictureUrl={pictureUrl}
					setPictureUrl={setPictureUrl}
					onSubmit={handleSubmit}
				/>
				<div className=" flex justify-center m-2 hover:color-gray-600">
					<span className="hover:text-purple-600 transition-colors duration-500">
						<Link to="/login">
							Already have an account? Login now!
						</Link>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Register;
