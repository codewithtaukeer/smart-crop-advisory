import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ChatbotPage from "./pages/ChatbotPage";
import RecommendationPage from "./pages/RecommendationPage";
import WeatherSoilPage from "./pages/WeatherSoilPage";
import PestDetectionPage from "./pages/PestDetectionPage";
import MarketPage from "./pages/MarketPage";
import SchemesPage from "./pages/SchemesPage";
import NaturalSolutionsPage from "./pages/NaturalSolutionsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="App">
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chatbot" element={<ChatbotPage />} />
                <Route path="/recommendation" element={<RecommendationPage />} />
                <Route path="/weather-soil" element={<WeatherSoilPage />} />
                <Route path="/pest-detection" element={<PestDetectionPage />} />
                <Route path="/market" element={<MarketPage />} />
                <Route path="/schemes" element={<SchemesPage />} />
                <Route path="/natural-solutions" element={<NaturalSolutionsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Layout>
          </BrowserRouter>
          <Toaster />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;