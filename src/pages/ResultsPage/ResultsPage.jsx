/* Results page component */
import "./ResultsPage.scss";
import Map from "../../components/Map/Map";
import Results from "../../components/Results/Results";
import { useLocation, Link } from "react-router-dom";

const ResultsPage = () => {
	const { state } = useLocation();
	const sitters = state?.sitters || [];
	const origin = state?.origin;
	const criteria = state?.criteria || {};

	return (
		<section className="results-page">
			{!state && <Link to="/search">Start a sitter search</Link>}
			<Map origin={origin} sitters={sitters} />
			<Results sitters={sitters} criteria={criteria} />
		</section>
	);
};
export default ResultsPage;
