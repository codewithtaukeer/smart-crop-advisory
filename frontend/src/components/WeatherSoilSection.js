import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { CloudSun, Thermometer, Droplets, Wind, Eye, TestTube, Leaf, Activity } from "lucide-react";
import { mockData } from "../data/mockData";

const WeatherSoilSection = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("weather");
  const [weather, setWeather] = useState(null);
  const [soil, setSoil] = useState(null);

  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      setWeather(mockData.weatherData);
      setSoil(mockData.soilData);
    }, 1000);
  }, []);

  const WeatherCard = ({ icon: Icon, title, value, unit, color = "text-blue-600" }) => (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">
              {value}
              <span className="text-sm font-normal text-muted-foreground ml-1">{unit}</span>
            </p>
          </div>
          <div className={`p-3 rounded-full bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const SoilCard = ({ icon: Icon, title, value, unit, color = "text-green-600", status }) => (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">
              {value}
              <span className="text-sm font-normal text-muted-foreground ml-1">{unit}</span>
            </p>
            {status && (
              <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                status === 'High' || status === 'Good' || status === 'Optimal' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : status === 'Medium' || status === 'Fair'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
              }`}>
                {status}
              </span>
            )}
          </div>
          <div className={`p-3 rounded-full bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
            <Icon className={`h-6 w-6 ${color}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("weatherSoilTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-time weather monitoring and comprehensive soil analysis for informed farming decisions
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveTab("weather")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === "weather"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Weather Data
            </button>
            <button
              onClick={() => setActiveTab("soil")}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                activeTab === "soil"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Soil Analysis
            </button>
          </div>
        </div>

        {/* Weather Tab */}
        {activeTab === "weather" && (
          <div className="space-y-8">
            {weather ? (
              <>
                {/* Current Weather */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Current Weather</h3>
                  <p className="text-lg text-muted-foreground">{weather.location}</p>
                </div>

                {/* Weather Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <WeatherCard
                    icon={Thermometer}
                    title="Temperature"
                    value={weather.temperature}
                    unit="°C"
                    color="text-red-600"
                  />
                  <WeatherCard
                    icon={Droplets}
                    title="Humidity"
                    value={weather.humidity}
                    unit="%"
                    color="text-blue-600"
                  />
                  <WeatherCard
                    icon={CloudSun}
                    title="Rainfall"
                    value={weather.rainfall}
                    unit="mm"
                    color="text-cyan-600"
                  />
                  <WeatherCard
                    icon={Wind}
                    title="Wind Speed"
                    value={weather.windSpeed}
                    unit="km/h"
                    color="text-gray-600"
                  />
                </div>

                {/* 5-Day Forecast */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">5-Day Forecast</h3>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {weather.forecast.map((day, index) => (
                      <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-4">
                          <p className="font-semibold text-foreground mb-2">{day.day}</p>
                          <CloudSun className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                          <p className="text-lg font-bold text-foreground">{day.temp}°C</p>
                          <p className="text-sm text-muted-foreground">{day.condition}</p>
                          <p className="text-xs text-blue-600 mt-1">{day.rainfall}mm rain</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading weather data...</p>
              </div>
            )}
          </div>
        )}

        {/* Soil Tab */}
        {activeTab === "soil" && (
          <div className="space-y-8">
            {soil ? (
              <>
                {/* Soil Overview */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Soil Health Analysis</h3>
                  <p className="text-lg text-muted-foreground">Comprehensive soil analysis for your farmland</p>
                </div>

                {/* Primary Soil Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <SoilCard
                    icon={TestTube}
                    title="pH Level"
                    value={soil.ph}
                    unit=""
                    color="text-purple-600"
                    status={soil.ph >= 6.0 && soil.ph <= 7.5 ? "Optimal" : soil.ph > 7.5 ? "High" : "Low"}
                  />
                  <SoilCard
                    icon={Leaf}
                    title="Fertility"
                    value={soil.fertility}
                    unit=""
                    color="text-green-600"
                    status={soil.fertility}
                  />
                  <SoilCard
                    icon={Droplets}
                    title="Water Retention"
                    value={soil.waterRetention}
                    unit=""
                    color="text-blue-600"
                    status={soil.waterRetention}
                  />
                  <SoilCard
                    icon={Activity}
                    title="Organic Matter"
                    value={soil.organicMatter}
                    unit="%"
                    color="text-amber-600"
                    status={soil.organicMatter > 3 ? "High" : soil.organicMatter > 2 ? "Medium" : "Low"}
                  />
                </div>

                {/* Nutrient Analysis */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Nutrient Analysis (ppm)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-center text-blue-600">Nitrogen (N)</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-3xl font-bold text-foreground mb-2">{soil.nitrogen}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                            style={{width: `${Math.min((soil.nitrogen / 60) * 100, 100)}%`}}
                          ></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {soil.nitrogen > 40 ? "Adequate" : soil.nitrogen > 25 ? "Medium" : "Low"}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-center text-orange-600">Phosphorus (P)</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-3xl font-bold text-foreground mb-2">{soil.phosphorus}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div 
                            className="bg-orange-600 h-2 rounded-full transition-all duration-1000" 
                            style={{width: `${Math.min((soil.phosphorus / 40) * 100, 100)}%`}}
                          ></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {soil.phosphorus > 25 ? "Adequate" : soil.phosphorus > 15 ? "Medium" : "Low"}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-center text-green-600">Potassium (K)</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-3xl font-bold text-foreground mb-2">{soil.potassium}</div>
                        <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                          <div 
                            className="bg-green-600 h-2 rounded-full transition-all duration-1000" 
                            style={{width: `${Math.min((soil.potassium / 60) * 100, 100)}%`}}
                          ></div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          {soil.potassium > 40 ? "Adequate" : soil.potassium > 25 ? "Medium" : "Low"}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Recommendations */}
                <Card className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                  <CardHeader>
                    <CardTitle className="text-green-700 dark:text-green-300">Soil Improvement Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Eye className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-foreground">Your soil pH is optimal for most crops. Continue current management practices.</span>
                      </li>
                      <li className="flex items-start">
                        <Eye className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-foreground">High fertility levels indicate good soil health. Consider crop rotation to maintain balance.</span>
                      </li>
                      <li className="flex items-start">
                        <Eye className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-foreground">Potassium levels are excellent. This supports strong plant structure and disease resistance.</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="animate-spin h-8 w-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-muted-foreground">Analyzing soil data...</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default WeatherSoilSection;