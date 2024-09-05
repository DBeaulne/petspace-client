/* Nav component */
import "./Nav.scss";
import Hamburger from "../Hamburger/Hamburger";
import { useState } from "react";

const Nav = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<div>
			<div className="navigation">
				<ul>
					<li>Home</li>
					<li>Register</li>
					<li>Log-in</li>
					<li>Assistant</li>
				</ul>
				<div
					className="nav-burger"
					onClick={toggleHamburger}>
					<Hamburger />
				</div>
			</div>
			<style>{`
				@media (max-width: 2000px) {
					.navigation ul {
						display: ${hamburgerOpen ? "inline" : "none"};
					}
				}
			`}</style>
		</div>
	);
};
export default Nav;
