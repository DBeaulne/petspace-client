import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage/HomePage.jsx";

// Components
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
