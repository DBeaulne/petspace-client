/* Input component */
import "./Input.scss";
import { useState } from "react";

const Input = ({ classname, placeholder, name, type, value, onChange }) => {
	const [focus, setFocus] = useState("");
	const [error, setError] = useState("");

	const onInvalid = () => {
		// on validation error we set the error classname and clear out the focus
		// classname
		setError("input--error");
		setFocus("");
	};

	const onFocus = () => {
		// on clicking the input we set the focus classname to activate the styling
		setFocus("input--active");
	};

	const onBlur = () => {
		// on clicking the input we clear all the focus and error classnames
		// so that we don't maintain focus or error on the other input fields
		setFocus("");
		setError("");
	};

	return (
		<input
			required
			onInvalid={onInvalid}
			onFocus={onFocus}
			onBlur={onBlur}
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
