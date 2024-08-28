/* Chat response component  */
import "./ChatResponse.scss";

const ChatResponse = ({ name, text }) => {
	return (
		<>
			<h3 className="chat-bubble__name">{name}</h3>
			<div className="chat-response">
				<p className="chat-response__text">{text}</p>
			</div>
		</>
	);
};
export default ChatResponse;
