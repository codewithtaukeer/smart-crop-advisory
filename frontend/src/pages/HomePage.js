import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { ArrowRight, Sprout, Brain, TrendingUp, MessageSquare, Leaf, CloudSun, Bug, Users, Award, Globe } from "lucide-react";

const HomePage = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t("aiChatbotTitle"),
      description: t("aiChatbotDesc"),
      icon: MessageSquare,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      path: "/chatbot"
    },
    {
      title: t("cropRecommendationTitle"),
      description: t("cropRecommendationDesc"),
      icon: Leaf,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950",
      path: "/recommendation"
    },
    {
      title: t("weatherSoilTitle"),
      description: t("weatherSoilDesc"),
      icon: CloudSun,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      path: "/weather-soil"
    },
    {
      title: t("pestDetection"),
      description: "AI-powered pest identification using camera technology",
      icon: Bug,
      color: "text-red-600 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950",
      path: "/pest-detection"
    },
    {
      title: t("market"),
      description: "Real-time crop prices and market trends across regions",
      icon: TrendingUp,
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-950",
      path: "/market"
    },
    {
      title: t("schemes"),
      description: "Government schemes, subsidies, and loan opportunities for farmers",
      icon: Award,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      path: "/schemes"
    },
    {
      title: t("naturalSolutions"),
      description: "Organic and eco-friendly farming solutions for sustainable agriculture",
      icon: Sprout,
      color: "text-teal-600 dark:text-teal-400",
      bgColor: "bg-teal-50 dark:bg-teal-950",
      path: "/natural-solutions"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Farmers Helped", icon: Users },
    { value: "25%", label: "Avg. Yield Increase", icon: TrendingUp },
    { value: "₹50,000", label: "Avg. Income Boost", icon: Award },
    { value: "5 States", label: "Coverage Area", icon: Globe }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <div className="flex justify-center mb-16">
              <Link to="/chatbot">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  {t("getStarted")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <IconComponent className="h-12 w-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                      <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("featuresTitle")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover powerful tools designed to help farmers make smarter decisions and achieve better results.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-primary/20"
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={feature.path}>
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group"
                      >
                        Explore Feature
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Farming?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of successful farmers using AI-powered agriculture
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/recommendation">
                <Button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                  Get Crop Recommendations
                </Button>
              </Link>
              <Link to="/chatbot">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-full font-semibold transition-colors duration-200 transform hover:scale-105">
                  Chat with AI Assistant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;