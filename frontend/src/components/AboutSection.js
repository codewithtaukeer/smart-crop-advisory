import React from "react";
import { Card, CardContent } from "./ui/card";
import { useLanguage } from "../contexts/LanguageContext";
import { Heart, Shield, TrendingUp, Users, Award, Globe } from "lucide-react";
import { mockData } from "../data/mockData";

const AboutSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "10,000+", label: "Farmers Helped", icon: Users },
    { value: "25%", label: "Avg. Yield Increase", icon: TrendingUp },
    { value: "₹50,000", label: "Avg. Income Boost", icon: Award },
    { value: "5 States", label: "Coverage Area", icon: Globe }
  ];

  const challenges = [
    {
      title: "Crop Failures",
      description: "Unpredictable weather and diseases destroy harvests, leading to massive financial losses.",
      icon: Shield,
      impact: "40% of farmers face crop loss annually"
    },
    {
      title: "Climate Uncertainty",
      description: "Changing weather patterns make traditional farming methods unreliable.",
      icon: TrendingUp,
      impact: "60% increase in weather-related losses"
    },
    {
      title: "Market Volatility",
      description: "Fluctuating prices and lack of market information affect farmer income.",
      icon: Users,
      impact: "Price drops cost farmers ₹2 lakh annually"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("aboutTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("aboutDescription")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              We believe every farmer deserves access to cutting-edge technology to make informed decisions. 
              Our AI-powered platform combines weather data, soil analysis, and market intelligence to help 
              farmers reduce risks, increase yields, and build sustainable farming practices that benefit 
              both their families and the environment.
            </p>
          </div>
        </div>

        {/* Challenges We Address */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Challenges We're Solving
            </h3>
            <p className="text-lg text-muted-foreground">
              Understanding the real problems farmers face every day
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => {
              const IconComponent = challenge.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{challenge.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{challenge.description}</p>
                    <div className="bg-red-50 dark:bg-red-950 rounded-lg p-3">
                      <p className="text-sm font-semibold text-red-700 dark:text-red-300">
                        Impact: {challenge.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Farmer Success Stories
            </h3>
            <p className="text-lg text-muted-foreground">
              Real stories from farmers who transformed their farming with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face";
                      }}
                    />
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{story.name}</h4>
                      <p className="text-sm text-muted-foreground">{story.location}</p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    "{story.story}"
                  </blockquote>
                  <div className="mt-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="text-yellow-400">★</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Join Thousands of Successful Farmers
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Start your journey towards smarter, more profitable farming today
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#crop-recommendation");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;