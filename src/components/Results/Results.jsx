import "./Results.scss";
import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { api, getStoredUser } from "../../utils/api";

const Results = ({ sitters = [], criteria = {} }) => {
	const [activeSitter, setActiveSitter] = useState(null);
	const [inquiry, setInquiry] = useState({
		ownerName: "",
		ownerEmail: getStoredUser()?.email || "",
		message: ""
	});
	const [status, setStatus] = useState("");

	const handleInquiryChange = (event) => {
		const { name, value } = event.target;
		setInquiry((prev) => ({ ...prev, [name]: value }));
	};

	const sendInquiry = async (event) => {
		event.preventDefault();
		setStatus("");

		try {
			await api.post("/inquiries", {
				...inquiry,
				sitterId: activeSitter.id,
				petType: criteria.petType || activeSitter.request?.petType,
				petSize: criteria.petSize || activeSitter.request?.petSize,
				startDateTime: criteria.startDateTime || activeSitter.request?.startDateTime,
				endDateTime: criteria.endDateTime || activeSitter.request?.endDateTime,
				locationLabel: activeSitter.request?.locationLabel
			});
			setStatus("Inquiry sent.");
			setActiveSitter(null);
		} catch (err) {
			setStatus(err.response?.data?.message || "Log in before sending an inquiry.");
		}
	};

	return (
		<div className="results">
			<h2 className="results__title">Results</h2>
			{sitters.length === 0 && <p>No approved sitter matches yet. Try a nearby city or broader pet size.</p>}
			{sitters.map((sitter) => (
				<article className="results__container" key={sitter.id}>
					<div className="results__avatar" aria-hidden="true">
						{sitter.firstName?.[0]}{sitter.lastName?.[0]}
					</div>
					<div className="results__content">
						<div className="results__bio-rate-wrapper">
							<div className="results__bio">
								<h3 className="results__bio-name">{sitter.firstName} {sitter.lastName}</h3>
								<address className="results__bio-address">{sitter.city}, {sitter.province} · {sitter.distanceKm} km away</address>
							</div>
							<div className="results__rate">
								<p className="results__hourly-rate">${Number(sitter.hourlyRate).toFixed(0)} / hr</p>
							</div>
						</div>
						<p className="results__blurb">{sitter.bio}</p>
						<p className="results__types">{sitter.acceptedPetTypes?.join(", ")}</p>
						<button className="results__inquiry-button" type="button" onClick={() => setActiveSitter(sitter)}>Send inquiry</button>
					</div>
				</article>
			))}
			{status && <p className="results__status">{status}</p>}
			{activeSitter && (
				<form className="results__inquiry" onSubmit={sendInquiry}>
					<h3>Contact {activeSitter.firstName}</h3>
					<Input classname="input" placeholder="Your name" name="ownerName" value={inquiry.ownerName} onChange={handleInquiryChange} type="text" />
					<Input classname="input" placeholder="Your email" name="ownerEmail" value={inquiry.ownerEmail} onChange={handleInquiryChange} type="email" />
					<Input txtArea classname="input" placeholder="Share what care you need and any important pet details." name="message" value={inquiry.message} onChange={handleInquiryChange} />
					<div className="results__inquiry-actions">
						<Button color="mint" shape="round" borderColor="black" text="send" size="small" margin="0" isLink={false} type="submit" />
						<button type="button" onClick={() => setActiveSitter(null)}>Cancel</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default Results;
