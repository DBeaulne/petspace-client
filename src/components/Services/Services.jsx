/* Services component */
import "./Services.scss";
import Card from "../Card/Card";
import servicesData from "../../assets/data/services.json";

const Services = () => {
	return (
		<serction className="services">
			{servicesData.map((services, index) => (
				<Card
					key={index}
					icon={services.icon}
					title={services.title}
					text={services.text}
					icon_alt_text={services.icon_alt_text}
				/>
			))}
		</serction>
	);
};
export default Services;
