/* Nav component */
import "./Nav.scss";
import Hamburger from "../Hamburger/Hamburger";

const Nav = () => {
	return (
		<div className="navigation">
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact us</li>
			</ul>
			<div className="hamburger">
				<Hamburger />
			</div>
		</div>
	);
};
export default Nav;
