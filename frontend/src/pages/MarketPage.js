import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { useLanguage } from "../contexts/LanguageContext";
import { TrendingUp, TrendingDown, Search, Filter, BarChart3, MapPin } from "lucide-react";
import { mockData } from "../data/mockData";

const MarketPage = () => {
  const { t } = useLanguage();
  const [marketData, setMarketData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCrop, setSelectedCrop] = useState("all");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMarketData(mockData.marketData);
      setFilteredData(mockData.marketData);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = marketData;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.crop.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Crop filter
    if (selectedCrop !== "all") {
      filtered = filtered.filter(item => item.crop === selectedCrop);
    }

    // Region filter
    if (selectedRegion !== "all") {
      filtered = filtered.filter(item => item.region === selectedRegion);
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedCrop, selectedRegion, selectedCategory, marketData]);

  const uniqueCrops = [...new Set(marketData.map(item => item.crop))];
  const uniqueRegions = [...new Set(marketData.map(item => item.region))];
  const uniqueCategories = [...new Set(marketData.map(item => item.category))];

  const getTrendColor = (trend) => {
    return trend === "up" ? "text-green-600" : "text-red-600";
  };

  const getTrendIcon = (trend) => {
    return trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />;
  };

  const getTrendBgColor = (trend) => {
    return trend === "up" ? "bg-green-50 dark:bg-green-950" : "bg-red-50 dark:bg-red-950";
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <BarChart3 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Market Prices
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with real-time crop prices and market trends across different regions
          </p>
        </div>

        {/* Filters Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters & Search
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for crops (e.g., wheat, rice, cotton)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {uniqueCategories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Region</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    {uniqueRegions.map((region) => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Specific Crop</label>
                <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Crops" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Crops</SelectItem>
                    {uniqueCrops.map((crop) => (
                      <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Market Data Cards */}
        {filteredData.length === 0 && marketData.length > 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-muted-foreground text-lg">No crops found matching your filters</p>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your search criteria</p>
          </div>
        ) : (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{filteredData.length}</div>
                  <div className="text-muted-foreground">Total Crops</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {filteredData.filter(item => item.trend === "up").length}
                  </div>
                  <div className="text-muted-foreground">Price Rising</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {filteredData.filter(item => item.trend === "down").length}
                  </div>
                  <div className="text-muted-foreground">Price Falling</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {uniqueRegions.length}
                  </div>
                  <div className="text-muted-foreground">States/Regions</div>
                </CardContent>
              </Card>
            </div>

            {/* Market Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className={`${getTrendBgColor(item.trend)} rounded-t-lg`}>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-xl font-bold text-foreground">{item.crop}</span>
                      <div className={`flex items-center ${getTrendColor(item.trend)}`}>
                        {getTrendIcon(item.trend)}
                        <span className="ml-1 font-semibold">
                          {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                        </span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Price */}
                      <div className="text-center">
                        <div className="text-3xl font-bold text-foreground">₹{item.price.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">{item.unit}</div>
                      </div>

                      {/* Details */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Category:</span>
                          <span className="text-sm font-medium text-foreground">{item.category}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            Region:
                          </span>
                          <span className="text-sm font-medium text-foreground">{item.region}</span>
                        </div>
                      </div>

                      {/* Trend Indicator */}
                      <div className={`p-3 rounded-lg ${getTrendBgColor(item.trend)}`}>
                        <div className={`text-center text-sm font-medium ${getTrendColor(item.trend)}`}>
                          {item.trend === "up" ? "📈 Rising Market" : "📉 Falling Market"}
                        </div>
                        <div className="text-xs text-muted-foreground text-center mt-1">
                          Last updated: {new Date().toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {marketData.length === 0 && (
          <div className="text-center py-12">
            <div className="animate-spin h-12 w-12 border-4 border-emerald-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">Loading market data...</p>
          </div>
        )}

        {/* Market Information */}
        <Card className="mt-12 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950">
          <CardHeader>
            <CardTitle className="text-emerald-700 dark:text-emerald-300">Market Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Data Sources</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Agricultural Produce Market Committee (APMC)</li>
                  <li>• National Sample Survey Office (NSSO)</li>
                  <li>• State Agricultural Marketing Boards</li>
                  <li>• Direct Farmer Reports</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Price Factors</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Seasonal demand and supply</li>
                  <li>• Weather conditions and crop yield</li>
                  <li>• Transportation and storage costs</li>
                  <li>• Government policies and subsidies</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Note:</strong> Prices are indicative and may vary by location and quality. 
                Please verify with local markets before making decisions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MarketPage;