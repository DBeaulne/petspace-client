/* Button component */
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ color, shape, borderColor, text, size, isLink, margin, textPadding, to, onClick }) => {
	const className = `button--${color} button--${shape} button--${size} button-brdr--${borderColor} button-wrapper`;

	const buttonStyle = {
		margin: margin === "none" ? "0" : margin || "0"
	};

	const textStyle = {
		padding: textPadding === "none" ? "0" : textPadding || "0"
	};

	return isLink ? (
		<Link
			to={to}
			className={className}
			style={buttonStyle}>
			<h4
				className="button-text"
				style={textStyle}>
				{text}
			</h4>
		</Link>
	) : (
		<button
			className={className}
			style={buttonStyle}
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
