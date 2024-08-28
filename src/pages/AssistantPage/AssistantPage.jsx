/* AI Assistant Page */
import "./AssistantPage.scss";
import Button from "../../components/Button/Button";

const AssistantPage = () => {
	return (
		<section className="assistant">
			<div className="assistant__button-container">
				<Button
					color={"mint"}
					shape={"round"}
					borderColor={"black"}
					text="log in"
					size={"small"}
					isLink={true}
					margin="0"
					to="/"
				/>
				<Button
					color={"ice"}
					shape={"round"}
					borderColor={"black"}
					text="register"
					size={"small"}
					isLink={true}
					margin="0"
					to="/"
				/>
			</div>
		</section>
	);
};
export default AssistantPage;
