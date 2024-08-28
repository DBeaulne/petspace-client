/* Button component */
import { Link } from "react-router-dom";
import "./Button.scss";

const Button = ({ color, shape, text, size, isLink, margin, to, onClick }) => {
	const className = `${color}-button ${shape}-button ${size}-button button-wrapper`;

	const buttonStyle = {
		margin: margin === "none" ? "0" : margin || "1rem"
	};

	return isLink ? (
		<Link
			to={to}
			className={className}
			style={buttonStyle}>
			<h4 className="button-text">{text}</h4>
		</Link>
	) : (
		<button
			className={className}
			style={buttonStyle}
			onClick={onClick}>
			<h4 className="button-text">{text}</h4>
		</button>
	);
};

export default Button;
