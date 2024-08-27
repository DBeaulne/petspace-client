/* Hero component */
import "./Hero.scss";

const Hero = ({ title, subtitle, src }) => {
	return (
		<section className="hero">
			<img
				className="hero-image"
				src={src}
				alt="dog with her dog-mom"
			/>
			<div className="hero__overlay"></div>
			<div className="hero__content">
				<h1 className="hero__title">{title}</h1>
				<h3 className="hero__subtitle">{subtitle}</h3>
			</div>
		</section>
	);
};
export default Hero;
