import React from "react";
import CropRecommendationSection from "../components/CropRecommendationSection";
import { Leaf } from "lucide-react";

const RecommendationPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Leaf className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Crop Recommendation System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized crop recommendations based on your location, soil conditions, and farming history
          </p>
        </div>

        {/* Use the existing CropRecommendationSection component */}
        <CropRecommendationSection />
      </div>
    </div>
  );
};

export default RecommendationPage;