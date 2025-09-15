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
  ],

  // Market Data
  marketData: [
    { crop: "Wheat", price: 2100, unit: "per quintal", change: +5.2, trend: "up", region: "Punjab", category: "Grains" },
    { crop: "Rice", price: 1850, unit: "per quintal", change: -2.1, trend: "down", region: "Punjab", category: "Grains" },
    { crop: "Cotton", price: 5200, unit: "per quintal", change: +8.7, trend: "up", region: "Gujarat", category: "Cash Crops" },
    { crop: "Sugarcane", price: 340, unit: "per quintal", change: +1.5, trend: "up", region: "Uttar Pradesh", category: "Cash Crops" },
    { crop: "Maize", price: 1750, unit: "per quintal", change: -0.8, trend: "down", region: "Karnataka", category: "Grains" },
    { crop: "Onion", price: 2200, unit: "per quintal", change: +12.3, trend: "up", region: "Maharashtra", category: "Vegetables" },
    { crop: "Potato", price: 1200, unit: "per quintal", change: -5.5, trend: "down", region: "Uttar Pradesh", category: "Vegetables" },
    { crop: "Tomato", price: 3500, unit: "per quintal", change: +15.2, trend: "up", region: "Andhra Pradesh", category: "Vegetables" },
    { crop: "Soybean", price: 4100, unit: "per quintal", change: +3.8, trend: "up", region: "Madhya Pradesh", category: "Oilseeds" },
    { crop: "Mustard", price: 5400, unit: "per quintal", change: -1.2, trend: "down", region: "Rajasthan", category: "Oilseeds" }
  ],

  // Government Schemes Data
  governmentSchemes: [
    {
      id: 1,
      name: "PM-KISAN Yojana",
      shortDesc: "Direct income support of ₹6000 per year to small and marginal farmers",
      description: "Pradhan Mantri Kisan Samman Nidhi provides financial support to farmer families holding cultivable land up to 2 hectares.",
      eligibility: "Small and marginal farmers with landholding up to 2 hectares",
      amount: "₹6,000 per year in 3 installments",
      link: "https://pmkisan.gov.in/",
      category: "Direct Benefit",
      priority: true
    },
    {
      id: 2,
      name: "Kisan Credit Card (KCC)",
      shortDesc: "Easy credit facility for farmers to meet agricultural expenses",
      description: "Provides adequate and timely credit support from the banking system to farmers for their cultivation and other needs.",
      eligibility: "All farmers including tenant farmers, oral lessees, and sharecroppers",
      amount: "Up to ₹3 lakh at 7% interest rate",
      link: "https://www.nabard.org/content1.aspx?id=518",
      category: "Credit",
      priority: true
    },
    {
      id: 3,
      name: "Pradhan Mantri Fasal Bima Yojana",
      shortDesc: "Crop insurance scheme to protect farmers from crop losses",
      description: "Provides insurance coverage and financial support to farmers in case of crop failure due to natural calamities.",
      eligibility: "All farmers growing notified crops in notified areas",
      amount: "Premium: 2% for Kharif, 1.5% for Rabi crops",
      link: "https://pmfby.gov.in/",
      category: "Insurance",
      priority: true
    },
    {
      id: 4,
      name: "Soil Health Card Scheme",
      shortDesc: "Free soil testing and nutrient recommendations for farmers",
      description: "Provides soil health cards to farmers with information on nutrient status of their soil and recommendations on appropriate dosage of nutrients.",
      eligibility: "All farmers across the country",
      amount: "Free soil testing",
      link: "https://soilhealth.dac.gov.in/",
      category: "Technical Support",
      priority: false
    },
    {
      id: 5,
      name: "Pradhan Mantri Krishi Sinchai Yojana",
      shortDesc: "Water conservation and irrigation efficiency improvement",
      description: "Focuses on expanding cultivated area with assured irrigation, improving on-farm water use efficiency, and introducing sustainable water conservation practices.",
      eligibility: "Individual farmers, groups of farmers, cooperatives, SHGs",
      amount: "90% subsidy for SC/ST, 75% for others",
      link: "https://pmksy.gov.in/",
      category: "Infrastructure",
      priority: false
    },
    {
      id: 6,
      name: "National Agriculture Market (e-NAM)",
      shortDesc: "Online trading platform for agricultural commodities",
      description: "Electronic trading portal for agricultural commodities in India, providing better price discovery and transparent auction process.",
      eligibility: "All registered farmers and traders",
      amount: "No registration fee",
      link: "https://enam.gov.in/",
      category: "Marketing",
      priority: false
    }
  ],

  // Natural Solutions Data
  naturalSolutions: [
    {
      id: 1,
      title: "Neem Oil Spray",
      category: "Pest Control",
      problem: "Aphids, Whiteflies, Thrips",
      description: "Natural insecticide made from neem tree seeds that disrupts pest life cycles.",
      preparation: "Mix 2 tablespoons neem oil + 1 teaspoon mild soap in 1 liter water",
      whenToUse: "Early morning or evening, every 7-10 days during pest infestation",
      benefits: ["Non-toxic to humans", "Doesn't harm beneficial insects", "Acts as fungicide too", "Long-lasting protection"],
      tags: ["organic", "pest-control", "safe", "affordable"]
    },
    {
      id: 2,
      title: "Cow Urine Spray", 
      category: "Pest Control",
      problem: "General pests, Fungal diseases",
      description: "Traditional organic pesticide with natural antimicrobial properties.",
      preparation: "Dilute fresh cow urine with water in 1:10 ratio, ferment for 7 days",
      whenToUse: "Spray during cool hours, repeat every 10-15 days",
      benefits: ["Rich in nutrients", "Boosts plant immunity", "Eco-friendly", "Cost-effective"],
      tags: ["traditional", "organic", "immunity-booster", "fungicide"]
    },
    {
      id: 3,
      title: "Vermicompost",
      category: "Soil Enrichment", 
      problem: "Poor soil fertility, Low organic matter",
      description: "Nutrient-rich organic fertilizer produced by earthworms breaking down organic waste.",
      preparation: "Maintain moisture, add kitchen waste, cow dung, and earthworms in composting unit",
      whenToUse: "Apply during soil preparation before sowing, 2-3 tons per hectare",
      benefits: ["Improves soil structure", "Increases water retention", "Rich in NPK", "Slow nutrient release"],
      tags: ["soil-health", "organic-fertilizer", "sustainable", "nutrient-rich"]
    },
    {
      id: 4,
      title: "Green Manure Crops",
      category: "Soil Enrichment",
      problem: "Soil nutrient depletion, Soil erosion", 
      description: "Growing specific crops to be plowed back into soil for natural fertilization.",
      preparation: "Sow leguminous crops like dhaincha, cowpea, or sunhemp during off-season",
      whenToUse: "Grow for 45-60 days, then plow back into soil before flowering",
      benefits: ["Adds nitrogen naturally", "Improves soil organic matter", "Prevents soil erosion", "Weed suppression"],
      tags: ["nitrogen-fixation", "soil-building", "erosion-control", "sustainable"]
    },
    {
      id: 5,
      title: "Drip Irrigation System",
      category: "Water Conservation",
      problem: "Water wastage, Uneven water distribution",
      description: "Efficient water delivery system that applies water directly to plant roots.",
      preparation: "Install main line, sub-main lines, laterals, and drippers near plant base",
      whenToUse: "Continuous use throughout growing season, especially in water-scarce areas",
      benefits: ["90% water efficiency", "Reduced weed growth", "Better crop yield", "Labor saving"],
      tags: ["water-saving", "efficiency", "precision-farming", "yield-booster"]
    },
    {
      id: 6,
      title: "Mulching Technique",
      category: "Water Conservation", 
      problem: "Soil moisture loss, Weed growth",
      description: "Covering soil surface with organic or inorganic materials to retain moisture.",
      preparation: "Apply 3-4 inch layer of straw, leaves, plastic, or crop residues around plants",
      whenToUse: "After planting, maintain throughout growing season",
      benefits: ["Retains soil moisture", "Controls weeds", "Regulates soil temperature", "Improves soil health"],
      tags: ["moisture-retention", "weed-control", "temperature-regulation", "soil-protection"]
    },
    {
      id: 7,
      title: "Companion Planting",
      category: "Pest Control",
      problem: "Pest infestation, Monoculture risks",
      description: "Growing different crops together that benefit each other naturally.",
      preparation: "Plant complementary crops like marigold with tomatoes, basil with peppers",
      whenToUse: "Plan during crop layout, implement at sowing time",
      benefits: ["Natural pest deterrent", "Improved pollination", "Better space utilization", "Reduced chemical use"],
      tags: ["biodiversity", "natural-protection", "space-efficient", "sustainable"]
    },
    {
      id: 8,
      title: "Compost Tea Fertilizer",
      category: "Soil Enrichment",
      problem: "Nutrient deficiency, Poor plant growth",
      description: "Liquid fertilizer made by steeping compost in water to extract nutrients.",
      preparation: "Soak 1 kg compost in 10 liters water for 24-48 hours, strain before use",
      whenToUse: "Apply every 2-3 weeks during growing season, early morning or evening",
      benefits: ["Quick nutrient absorption", "Improves soil microbiology", "Cost-effective", "Easy to apply"],
      tags: ["liquid-fertilizer", "quick-acting", "soil-biology", "organic"]
    }
  ]
};