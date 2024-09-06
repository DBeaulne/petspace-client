/* Map component */
import "./Map.scss";
import MapImage from "../../assets/images/map.png";
import MapImage_2 from "../../assets/images/map-2.png";

const Map = () => {
	return (
		<div
			className="map"
			id="map">
			<img
				className="mapImage"
				src={MapImage_2}
				alt="map overview of Courtice, Ontario"
			/>
		</div>
	);
};
export default Map;
