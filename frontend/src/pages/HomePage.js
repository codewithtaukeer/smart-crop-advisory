import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ChatbotSection from "../components/ChatbotSection";
import CropRecommendationSection from "../components/CropRecommendationSection";
import WeatherSoilSection from "../components/WeatherSoilSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ChatbotSection />
      <CropRecommendationSection />
      <WeatherSoilSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;