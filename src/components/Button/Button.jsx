/* Button component */
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({
	color,
	shape,
	borderColor,
	text,
	size,
	isLink,
	margin,
	textPadding,
	type,
	to = null,
	onClick = null
}) => {
	const className = `button button--${color} button--${shape} button--${size} button-brdr--${borderColor} button-wrapper`;

	const textStyle = {
		padding: textPadding === "none" ? "0" : textPadding || "0"
	};

	return isLink ? (
		<Link
			to={to}
			className={className}>
			<h4
				className="button-text"
				style={textStyle}>
				{text}
			</h4>
		</Link>
	) : (
		<button
			type={type}
			className={className}
			onClick={onClick}>
			<h4
				className="button-text"
				style={textStyle}>
				{text}
			</h4>
		</button>
	);
};

export default Button;
