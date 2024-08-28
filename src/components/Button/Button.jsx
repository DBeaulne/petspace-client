/* Button component */
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ color, shape, borderColor, text, size, isLink, margin, to, onClick }) => {
	const className = `button--${color} button--${shape} button--${size} button-brdr--${borderColor} button-wrapper`;

	const buttonStyle = {
		padding: margin === "none" ? "0" : margin || "0"
	};

	return isLink ? (
		<Link
			to={to}
			className={className}>
			<h4
				className="button-text"
				style={buttonStyle}>
				{text}
			</h4>
		</Link>
	) : (
		<button
			className={className}
			onClick={onClick}>
			<h4
				className="button-text"
				style={buttonStyle}>
				{text}
			</h4>
		</button>
	);
};

export default Button;
