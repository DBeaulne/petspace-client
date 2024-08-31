/* Log-in Page */
import "./LogInPage.scss";
import { useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const baseUrl = "http://localhost:8085";
// const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;

const LogInPage = () => {
	const [formData, setFormData] = useState({
		username: "",
		password: ""
	});
	const [errors, setErrors] = useState({});
	const [isLoginError, setIsLoginError] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

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

	const handleLogin = async (e) => {
		e.preventDefault();
		// Here send a POST request to loginUrl with username and password data
		if (!isLoggedIn) {
			try {
				const response = await axios.post(loginUrl, {
					username: e.target.username.value,
					password: e.target.password.value
				});
				console.log(response);
				setIsLoggedIn(true);
				setIsLoginError(false);
				setErrorMessage("");
				console.log(response);
				sessionStorage.setItem("token", response.data.token);
				// take home, store in a cookie
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
				onSubmit={handleChange}>
				<div className="loginPage__form-group">
					<Input
						classname={errors.username ? "input input--error" : "input"}
						placeholder={"username"}
						name="username"
						value={formData.username}
						onChange={handleChange}
						type="text"
					/>
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
				</div>
				<div
					className="loginPage__button-container"
					onClick={handleLogin}>
					<Button
						color={"mint"}
						shape={"round"}
						borderColor={"black"}
						text="log in"
						size={"small"}
						isLink={false}
						margin="0"
					/>
				</div>
			</form>
		</section>
	);
};
export default LogInPage;
