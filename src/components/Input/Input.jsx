/* Input component */
import "./Input.scss";
import { useState } from "react";

const Input = ({ classname, placeholder, name, type, value, onChange }) => {
	const [focus, setFocus] = useState("");
	const [error, setError] = useState("");

	const onInvalid = () => {
		setError("input--error");
		setFocus("");
	};

	const onFocus = () => {
		setFocus("input--active");
	};

	const onBlur = () => {
		setFocus("");
		setError("");
	};

	return (
		<input
			onInvalid={onInvalid}
			onFocus={onFocus}
			onBlur={onBlur}
			required
			value={value}
			className={`input ${classname} ${focus} ${error}`}
			placeholder={placeholder}
			type={type}
			name={name}
			onChange={onChange}
		/>
	);
};

export default Input;
