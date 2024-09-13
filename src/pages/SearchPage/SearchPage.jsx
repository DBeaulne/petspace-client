/** Search Page
 * After logging in the user will enter
 * search criteria to find a sitter.
 *
 * The search result will then create
 * a page with a map and the resutls
 */

import "./SearchPage.scss";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import errorIcon from "../../assets/icons/error-24px.svg";
import { apiUrl } from "../../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";

const SearchPage = () => {
	const [formData, setFormData] = useState({
		petType: "",
		userLat: "",
		userLng: ""
	});

	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const validateForm = () => {
		const newErrors = {};

		Object.keys(formData).forEach((key) => {
			if (!formData[key]) {
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

	const handleSearch = async (e) => {
		e.preventDefault();
		console.log(formData);
		if (!validateForm()) {
			return;
		}
		try {
			const response = await axios.post(`${apiUrl}/search`, formData).then(() => {
				console.log(response.data);
			});
		} catch (err) {
			console.log("Failed to add user", err);
		}
	};

	return (
		<section className="searchPage">
			<h4 className="searchPage__intro">What type and size of pet do you need care for?</h4>
			<form
				className="searchPage__form"
				onSubmit={handleSearch}>
				<div className="searchPage__group-wrapper">
					<div className="searchPage__form-group searchPage__form-group--dbl-col">
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
					<div className="searchPage__form-group searchPage__form-group--dbl-col">
						<DropdownMenu
							classname={errors.petSize ? "dropdown__menu --error" : "input"}
							defaultTxt={"Pet Size"}
							name="petSize"
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
								<img
									className="error__icon"
									src={errorIcon}
									alt="error-icon"
								/>
								<p className="error__txt">{errors.petSize}</p>
							</div>
						)}
					</div>
				</div>
				<div className="searchPage__button-container">
					<Button
						color={"ice"}
						shape={"round"}
						borderColor={"black"}
						text="search"
						size={"small"}
						margin="0"
						isLink={false}
						type="submit"
						onClick={handleSearch}
					/>
				</div>
			</form>
		</section>
	);
};
export default SearchPage;
