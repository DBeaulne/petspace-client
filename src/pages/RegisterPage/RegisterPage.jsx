/* Log-in Page */
import "./RegisterPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import errorIcon from "../../assets/icons/error-24px.svg";
import { apiUrl } from "../../App";

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		address: "",
		city: "",
		province: "",
		postalCode: "",
		password: "",
		confirmPassword: ""
	});

	const [errors, setErrors] = useState({});
	const navigate = useNavigate();

	const validateForm = () => {
		const newErrors = {};

		Object.keys(formData).forEach((key) => {
			if (!formData[key]) {
				newErrors[key] = "This field is required.";
			}
			if (formData[key] && key === "email") {
				const isValidEmail = validateEmail(formData.email);
				if (!isValidEmail) {
					newErrors[key] = "Invalid email";
				}
			}
		});

		// Password and confirm password validation
		if (formData.password !== formData.confirmPassword) {
			newErrors.confirmPassword = "Passwords do not match";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const validateEmail = (email) => {
		const emailRegex = /[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+/i;
		return emailRegex.test(email);
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

	const handleRegister = async (e) => {
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
		<section className="registerPage">
			<form
				className="registerPage__form"
				onSubmit={handleRegister}>
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
				<div className="registerPage__form-group">
					<Input
						classname={errors.lastName ? "input input--error" : "input"}
						placeholder={"Last Name"}
						name="lastName"
						value={formData.lastName}
						onChange={handleChange}
						type="text"
					/>
					{errors.lastName && (
						<div className="error">
							<img
								className="error__icon"
								src={errorIcon}
								alt="error-icon"
							/>
							<p className="error__txt">{errors.lastName}</p>
						</div>
					)}
				</div>
				<div className="registerPage__form-group">
					<Input
						classname={errors.email ? "input input--error" : "input"}
						placeholder={"email"}
						name="email"
						value={formData.email}
						onChange={handleChange}
						type="text"
					/>
					{errors.email && (
						<div className="error">
							<img
								className="error__icon"
								src={errorIcon}
								alt="error-icon"
							/>
							<p className="error__txt">{errors.email}</p>
						</div>
					)}
				</div>
				<div className="registerPage__form-group">
					<Input
						classname={errors.address ? "input input--error" : "input"}
						placeholder={"address"}
						name="address"
						value={formData.address}
						onChange={handleChange}
						type="text"
					/>
					{errors.address && (
						<div className="error">
							<img
								className="error__icon"
								src={errorIcon}
								alt="error-icon"
							/>
							<p className="error__txt">{errors.address}</p>
						</div>
					)}
				</div>
				<div className="registerPage__form-group">
					<Input
						classname={errors.city ? "input input--error" : "input"}
						placeholder={"city"}
						name="city"
						value={formData.city}
						onChange={handleChange}
						type="text"
					/>
					{errors.city && (
						<div className="error">
							<img
								className="error__icon"
								src={errorIcon}
								alt="error-icon"
							/>
							<p className="error__txt">{errors.city}</p>
						</div>
					)}
				</div>
				<div className="registerPage__ppc-wrapper">
					<div className="registerPage__form-group registerPage__form-group--dbl-col">
						<Input
							classname={errors.province ? "input input--error" : "input"}
							placeholder={"province"}
							name="province"
							value={formData.province}
							onChange={handleChange}
							type="text"
						/>
						{errors.province && (
							<div className="error">
								<img
									className="error__icon"
									src={errorIcon}
									alt="error-icon"
								/>
								<p className="error__txt">{errors.province}</p>
							</div>
						)}
					</div>
					<div className="registerPage__form-group registerPage__form-group--dbl-col">
						<Input
							classname={errors.postalCode ? "input input--error" : "input"}
							placeholder={"postal code"}
							name="postalCode"
							value={formData.postalCode}
							onChange={handleChange}
							type="text"
						/>
						{errors.postalCode && (
							<div className="error">
								<img
									className="error__icon"
									src={errorIcon}
									alt="error-icon"
								/>
								<p className="error__txt">{errors.postalCode}</p>
							</div>
						)}
					</div>
				</div>
				<div className="registerPage__form-group">
					<Input
						classname={errors.password ? "input input--error" : "input"}
						placeholder={"password"}
						name="password"
						value={formData.password}
						onChange={handleChange}
						type="password"
					/>
					{errors.password && (
						<div className="error">
							<img
								className="error__icon"
								src={errorIcon}
								alt="error-icon"
							/>
							<p className="error__txt">{errors.password}</p>
						</div>
					)}
				</div>
				<div className="registerPage__form-group">
					<Input
						classname={errors.confirmPassword ? "input input--error" : "input"}
						placeholder={"confirm password"}
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={handleChange}
						type="password"
					/>
					{errors.confirmPassword && (
						<div className="error">
							<img
								className="error__icon"
								src={errorIcon}
								alt="error-icon"
							/>
							<p className="error__txt">{errors.confirmPassword}</p>
						</div>
					)}
				</div>
				<div className="registerPage__button-container">
					<Button
						color={"ice"}
						shape={"round"}
						borderColor={"black"}
						text="register"
						size={"small"}
						margin="0"
						isLink={false}
						type="submit"
						onClick={handleRegister}
					/>
				</div>
			</form>
		</section>
	);
};
export default RegisterPage;
