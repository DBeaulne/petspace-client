/** Results Component
 * This component will take in the search results
 * of matching sitters and display them 3 at a time
 */

import "./Results.scss";
import Winona from "../../assets/profile-pic/winona-ryder.jpg";
import Matt from "../../assets/profile-pic/matt-damon.jpg";
import Meagan from "../../assets/profile-pic/meagan-markle.jpg";

const Results = () => {
	return (
		<div className="results">
			<h2 className="results__title">Results</h2>
			<div className="results__container">
				<div className="results__avatar">
					<img
						className="results__sitter-img"
						src={Winona}
						alt="available sitter avatar"
					/>
				</div>
				<div className="results__content">
					<div className="results__bio-rate-wrapper">
						<div className="results__bio">
							<h3 className="results__bio-name">Winona Ryder</h3>
							<address className="results__bio-address">Courtice, ON</address>
						</div>
						<div className="results__rate">
							<p className="results__hourly-rate">$30 / hr</p>
						</div>
					</div>
					<div className="results__blurb">
						<p>loves large dogs, cats & reptiles</p>
					</div>
				</div>
			</div>
			<div className="results__container">
				<div className="results__avatar">
					<img
						className="results__sitter-img"
						src={Matt}
						alt="available sitter avatar"
					/>
				</div>
				<div className="results__content">
					<div className="results__bio-rate-wrapper">
						<div className="results__bio">
							<h3 className="results__bio-name">Matt Damon</h3>
							<address className="results__bio-address">Courtice, ON</address>
						</div>
						<div className="results__rate">
							<p className="results__hourly-rate">$28 / hr</p>
						</div>
					</div>
					<div className="results__blurb">
						<p>large dogs and cats are my favourite</p>
					</div>
				</div>
			</div>
			<div className="results__container">
				<div className="results__avatar">
					<img
						className="results__sitter-img"
						src={Meagan}
						alt="available sitter avatar"
					/>
				</div>
				<div className="results__content">
					<div className="results__bio-rate-wrapper">
						<div className="results__bio">
							<h3 className="results__bio-name">Meagan Markle</h3>
							<address className="results__bio-address">Courtice, ON</address>
						</div>
						<div className="results__rate">
							<p className="results__hourly-rate">$30 / hr</p>
						</div>
					</div>
					<div className="results__blurb">
						<p>large dogs only, allergic to cats</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Results;
