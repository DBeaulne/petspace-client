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
	const [formData, setFormData] = useState({});

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
		if (!validateForm()) {
			return;
		}
		try {
			await axios.post(`${apiUrl}/accounts`, formData).then(() => {
				navigate("/petDetails");
			});
		} catch (err) {
			console.log("Failed to add user", err);
		}
	};

	return (
		<section className="searchPage">
			<form
				className="searchPage__form"
				onSubmit={handleSearch}>
				<div className="registerPage__form-group">
					<Input
						classname={errors.firstName ? "input input--error" : "input"}
						placeholder={"First Name"}
						name="firstName"
						value={formData.firstName}
						onChange={handleChange}
						type="text"
					/>
					{errors.firstName && (
						<div className="error">
							<img
								className="error__icon"
								src={errorIcon}
								alt="error-icon"
							/>
							<p className="error__txt">{errors.firstName}</p>
						</div>
					)}
				</div>
			</form>
		</section>
	);
};
export default SearchPage;
