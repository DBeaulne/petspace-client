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
		</div>
	);
};
export default Header;
