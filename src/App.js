import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage.jsx";
import AssistantPage from "./pages/AssistantPage/AssistantPage.jsx";

// Components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main className="petspace">
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
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
