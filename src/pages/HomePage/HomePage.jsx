/* Home Page */

import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import heroImg from "../../assets/images/chewy-gWzTum_yMCg-unsplash.jpg";
import Services from "../../components/Services/Services";
import Assistant from "../../components/Assistant/Assistant";

const HomePage = () => {
	return (
		<div className="homepage">
			<Hero
				title="Pet care, your way and on your schedule"
				subtitle="Connect with trusted sitters"
				src={heroImg}
			/>
			<Assistant />
			<Services />
		</div>
	);
};
export default HomePage;
