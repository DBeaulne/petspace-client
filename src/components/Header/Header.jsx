/* Header component */
import "./Header.scss";
import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo/PetSpaceLogo.png";
import Nav from "../Nav/Nav";

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
			<Nav />
		</div>
	);
};
export default Header;
