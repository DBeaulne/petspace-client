/* Chat response component  */
import "./ChatResponse.scss";

const ChatResponse = ({ text }) => {
	return (
		<div className="chat-response">
			<p className="chat-response__text">{text}</p>
		</div>
	);
};
export default ChatResponse;
