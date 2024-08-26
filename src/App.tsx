import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import MainPage from "./Pages/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventPage from "./Pages/EventPage/EventPage";
import AboutUsPage from "./Pages/AboutUsPage/AboutUsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/Home" element={<MainPage />} />
        <Route path="/Events" element={<EventPage />} />
        <Route path="/About-Us" element={<AboutUsPage />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
