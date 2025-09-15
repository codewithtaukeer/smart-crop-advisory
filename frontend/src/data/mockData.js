export const mockData = {
  weatherData: {
    location: "Punjab, India",
    temperature: 28,
    humidity: 65,
    rainfall: 12,
    windSpeed: 15,
    forecast: [
      { day: "Today", temp: 28, condition: "Partly Cloudy", rainfall: 12 },
      { day: "Tomorrow", temp: 30, condition: "Sunny", rainfall: 0 },
      { day: "Day 3", temp: 26, condition: "Rainy", rainfall: 25 },
      { day: "Day 4", temp: 27, condition: "Cloudy", rainfall: 8 },
      { day: "Day 5", temp: 29, condition: "Sunny", rainfall: 0 }
    ]
  },
  
  soilData: {
    ph: 6.8,
    fertility: "High",
    waterRetention: "Good",
    organicMatter: 3.2,
    nitrogen: 45,
    phosphorus: 28,
    potassium: 52
  },
  
  cropRecommendations: [
    {
      crop: "Wheat",
      suitability: 95,
      expectedYield: "4.5 tons/hectare",
      reasoning: "Excellent soil conditions and favorable weather patterns",
      advantages: ["High market demand", "Suitable climate", "Good irrigation facilities"],
      alternatives: ["Barley", "Mustard"]
    },
    {
      crop: "Rice",
      suitability: 88,
      expectedYield: "6.2 tons/hectare", 
      reasoning: "Good water availability and monsoon patterns",
      advantages: ["High yield potential", "Water availability", "Market stability"],
      alternatives: ["Sugarcane", "Cotton"]
    }
  ],
  
  marketPrices: [
    { crop: "Wheat", price: 2100, unit: "per quintal", change: +5.2, trend: "up" },
    { crop: "Rice", price: 1850, unit: "per quintal", change: -2.1, trend: "down" },
    { crop: "Cotton", price: 5200, unit: "per quintal", change: +8.7, trend: "up" },
    { crop: "Sugarcane", price: 340, unit: "per quintal", change: +1.5, trend: "up" },
    { crop: "Maize", price: 1750, unit: "per quintal", change: -0.8, trend: "down" }
  ],
  
  chatbotResponses: {
    "crop disease": "Common crop diseases in your area include leaf blight and rust. For wheat, use fungicides like propiconazole. For rice, consider using copper oxychloride spray.",
    "irrigation": "Based on current weather conditions, irrigate your crops every 4-5 days. Monitor soil moisture levels and adjust accordingly.",
    "fertilizer": "For wheat crops, apply DAP (18:46:0) at 100kg/acre during sowing and Urea at 87kg/acre in two splits.",
    "pest control": "Use integrated pest management. For aphids, spray neem oil solution. For stem borers, use pheromone traps and biological control agents.",
    "default": "I can help you with crop diseases, irrigation schedules, fertilizer recommendations, and pest control. What would you like to know?"
  },
  
  successStories: [
    {
      name: "Rajesh Kumar",
      location: "Ludhiana, Punjab",
      story: "Increased wheat yield by 30% using smart irrigation and soil analysis recommendations.",
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma", 
      location: "Amritsar, Punjab",
      story: "Saved 40% on fertilizer costs while maintaining crop quality through precision agriculture.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sukhdev Singh",
      location: "Jalandhar, Punjab", 
      story: "Prevented major crop loss by early disease detection using AI-powered image analysis.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ]
};