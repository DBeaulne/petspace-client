/* Log-in Page */
import "./LogInPage.scss";
import { useState } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const baseUrl = "http://localhost:8085";
const signupUrl = `${baseUrl}/signup`;
const loginUrl = `${baseUrl}/login`;

const LogInPage = () => {
	const [isLoginError, setIsLoginError] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		// Here send a POST request to loginUrl with username and password data
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
	};

	return (
		<section className="log-in-page">
			{isLoginError && <label className="error">{errorMessage}</label>}
			<form
				className="log-in__form"
				onSubmit={handleLogin}>
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
				<div className="log-in-page__button-container">
					<Button
						color={"mint"}
						shape={"round"}
						borderColor={"black"}
						text="log in"
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
export default LogInPage;
