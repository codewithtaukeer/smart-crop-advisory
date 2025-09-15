import React from "react";
import { Button } from "./ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { ArrowRight, Sprout, Brain, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToFeatures = () => {
    const element = document.querySelector("#features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sprout className="h-24 w-24 text-green-600 transform rotate-12" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Brain className="h-20 w-20 text-emerald-600 transform -rotate-12" />
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-10">
        <TrendingUp className="h-32 w-32 text-teal-600" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            <span className="block">{t("heroTitle")}</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
              {t("heroSubtitle")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            {t("heroDescription")}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              onClick={scrollToFeatures}
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
            >
              {t("getStarted")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>

          {/* Stats or features preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Brain className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">AI-Powered Insights</h3>
                <p className="text-gray-600 dark:text-gray-300">Smart recommendations using machine learning</p>
              </div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Sprout className="h-12 w-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Crop Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">Maximize yield with data-driven decisions</p>
              </div>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Market Intelligence</h3>
                <p className="text-gray-600 dark:text-gray-300">Real-time pricing and market trends</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;