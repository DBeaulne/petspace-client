/* Chat Bubble component */
import "./ChatBubble.scss";

const ChatBubble = ({ name, text, input }) => {
	return (
		<section className="chat-bubble">
			<h3 className="chat-bubble__name">{name}</h3>
			<div className="chat-bubble__response-box">
				<p className="chat-bubble__text">{text}</p>
			</div>
		</section>
	);
};
export default ChatBubble;
