import { useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function UserDropDownMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const { results } = useUser();
    const navigate = useNavigate()
    
    function logout(){
    window.location.reload()
    navigate('/')
    }

	return (
		<div className="relative">
			<div
				className="rounded-full w-8 h-8 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}>
				<img
					src={results.data.picture_url}
					className="w-8 h-8 rounded-full"
					alt="user-avatar"
				/>
			</div>
			{isOpen && (
				<div className="absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg">
					<div className="rounded-md bg-white shadow-xs">
						<div className="py-1">
							<a
								href="#"
                                onClick={logout}
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
								Logout
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default UserDropDownMenu;
