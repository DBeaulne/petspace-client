/** Chat Assistant component
 * His name is Max and he's a good boi
 */
import "./ChatAssistant.scss";

const ChatAssistant = ({ onSearch }) => {
	return (
		<div className="chat-container">
			<div className="input-section">
				<textarea
					className="input-section__textarea"
					type="text"
					value={null}
					onChange={null}
					placeholder="Hello! Welcome to PetSpace. Are you looking for a sitter to care for your pet?"
				/>
				<button
					className="input-section__button"
					onClick={null}>
					Send
				</button>
			</div>
		</div>
	);
};

export default ChatAssistant;
