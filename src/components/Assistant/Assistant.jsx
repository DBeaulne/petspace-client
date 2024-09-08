/* AI Assistant componentS */
import "./Assistant.scss";
import Button from "../Button/Button";

const Assistant = () => {
	return (
		<section className="ai-assistant">
			<h3 className="ai-assistant__intro-text">Let our AI Assistant help you find the perfect match.</h3>
			<Button
				color={"light-grey"}
				shape={"straight"}
				borderColor={"blue"}
				text="Click here to begin..."
				size={"large"}
				isLink={true}
				to="/assistant"
			/>
		</section>
	);
};
export default Assistant;
