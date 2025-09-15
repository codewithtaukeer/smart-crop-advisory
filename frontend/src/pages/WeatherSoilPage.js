import React from "react";
import WeatherSoilSection from "../components/WeatherSoilSection";
import { CloudSun } from "lucide-react";

const WeatherSoilPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <CloudSun className="h-10 w-10 text-orange-600 dark:text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Weather & Soil Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time weather monitoring and comprehensive soil analysis for informed farming decisions
          </p>
        </div>

        {/* Use the existing WeatherSoilSection component */}
        <WeatherSoilSection />
      </div>
    </div>
  );
};

export default WeatherSoilPage;