import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useLanguage } from "../contexts/LanguageContext";
import { Leaf, MapPin, Calendar, Droplets, TrendingUp, CheckCircle } from "lucide-react";
import { mockData } from "../data/mockData";
import { useToast } from "../hooks/use-toast";

const CropRecommendationSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    location: "",
    pastCrops: [],
    soilType: "",
    season: ""
  });
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    { id: 1, title: "Location", icon: MapPin },
    { id: 2, title: "Past Crops", icon: Leaf },
    { id: 3, title: "Soil Type", icon: Droplets },
    { id: 4, title: "Season", icon: Calendar }
  ];

  const pastCropsOptions = [
    "Wheat", "Rice", "Cotton", "Sugarcane", "Maize", "Barley", "Mustard", "Potato", "Onion", "Tomato"
  ];

  const soilTypes = [
    "Alluvial", "Black Cotton", "Red", "Laterite", "Desert", "Mountain", "Sandy", "Clay", "Loamy"
  ];

  const seasons = [
    { value: "kharif", label: "Kharif (Monsoon)" },
    { value: "rabi", label: "Rabi (Winter)" },
    { value: "zaid", label: "Zaid (Summer)" }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setRecommendations(mockData.cropRecommendations);
      setIsLoading(false);
      toast({
        title: "Recommendations Generated!",
        description: "Based on your inputs, we found the best crops for your farm."
      });
    }, 2000);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      location: "",
      pastCrops: [],
      soilType: "",
      season: ""
    });
    setRecommendations(null);
  };

  const togglePastCrop = (crop) => {
    setFormData(prev => ({
      ...prev,
      pastCrops: prev.pastCrops.includes(crop)
        ? prev.pastCrops.filter(c => c !== crop)
        : [...prev.pastCrops, crop]
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="location">Enter your location</Label>
            <Input
              id="location"
              placeholder="e.g., Ludhiana, Punjab"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
            />
            <Button 
              onClick={() => {
                setFormData(prev => ({ ...prev, location: "Punjab, India (Auto-detected)" }));
                toast({
                  title: "Location Detected",
                  description: "Using your current location: Punjab, India"
                });
              }}
              variant="outline"
              className="w-full"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Auto-detect Location
            </Button>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-4">
            <Label>Select crops you've grown before (optional)</Label>
            <div className="grid grid-cols-2 gap-2">
              {pastCropsOptions.map((crop) => (
                <Button
                  key={crop}
                  variant={formData.pastCrops.includes(crop) ? "default" : "outline"}
                  size="sm"
                  onClick={() => togglePastCrop(crop)}
                  className="justify-start"
                >
                  <CheckCircle className={`h-4 w-4 mr-2 ${formData.pastCrops.includes(crop) ? 'opacity-100' : 'opacity-0'}`} />
                  {crop}
                </Button>
              ))}
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-4">
            <Label>Select your soil type (if known)</Label>
            <Select value={formData.soilType} onValueChange={(value) => setFormData(prev => ({ ...prev, soilType: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Choose soil type" />
              </SelectTrigger>
              <SelectContent>
                {soilTypes.map((soil) => (
                  <SelectItem key={soil} value={soil}>{soil}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Don't know your soil type? We'll help you identify it based on your location.
            </p>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-4">
            <Label>Select the growing season</Label>
            <Select value={formData.season} onValueChange={(value) => setFormData(prev => ({ ...prev, season: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Choose season" />
              </SelectTrigger>
              <SelectContent>
                {seasons.map((season) => (
                  <SelectItem key={season.value} value={season.value}>{season.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      
      default:
        return null;
    }
  };

  if (recommendations) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Recommended Crops for Your Farm
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recommendations.map((rec, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{rec.crop}</span>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Suitability</div>
                      <div className="text-2xl font-bold text-green-600">{rec.suitability}%</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Expected Yield</h4>
                    <p className="text-lg text-green-600 font-semibold">{rec.expectedYield}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Why This Crop?</h4>
                    <p className="text-muted-foreground">{rec.reasoning}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Advantages</h4>
                    <ul className="space-y-1">
                      {rec.advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Alternative Options</h4>
                    <div className="flex flex-wrap gap-2">
                      {rec.alternatives.map((alt, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted rounded-full text-sm">
                          {alt}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button onClick={resetForm} variant="outline" size="lg">
              Get New Recommendations
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="crop-recommendation" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("cropRecommendationTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized crop recommendations based on your location, soil, and farming history
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center">
                Smart Crop Recommendation Wizard
              </CardTitle>
              
              {/* Progress Steps */}
              <div className="flex justify-center mt-6">
                <div className="flex items-center space-x-4">
                  {steps.map((step, index) => {
                    const IconComponent = step.icon;
                    const isActive = currentStep === step.id;
                    const isCompleted = currentStep > step.id;
                    
                    return (
                      <div key={step.id} className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          isActive ? 'bg-green-600 text-white' :
                          isCompleted ? 'bg-green-100 text-green-600 dark:bg-green-900' :
                          'bg-gray-100 text-gray-400 dark:bg-gray-800'
                        }`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className={`ml-2 text-sm font-medium ${
                          isActive ? 'text-green-600' :
                          isCompleted ? 'text-green-600' :
                          'text-gray-400'
                        }`}>
                          {step.title}
                        </span>
                        {index < steps.length - 1 && (
                          <div className={`w-8 h-0.5 mx-4 ${
                            isCompleted ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-700'
                          }`} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="min-h-[200px]">
                {renderStepContent()}
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  variant="outline"
                >
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={isLoading || (currentStep === 1 && !formData.location)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2" />
                      Analyzing...
                    </>
                  ) : currentStep === 4 ? (
                    'Get Recommendations'
                  ) : (
                    'Next'
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CropRecommendationSection;