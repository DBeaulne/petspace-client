/** Pet Details page
 * Here the user will enter pertinent details
 * about their pet. Then we push this information
 * into the database 'pet' table
 */

import "./PetDetails.scss";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import errorIcon from "../../assets/icons/error-24px.svg";
import { apiUrl } from "../../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

const PetDetails = () => {
	const [formData, setFormData] = useState({
		petName: "",
		petType: "",
		size: "",
		temperament: "",
		age: "",
		petFood: "",
		foodServing: "",
		petActivities: ""
	});

	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const validateForm = () => {
		const newErrors = {};

		Object.keys(formData).forEach((key) => {
			if (!formData[key]) {
				newErrors[key] = "This field is required.";
			}
			if (formData[key] && key === "petType" && formData.petType === "Pet Type") {
				formData.petType = "";
				newErrors[key] = "This field is required.";
			}
			if (formData[key] && key === "size" && formData.size === "Pet Size") {
				formData.size = "";
				newErrors[key] = "This field is required.";
			}
			if (formData[key] && key === "temperament" && formData.temperament === "Temperament") {
				formData.temperament = "";
				newErrors[key] = "This field is required.";
			}
		});
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => {
			const updatedFormData = { ...prev, [name]: value };

			if (errors[name]) {
				setErrors((prev) => {
					const updatedErrors = { ...prev };
					delete updatedErrors[name];
					return updatedErrors;
				});
			}
			return updatedFormData;
		});
	};

	const handlePetDetails = async (e) => {
		e.preventDefault();
		if (!validateForm()) {
			return;
		}

		try {
			await axios.post(`${apiUrl}/pets`, formData).then(() => {
				navigate("/login");
			});
		} catch (err) {
			console.log("Failed to add pet", err);
		}
	};

	return (
		<section className="petDetails">
			<h3 className="petDetails__request">Tell us about your pet</h3>
			<form
				className="petDetails__form"
				onSubmit={handlePetDetails}>
				<div className="petDetails__form-group">
					<Input
						classname={errors.petName ? "input input--error" : "input"}
						placeholder={"Pet Name"}
						name="petName"
						value={formData.petName}
						onChange={handleChange}
						type="text"
					/>
					{errors.petName && (
						<div className="error">
							<img
								className="error__icon"
								src={errorIcon}
								alt="error-icon"
							/>
							<p className="error__txt">{errors.petName}</p>
						</div>
					)}
				</div>
				<div className="petDetails__group-wrapper">
					<div className="petDetails__form-group petDetails__form-group--dbl-col">
						<DropdownMenu
							classname={errors.petType ? "dropdown__menu --error" : "input"}
							defaultTxt={"Pet Type"}
							name="petType"
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
								<img
									className="error__icon"
									src={errorIcon}
									alt="error-icon"
								/>
								<p className="error__txt">{errors.petType}</p>
							</div>
						)}
					</div>
					<div className="petDetails__form-group petDetails__form-group--dbl-col">
						<DropdownMenu
							classname={errors.size ? "dropdown__menu --error" : "input"}
							defaultTxt={"Pet Size"}
							name="size"
							options={[
								{ value: "Small", label: "Small" },
								{ value: "Medium", label: "Medium" },
								{ value: "Large", label: "Large" },
								{ value: "Huge", label: "Huge" }
							]}
							onChange={handleChange}
						/>
						{errors.size && (
							<div className="error">
								<img
									className="error__icon"
									src={errorIcon}
									alt="error-icon"
								/>
								<p className="error__txt">{errors.size}</p>
							</div>
						)}
					</div>
				</div>
				<div className="petDetails__group-wrapper">
					<div className="petDetails__form-group petDetails__form-group--dbl-col">
						<DropdownMenu
							classname={errors.temperament ? "dropdown__menu --error" : "input"}
							defaultTxt={"Temperament"}
							name="temperament"
							options={[
								{ value: "Playful", label: "Playful" },
								{ value: "Curious", label: "Curious" },
								{ value: "Calm", label: "Calm" },
								{ value: "Friendly", label: "Friendly" },
								{ value: "Standoff-ish", label: "Standoff-ish" }
							]}
							onChange={handleChange}
						/>
						{errors.temperament && (
							<div className="error">
								<img
									className="error__icon"
									src={errorIcon}
									alt="error-icon"
								/>
								<p className="error__txt">{errors.temperament}</p>
							</div>
						)}
					</div>
					<div className="petDetails__form-group petDetails__form-group--dbl-col">
						<Input
							number
							classname={errors.age ? "input input--error" : "input"}
							placeholder="age"
							name="age"
							value={formData.age}
							onChange={handleChange}
						/>
						{errors.age && (
							<div className="error">
								<img
									className="error__icon"
									src={errorIcon}
									alt="error-icon"
								/>
								<p className="error__txt">{errors.age}</p>
							</div>
						)}
					</div>
				</div>
				<div className="petDetails__group-wrapper">
					<div className="petDetails__form-group petDetails__form-group--dbl-col">
						<Input
							classname={errors.petFood ? "input input--error" : "input"}
							placeholder={"What does your pet eat?"}
							name="petFood"
							value={formData.petFood}
							onChange={handleChange}
							type="text"
						/>
						{errors.petFood && (
							<div className="error">
								<img
									className="error__icon"
									src={errorIcon}
									alt="error-icon"
								/>
								<p className="error__txt">{errors.petFood}</p>
							</div>
						)}
					</div>
					<div className="petDetails__form-group petDetails__form-group--dbl-col">
						<Input
							classname={errors.foodServing ? "input input--error" : "input"}
							placeholder="Food Serving"
							name="foodServing"
							value={formData.foodServing}
							onChange={handleChange}
							type="text"
						/>
						{errors.foodServing && (
							<div className="error">
								<img
									className="error__icon"
									src={errorIcon}
									alt="error-icon"
								/>
								<p className="error__txt">{errors.foodServing}</p>
							</div>
						)}
					</div>
				</div>
				<div className="petDetails__form-group">
					<Input
						txtArea
						classname={errors.petActivities ? "input input--error" : "input"}
						placeholder={"What activities keep your pet happy?"}
						name="petActivities"
						value={formData.petActivities}
						onChange={handleChange}
						type="text"
					/>
					{errors.petActivities && (
						<div className="error">
							<img
								className="error__icon"
								src={errorIcon}
								alt="error-icon"
							/>
							<p className="error__txt">{errors.petActivities}</p>
						</div>
					)}
				</div>
				<div className="petDetails__button-container">
					<Button
						color={"ice"}
						shape={"round"}
						borderColor={"black"}
						text="submit"
						size={"small"}
						margin="0"
						isLink={false}
						type="submit"
						onClick={handlePetDetails}
					/>
				</div>
			</form>
		</section>
	);
};
export default PetDetails;
