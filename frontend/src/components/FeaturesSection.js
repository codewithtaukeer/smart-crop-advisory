import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { MessageSquare, Leaf, CloudSun, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t("aiChatbotTitle"),
      description: t("aiChatbotDesc"),
      icon: MessageSquare,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      targetSection: "#chatbot"
    },
    {
      title: t("cropRecommendationTitle"),
      description: t("cropRecommendationDesc"),
      icon: Leaf,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950",
      targetSection: "#crop-recommendation"
    },
    {
      title: t("weatherSoilTitle"),
      description: t("weatherSoilDesc"),
      icon: CloudSun,
      color: "text-orange-600 dark:text-orange-400",
      bgColor: "bg-orange-50 dark:bg-orange-950",
      targetSection: "#weather-soil"
    },
    {
      title: t("marketPricesTitle"),
      description: t("marketPricesDesc"),
      icon: TrendingUp,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      targetSection: "#market-prices"
    }
  ];

  const scrollToSection = (targetSection) => {
    const element = document.querySelector(targetSection);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="py-20 bg-background">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-primary/20"
                onClick={() => scrollToSection(feature.targetSection)}
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
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-primary hover:text-primary/80 group"
                  >
                    Explore Feature
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Feature Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">24/7</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Always Available</h3>
            <p className="text-muted-foreground">Get support and recommendations anytime, anywhere</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">AI</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Smart Technology</h3>
            <p className="text-muted-foreground">Powered by advanced machine learning algorithms</p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">📱</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Mobile Ready</h3>
            <p className="text-muted-foreground">Access all features on your smartphone or tablet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;