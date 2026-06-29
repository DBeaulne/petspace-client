import "./SitterApplicationPage.scss";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { api } from "../../utils/api";

const petOptions = ["Dog", "Cat", "Reptile", "Bird", "Tarantula"];
const sizeOptions = ["Small", "Medium", "Large", "Huge"];

const SitterApplicationPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		city: "",
		province: "ON",
		postalCode: "",
		hourlyRate: "28",
		serviceRadiusKm: "35",
		bio: "",
		acceptedPetTypes: [],
		acceptedPetSizes: []
	});
	const [status, setStatus] = useState("");
	const [error, setError] = useState("");

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const toggleValue = (name, value) => {
		setFormData((prev) => {
			const values = new Set(prev[name]);
			values.has(value) ? values.delete(value) : values.add(value);
			return { ...prev, [name]: Array.from(values) };
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus("");
		setError("");

		try {
			await api.post("/sitters/applications", formData);
			setStatus("Application submitted. We will review it before your profile appears in search.");
		} catch (err) {
			setError(err.response?.data?.message || "Unable to submit sitter application.");
		}
	};

	return (
		<section className="sitter-application">
			<h2 className="sitter-application__title">Apply to become a PetSpace sitter</h2>
			<form className="sitter-application__form" onSubmit={handleSubmit}>
				<div className="sitter-application__grid">
					<Input classname="input" placeholder="First name" name="firstName" value={formData.firstName} onChange={handleChange} type="text" />
					<Input classname="input" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleChange} type="text" />
					<Input classname="input" placeholder="Email" name="email" value={formData.email} onChange={handleChange} type="email" />
					<Input classname="input" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} type="tel" />
					<Input classname="input" placeholder="City" name="city" value={formData.city} onChange={handleChange} type="text" />
					<Input classname="input" placeholder="Postal code" name="postalCode" value={formData.postalCode} onChange={handleChange} type="text" />
					<Input classname="input" placeholder="Hourly rate" name="hourlyRate" value={formData.hourlyRate} onChange={handleChange} type="number" />
					<Input classname="input" placeholder="Service radius km" name="serviceRadiusKm" value={formData.serviceRadiusKm} onChange={handleChange} type="number" />
				</div>
				<fieldset className="sitter-application__fieldset">
					<legend>Pets you can care for</legend>
					{petOptions.map((option) => (
						<label key={option}>
							<input type="checkbox" checked={formData.acceptedPetTypes.includes(option)} onChange={() => toggleValue("acceptedPetTypes", option)} />
							{option}
						</label>
					))}
				</fieldset>
				<fieldset className="sitter-application__fieldset">
					<legend>Pet sizes you accept</legend>
					{sizeOptions.map((option) => (
						<label key={option}>
							<input type="checkbox" checked={formData.acceptedPetSizes.includes(option)} onChange={() => toggleValue("acceptedPetSizes", option)} />
							{option}
						</label>
					))}
				</fieldset>
				<Input txtArea classname="input" placeholder="Tell owners about your experience, boundaries, and care style." name="bio" value={formData.bio} onChange={handleChange} />
				<Button color="mint" shape="round" borderColor="black" text="submit application" size="small" margin="0" isLink={false} type="submit" />
				{status && <p className="sitter-application__status">{status}</p>}
				{error && <p className="sitter-application__error">{error}</p>}
			</form>
		</section>
	);
};

export default SitterApplicationPage;
