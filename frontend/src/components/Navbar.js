import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { Moon, Sun, Globe } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const featuresLinks = [
    { key: "chatbot", label: t("chatbot"), path: "/chatbot" },
    {
      key: "cropRecommendation",
      label: t("cropRecommendation"),
      path: "/recommendation",
    },
    { key: "weatherSoil", label: t("weatherSoil"), path: "/weather-soil" },
    {
      key: "pestDetection",
      label: t("pestDetection"),
      path: "/pest-detection",
    },
    { key: "market", label: t("market"), path: "/market" },
    { key: "schemes", label: t("schemes"), path: "/schemes" },
    {
      key: "naturalSolutions",
      label: t("naturalSolutions"),
      path: "/natural-solutions",
    },
  ];

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिंदी" },
    { code: "pa", name: "ਪੰਜਾਬੀ" },
  ];

  // Refs for click-away
  const languageRef = useRef();
  const featuresRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (featuresRef.current && !featuresRef.current.contains(event.target)) {
        setIsFeaturesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
            >
              🌾 KrishiYantra
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 relative">
            {/* Home */}
            <Link
              to="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-green-50 dark:hover:bg-green-950 transition-colors"
            >
              {t("home")}
            </Link>

            {/* Features Button */}
            <div className="relative" ref={featuresRef}>
              <Button
                variant="ghost"
                className="px-4 py-2 rounded-lg text-sm font-medium"
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
              >
                {t("features")}
              </Button>

              {isFeaturesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-4 flex flex-col space-y-2 z-50">
                  {featuresLinks.map((item) => (
                    <Link
                      key={item.key}
                      to={item.path}
                      onClick={() => setIsFeaturesOpen(false)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-100 hover:bg-green-800 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About and Contact Links */}
            <Link
              to="/about"
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-green-50 dark:hover:bg-green-950 transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-green-50 dark:hover:bg-green-950 transition-colors"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <div className="relative" ref={languageRef}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="hover:bg-green-100 dark:hover:bg-green-900"
              >
                <Globe className="h-5 w-5" />
              </Button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-gray-900/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-700 rounded-xl shadow-lg p-2 flex flex-col space-y-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLanguageOpen(false); // close after selection
                      }}
                      className={`px-2 py-1 rounded-md text-left text-sm ${
                        language === lang.code
                          ? "bg-accent text-white"
                          : "text-gray-100 hover:bg-green-800 transition-colors"
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-transform duration-200 hover:scale-110 hover:bg-green-100 dark:hover:bg-green-900"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
