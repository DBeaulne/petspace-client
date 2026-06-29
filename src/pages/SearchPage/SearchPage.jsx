import "./SearchPage.scss";
import Button from "../../components/Button/Button";
import errorIcon from "../../assets/icons/error-24px.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import Input from "../../components/Input/Input";
import { api } from "../../utils/api";

const initialCriteria = {
	petType: "",
	petSize: "",
	city: "",
	postalCode: "",
	startDateTime: "",
	endDateTime: ""
};

const SearchPage = () => {
	const [criteria, setCriteria] = useState(initialCriteria);
	const [assistantMessage, setAssistantMessage] = useState("");
	const [assistantReply, setAssistantReply] = useState("");
	const [errors, setErrors] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const validateForm = () => {
		const newErrors = {};

		["petType", "petSize"].forEach((key) => {
			if (!criteria[key] || criteria[key].includes("Pet ")) {
				newErrors[key] = "This field is required.";
			}
		});

		if (!criteria.city && !criteria.postalCode) {
			newErrors.location = "City or postal code is required.";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setCriteria((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => {
			const next = { ...prev };
			delete next[name];
			delete next.location;
			return next;
		});
	};

	const goToResults = (payload) => {
		navigate("/results", { state: payload });
	};

	const handleAssistantSearch = async (event) => {
		event.preventDefault();
		setIsLoading(true);
		setAssistantReply("");

		try {
			const response = await api.post("/assistant/search", {
				message: assistantMessage,
				criteria
			});
			setAssistantReply(response.data.reply);
			setCriteria((prev) => ({ ...prev, ...response.data.criteria }));

			if (response.data.sitters?.length) {
				goToResults(response.data);
			}
		} catch (err) {
			setAssistantReply(err.response?.data?.message || "The assistant is unavailable. Use the search form below.");
		} finally {
			setIsLoading(false);
		}
	};

	const handleSearch = async (event) => {
		event.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsLoading(true);

		try {
			const response = await api.post("/search/sitters", criteria);
			goToResults({ ...response.data, criteria });
		} catch (err) {
			setErrors({ api: err.response?.data?.message || "Failed to find sitters." });
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section className="searchPage">
			<h2 className="searchPage__intro">Find a Durham Region sitter</h2>
			<form className="searchPage__assistant" onSubmit={handleAssistantSearch}>
				<label htmlFor="assistantMessage">Tell PetSpace what you need</label>
				<textarea
					id="assistantMessage"
					name="assistantMessage"
					value={assistantMessage}
					onChange={(event) => setAssistantMessage(event.target.value)}
					placeholder="Example: I need care for my large dog in Whitby this Friday evening."
				/>
				<Button color="mint" shape="round" borderColor="black" text={isLoading ? "searching" : "ask assistant"} size="small" margin="0" isLink={false} type="submit" />
				{assistantReply && <p className="searchPage__assistant-reply">{assistantReply}</p>}
			</form>
			<form className="searchPage__form" onSubmit={handleSearch}>
				<div className="searchPage__group-wrapper">
					<div className="searchPage__form-group searchPage__form-group--dbl-col">
						<DropdownMenu
							classname={errors.petType ? "dropdown__menu --error" : "input"}
							defaultTxt={"Pet Type"}
							name="petType"
							value={criteria.petType}
							options={[
								{ value: "Dog", label: "Dog" },
								{ value: "Cat", label: "Cat" },
								{ value: "Reptile", label: "Reptile" },
								{ value: "Bird", label: "Bird" },
								{ value: "Tarantula", label: "Tarantula" }
							]}
							onChange={handleChange}
						/>
						{errors.petType && (
							<div className="error">
								<img className="error__icon" src={errorIcon} alt="error-icon" />
								<p className="error__txt">{errors.petType}</p>
							</div>
						)}
					</div>
					<div className="searchPage__form-group searchPage__form-group--dbl-col">
						<DropdownMenu
							classname={errors.petSize ? "dropdown__menu --error" : "input"}
							defaultTxt={"Pet Size"}
							name="petSize"
							value={criteria.petSize}
							options={[
								{ value: "Small", label: "Small" },
								{ value: "Medium", label: "Medium" },
								{ value: "Large", label: "Large" },
								{ value: "Huge", label: "Huge" }
							]}
							onChange={handleChange}
						/>
						{errors.petSize && (
							<div className="error">
								<img className="error__icon" src={errorIcon} alt="error-icon" />
								<p className="error__txt">{errors.petSize}</p>
							</div>
						)}
					</div>
				</div>
				<div className="searchPage__group-wrapper">
					<Input classname="input" placeholder="City" name="city" value={criteria.city} onChange={handleChange} type="text" />
					<Input classname="input" placeholder="Postal code" name="postalCode" value={criteria.postalCode} onChange={handleChange} type="text" />
				</div>
				<div className="searchPage__group-wrapper">
					<Input classname="input" placeholder="Start date/time" name="startDateTime" value={criteria.startDateTime} onChange={handleChange} type="datetime-local" />
					<Input classname="input" placeholder="End date/time" name="endDateTime" value={criteria.endDateTime} onChange={handleChange} type="datetime-local" />
				</div>
				{errors.location && <p className="error__txt">{errors.location}</p>}
				{errors.api && <p className="error__txt">{errors.api}</p>}
				<div className="searchPage__button-container">
					<Button color="ice" shape="round" borderColor="black" text={isLoading ? "searching" : "search"} size="small" margin="0" isLink={false} type="submit" />
				</div>
			</form>
		</section>
	);
};

export default SearchPage;
