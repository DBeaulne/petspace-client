/* Chat Bubble component */
import "./ChatBubble.scss";

const ChatBubble = ({ name, text, input, color }) => {
	return (
		<section className="chat-bubble">
			<div className="chat-bubble__wrapper">
				<h3 className="chat-bubble__name">{name}</h3>
				<div className="chat-bubble__response-box chat-bubble__response-box--response">
					<p className="chat-bubble__text">{text}</p>
				</div>
			</div>
		</section>
	);
};
export default ChatBubble;
