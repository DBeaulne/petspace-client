/* Service Card component */
import "./Card.scss";

const Card = ({ icon, title, text, icon_alt_text }) => {
	return (
		<div className="card">
			<div className="card__icon">
				<img
					className="card__content-icon"
					src={icon}
					alt={icon_alt_text}
				/>
			</div>
			<div className="card__content"></div>
			<h3>{title}</h3>
			<p>{text}</p>
		</div>
	);
};
export default Card;
