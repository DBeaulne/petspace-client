/* Log-in Page */
import "./RegisterPage.scss";
import { useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const baseUrl = "http://localhost:8085";
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		address: "",
		city: "",
		province: "",
		postalCode: ""
	});

	const [errors, setErrors] = useState({});
	const [isRegistered, setIsRegistered] = useState(false);
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

	const handleRegister = async (e) => {
		e.preventDefault();

		// Here send a POST request to loginUrl with username and password data
		try {
			const response = await axios.post(loginUrl, {
				username: e.target.username.value,
				password: e.target.password.value
			});
			console.log(response);
			setIsRegistered(true);
			setErrorMessage("");
			console.log(response);
			sessionStorage.setItem("token", response.data.token);
			// take home, store in a cookie
		} catch (err) {
			console.error("error: ", err);
			setErrorMessage(err.message);
		}
	};

	return (
		<section className="registerPage">
			<form
				className="registerPage__form"
				onSubmit={handleRegister}>
				<div className="form-group">
					Username:
					<input
						type="text"
						name="username"
					/>
				</div>
				<div className="form-group">
					Password:
					<input
						type="password"
						name="password"
					/>
				</div>
				<div className="register__button-container">
					<Button
						color={"ice"}
						shape={"round"}
						borderColor={"black"}
						text="register"
						size={"small"}
						isLink={true}
						margin="0"
						to="/"
					/>
				</div>
			</form>
		</section>
	);
};
export default RegisterPage;
