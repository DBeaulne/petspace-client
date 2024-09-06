/* Results page component */
import "./ResultsPage.scss";
import Map from "../../components/Map/Map";
import Results from "../../components/Results/Results";

const ResultsPage = () => {
	return (
		<section className="results-page">
			<Map />
			<Results />
		</section>
	);
};
export default ResultsPage;
