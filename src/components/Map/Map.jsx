import "./Map.scss";
import { useEffect, useRef, useState } from "react";
import { mapBoxToken } from "../../config/env";

const loadMapbox = () => {
	if (window.mapboxgl) {
		return Promise.resolve(window.mapboxgl);
	}

	return new Promise((resolve, reject) => {
		const existingScript = document.querySelector("script[data-mapbox-gl]");
		if (existingScript) {
			existingScript.addEventListener("load", () => resolve(window.mapboxgl));
			existingScript.addEventListener("error", reject);
			return;
		}

		const link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "https://api.mapbox.com/mapbox-gl-js/v3.8.0/mapbox-gl.css";
		document.head.appendChild(link);

		const script = document.createElement("script");
		script.src = "https://api.mapbox.com/mapbox-gl-js/v3.8.0/mapbox-gl.js";
		script.dataset.mapboxGl = "true";
		script.onload = () => resolve(window.mapboxgl);
		script.onerror = reject;
		document.body.appendChild(script);
	});
};

const Map = ({ origin, sitters = [] }) => {
	const mapRef = useRef(null);
	const mapInstance = useRef(null);
	const markersRef = useRef([]);
	const [error, setError] = useState("");

	useEffect(() => {
		if (!mapBoxToken) {
			setError("Mapbox token is missing.");
			return undefined;
		}

		let isMounted = true;

		loadMapbox()
			.then((mapboxgl) => {
				if (!isMounted || !mapRef.current) {
					return;
				}

				mapboxgl.accessToken = mapBoxToken;
				const center = origin ? [origin.lng, origin.lat] : [-78.8658, 43.8971];

				if (!mapInstance.current) {
					mapInstance.current = new mapboxgl.Map({
						container: mapRef.current,
						style: "mapbox://styles/mapbox/streets-v12",
						center,
						zoom: 9
					});
				} else {
					mapInstance.current.setCenter(center);
				}

				markersRef.current.forEach((marker) => marker.remove());
				markersRef.current = [];

				sitters.forEach((sitter) => {
					if (!sitter.lat || !sitter.lng) {
						return;
					}

					const marker = new mapboxgl.Marker()
						.setLngLat([sitter.lng, sitter.lat])
						.setPopup(new mapboxgl.Popup().setText(`${sitter.firstName} ${sitter.lastName} · ${sitter.distanceKm} km`))
						.addTo(mapInstance.current);

					markersRef.current.push(marker);
				});
			})
			.catch(() => setError("Unable to load the map."));

		return () => {
			isMounted = false;
		};
	}, [origin, sitters]);

	return (
		<div className="map" id="map">
			<div className="map__canvas" ref={mapRef} />
			{error && <p className="map__error">{error}</p>}
		</div>
	);
};

export default Map;
