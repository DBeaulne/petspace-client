/* Map component */
import "./Map.scss";
import MapImage from "../../assets/images/map.png";

const Map = () => {
	return (
		<div
			className="map"
			id="map">
			<img
				className="mapImage"
				src={MapImage}
				alt="map overview of Courtice, Ontario"
			/>
		</div>
	);
};
export default Map;
