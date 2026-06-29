/* Header component */
import "./Header.scss";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo/PetSpaceLogo.png";

const Header = () => {
	return (
		<div className="header">
			<div className="header__logo">
				<NavLink to="/">
					{
						<img
							src={logoImg}
							alt="PetSpace logo"
						/>
					}
				</NavLink>
			</div>
			<nav className="header__nav">
				<NavLink to="/search">Find sitters</NavLink>
				<NavLink to="/sitters/apply">Become a sitter</NavLink>
				<NavLink to="/login">Log in</NavLink>
			</nav>
		</div>
	);
};
export default Header;
