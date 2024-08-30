/* AI Assistant Page */
import "./AssistantPage.scss";
import Button from "../../components/Button/Button";
import ChatBubble from "../../components/ChatBubble/ChatBubble";

const AssistantPage = () => {
	return (
		<section className="assistant">
			<ChatBubble
				name={"Max"}
				text={"Hello! Welcome to PetSpace. Are you looking for a sitter to care for your pet?"}
			/>
			<div className="assistant__button-container">
				<Button
					color={"mint"}
					shape={"round"}
					borderColor={"black"}
					text="log in"
					size={"small"}
					isLink={true}
					margin="0"
					to="/login"
				/>
				<Button
					color={"ice"}
					shape={"round"}
					borderColor={"black"}
					text="register"
					size={"small"}
					isLink={true}
					margin="0"
					to="/register"
				/>
			</div>
		</section>
	);
};
export default AssistantPage;
