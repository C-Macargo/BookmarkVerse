import React, { ChangeEvent } from "react";

interface InputFieldProps {
	label: string;
	type: string;
	id: string;
	name: string;
	placeholder: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
}

const AuthInputField: React.FC<InputFieldProps> = ({ label,type,id,name,placeholder,value,onChange,required,}) => {
	return (
		<div className="mb-4">
			<label className="block  mb-2 font-medium" htmlFor={id}>
				{label}
			</label>
			<input className="w-full px-3 py-2 border rounded-md"
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
			/>
		</div>
	);
};

export default AuthInputField;
