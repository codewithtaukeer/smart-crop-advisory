import React from "react";
import AboutSection from "../components/AboutSection";
import { Heart } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-10 w-10 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Smart Crop Advisory
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn about our mission to empower farmers with AI-driven insights and technology solutions
          </p>
        </div>

        {/* Use the existing AboutSection component */}
        <AboutSection />
      </div>
    </div>
  );
};

export default AboutPage;