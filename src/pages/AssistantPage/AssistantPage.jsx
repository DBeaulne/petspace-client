/* AI Assistant Page */
import "./AssistantPage.scss";
import Button from "../../components/Button/Button";
import ChatExample from "../../assets/images/assistantChat.png";
import ChatAssistant from "../../components/ChatAssistant/ChatAssistant";
import { useNavigate } from "react-router-dom";

const AssistantPage = () => {
	const navigate = useNavigate();

	const handleSearch = (petType, userLat, userLng) => {
		// Navigate to search results with query parameters
		navigate(`/results?petType=${petType}&lat=${userLat}&lng=${userLng}`);
	};

	return (
		<section className="assistant">
			<div className="assistant__img-wrapper">
				<img
					className="assistant__chat-image"
					src={ChatExample}
					alt="example of what the chat could look like with Max, our assistant chatbot"
				/>
			</div>
			{/* <ChatAssistant onSearch={handleSearch} /> */}
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
