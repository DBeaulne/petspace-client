/** Chat Assistant component
 * His name is Max and he's a good boi
 */
import "./ChatAssistant.scss";
import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../App";

const ChatAssistant = ({ onSearch }) => {
	const [userInput, setUserInput] = useState("");
	const [conversation, setConversation] = useState([]);
	const [location, setLocation] = useState({ lat: null, lng: null });

	// Request user location via the Geolocation API
	const getUserLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setLocation({ lat: latitude, lng: longitude });
				},
				(error) => {
					console.error("Error getting location: ", error);
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	};

	const handleInputChange = (e) => setUserInput(e.target.value);

	const handleSendMessage = async () => {
		if (!userInput) return;

		const newConversation = [...conversation, { sender: "user", text: userInput }];
		setConversation(newConversation);

		try {
			// Make a request to your back-end that interacts with the OpenAI API
			const response = await axios.post(`${apiUrl}/chat`, {
				message: userInput,
				userLat: location.lat, // Include latitude from device
				userLng: location.lng // Include longitude from device
			});

			const { reply, function_call, data } = response.data;

			// Append Max's response to the conversation
			setConversation((prev) => [...prev, { sender: "max", text: reply }]);

			// If the response includes a function call, handle it
			if (function_call) {
				switch (function_call.name) {
					case "get_pet_details":
						const { petType, userLat, userLng } = data;
						onSearch(petType, userLat || location.lat, userLng || location.lng);
						break;
					default:
						console.error(`Unknown function call: ${function_call.name}`);
				}
			}
		} catch (error) {
			console.error("Error chatting with Max:", error);
		}

		setUserInput("");
	};

	return (
		<div className="chat-container">
			<div className="conversation">
				{conversation.map((msg, idx) => (
					<div
						key={idx}
						className={`message ${msg.sender}`}>
						{msg.text}
					</div>
				))}
			</div>
			<div className="input-section">
				<input
					type="text"
					value={userInput}
					onChange={handleInputChange}
					placeholder="Hello! Welcome to PetSpace. Are you looking for a sitter to care for your pet?"
				/>
				<button onClick={handleSendMessage}>Send</button>
				<button onClick={getUserLocation}>Get My Location</button> {/* Button to trigger geolocation */}
			</div>
		</div>
	);
};

export default ChatAssistant;
