/* Footer Component */
import "./Footer.scss";
import Canada100 from "../../assets/icons/canada-100px.svg";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__locations">
				<h3 className="footer__locales-title">Trusted around your neighbourhood...</h3>
				<div className="footer__region-wrapper">
					<div className="footer__locales left">
						<ul>
							<li>Clarington</li>
							<li>Durham Region</li>
							<li>Richmond Hill</li>
							<li>Uxbridge</li>
							<li>North York</li>
							<li>Scarborough</li>
						</ul>
					</div>
					<div className="footer__locales right">
						<ul>
							<li>Markham</li>
							<li>Newmarket</li>
							<li>Brampton</li>
							<li>Mississauga</li>
							<li>Hamilton</li>
							<li>Toronto</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer__locations">
				<h3 className="footer__locales-title">and around the country</h3>
				<div className="footer__region-wrapper">
					<div className="footer__locales left">
						<ul>
							<li>Alberta</li>
							<li>British Columbia</li>
							<li>Manitoba</li>
							<li>New Brunswick</li>
							<li>Newfoundland and Labrador</li>
							<li>Northwest Territories</li>
						</ul>
					</div>
					<div className="footer__locales right">
						<ul>
							<li>Nova Scotia</li>
							<li>Nunavut</li>
							<li>Ontario</li>
							<li>Prince Edward Island</li>
							<li>Quebec</li>
							<li>Saskatchewan</li>
							<li>Yukon</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer__canada">
				<img
					src={Canada100}
					alt="Outline of Canada"
				/>
			</div>
			<div className="footer__copyright">
				<p className="footer__copyright-text"> &copy; PetSpace 2024. All right reserved</p>
			</div>
		</div>
	);
};
export default Footer;
