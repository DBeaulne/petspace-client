/* Chat input component */
import "./ChatInput.scss";

const ChatInput = ({ name }) => {
	return (
		<div className="chat-input">
			<form action="">
				<label htmlFor="name">{name}</label>
				<input type="text" />
			</form>
		</div>
	);
};
export default ChatInput;
