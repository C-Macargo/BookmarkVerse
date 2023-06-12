import React from "react";

interface AuthInputFieldProps {
	label: string;
	type: string;
	id: string;
	name: string;
	placeholder: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
}

function AuthInputField({
	label,
	type,
	id,
	name,
	placeholder,
	value,
	onChange,
	required,
}: AuthInputFieldProps) {
	return (
		<div className="mb-4">
			<label className="block mb-2 font-medium" htmlFor={id}>
				{label}
			</label>
			<input
				className="w-full px-3 py-2 border rounded-md"
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
}

export default AuthInputField;
