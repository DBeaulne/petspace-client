import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage.jsx";
import AssistantPage from "./pages/AssistantPage/AssistantPage.jsx";
import LogInPage from "./pages/LogInPage/LogInPage.jsx";
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';
import ResultsPage from './pages/ResultsPage/ResultsPage.jsx';
import PetDetails from './pages/PetDetails/PetDetails.jsx';

// Components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

export const apiUrl = process.env.REACT_APP_API_BASE_URL;


function App() {
	return (
		<BrowserRouter>
			<main className="petspace">
			<Header />
				<Routes>
					<Route
						path="/homepage"
						element={<HomePage />}
					/>
					<Route
						path="/"
						element={<Navigate to="/homepage" />}
					/>
          <Route
           path="/assistant"
           element={<AssistantPage />}
          />
          <Route
           path="/login"
           element={<LogInPage />}
          />
          <Route
           path="/register"
           element={<RegisterPage />}
          />
          <Route
           path="/results"
           element={<ResultsPage />}
          />
          <Route
            path="/petDetails"
            element={<PetDetails />}
          />
				</Routes>
			<Footer />
			</main>
		</BrowserRouter>
	);
}

export default App;
