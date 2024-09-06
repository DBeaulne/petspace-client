/* Log-in Page */
import "./LogInPage.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import errorIcon from "../../assets/icons/error-24px.svg";
import { apiUrl } from "../../App";
import Cookies from "js-cookie";

const LogInPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	});
	const [errors, setErrors] = useState({});
	const [isLoginError, setIsLoginError] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
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

	const setRefreshTokenCookie = (refreshToken) => {
		Cookies.set("refreshToken", refreshToken, {
			expires: 69 // set expiration to 7 days
		});
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		if (!validateForm()) {
			return;
		}

		// Here send a POST request to loginUrl with username and password data
		if (!isLoggedIn) {
			try {
				const response = await axios.post(`${apiUrl}/login`, formData);
				setIsLoggedIn(true);
				setIsLoginError(false);
				setErrorMessage("");
				sessionStorage.setItem("token", response.data.accessToken);
				setRefreshTokenCookie(response.data.refreshToken);
				navigate("/results");
			} catch (err) {
				console.error("error: ", err);
				setIsLoginError(true);
				setErrorMessage(err.message);
			}
		}
	};

	return (
		<section className="loginPage">
			{isLoginError && <label className="error">{errorMessage}</label>}
			<form
				className="loginPage__form"
				onSubmit={handleLogin}>
				<div className="loginPage__form-group">
					<Input
						classname={errors.email ? "input input--error" : "input"}
						placeholder={"email address"}
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
				<div className="loginPage__form-group">
					<Input
						classname={errors.password ? "input input--error" : "input"}
						placeholder={"password"}
						name="password"
						value={formData.password}
						onChange={handleChange}
						type="text"
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
				<div className="loginPage__button-container">
					<Button
						color={"mint"}
						shape={"round"}
						borderColor={"black"}
						text="log in"
						size={"small"}
						margin="0"
						isLink={false}
						type="submit"
						onClick={handleLogin}
					/>
				</div>
			</form>
		</section>
	);
};
export default LogInPage;
