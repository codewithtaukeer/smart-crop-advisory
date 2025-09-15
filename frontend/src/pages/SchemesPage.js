import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useLanguage } from "../contexts/LanguageContext";
import { ExternalLink, Search, Star, CreditCard, Shield, Sprout, DollarSign, Award, Filter } from "lucide-react";
import { mockData } from "../data/mockData";

const SchemesPage = () => {
  const { t } = useLanguage();
  const [schemes, setSchemes] = useState([]);
  const [filteredSchemes, setFilteredSchemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSchemes(mockData.governmentSchemes);
      setFilteredSchemes(mockData.governmentSchemes);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = schemes;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(scheme =>
        scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scheme.shortDesc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(scheme => scheme.category === selectedCategory);
    }

    setFilteredSchemes(filtered);
  }, [searchTerm, selectedCategory, schemes]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Direct Benefit":
        return <DollarSign className="h-5 w-5" />;
      case "Credit":
        return <CreditCard className="h-5 w-5" />;
      case "Insurance":
        return <Shield className="h-5 w-5" />;
      case "Technical Support":
        return <Sprout className="h-5 w-5" />;
      case "Infrastructure":
        return <Award className="h-5 w-5" />;
      case "Marketing":
        return <ExternalLink className="h-5 w-5" />;
      default:
        return <Star className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Direct Benefit":
        return "text-green-600 bg-green-50 dark:bg-green-950";
      case "Credit":
        return "text-blue-600 bg-blue-50 dark:bg-blue-950";
      case "Insurance":
        return "text-purple-600 bg-purple-50 dark:bg-purple-950";
      case "Technical Support":
        return "text-orange-600 bg-orange-50 dark:bg-orange-950";
      case "Infrastructure":
        return "text-cyan-600 bg-cyan-50 dark:bg-cyan-950";
      case "Marketing":
        return "text-pink-600 bg-pink-50 dark:bg-pink-950";
      default:
        return "text-gray-600 bg-gray-50 dark:bg-gray-950";
    }
  };

  const uniqueCategories = [...new Set(schemes.map(scheme => scheme.category))];

  const prioritySchemes = filteredSchemes.filter(scheme => scheme.priority);
  const regularSchemes = filteredSchemes.filter(scheme => !scheme.priority);

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Government Schemes & Loans
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest government schemes, subsidies, and loan opportunities for farmers
          </p>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Search & Filter Schemes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search schemes by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                All Categories
              </Button>
              {uniqueCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center"
                >
                  {getCategoryIcon(category)}
                  <span className="ml-1">{category}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Priority Schemes */}
        {prioritySchemes.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-bold text-foreground">Priority Schemes for Farmers</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {prioritySchemes.map((scheme) => (
                <Card key={scheme.id} className="border-2 border-yellow-200 dark:border-yellow-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 rounded-t-lg">
                    <CardTitle className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg mr-3 ${getCategoryColor(scheme.category)}`}>
                          {getCategoryIcon(scheme.category)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{scheme.name}</h3>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${getCategoryColor(scheme.category)}`}>
                            {scheme.category}
                          </span>
                        </div>
                      </div>
                      <Star className="h-5 w-5 text-yellow-500" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">{scheme.shortDesc}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="text-sm font-semibold text-foreground">Eligibility: </span>
                        <span className="text-sm text-muted-foreground">{scheme.eligibility}</span>
                      </div>
                      
                      <div>
                        <span className="text-sm font-semibold text-foreground">Amount: </span>
                        <span className="text-sm font-semibold text-green-600">{scheme.amount}</span>
                      </div>
                    </div>

                    <div className="bg-muted rounded-lg p-3 mb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{scheme.description}</p>
                    </div>

                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(scheme.link, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More & Apply
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Schemes */}
        {regularSchemes.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">All Government Schemes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularSchemes.map((scheme) => (
                <Card key={scheme.id} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg mr-3 ${getCategoryColor(scheme.category)}`}>
                          {getCategoryIcon(scheme.category)}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-foreground leading-tight">{scheme.name}</h3>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${getCategoryColor(scheme.category)}`}>
                            {scheme.category}
                          </span>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{scheme.shortDesc}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div>
                        <span className="text-xs font-semibold text-foreground">Eligibility: </span>
                        <span className="text-xs text-muted-foreground">{scheme.eligibility}</span>
                      </div>
                      
                      <div>
                        <span className="text-xs font-semibold text-foreground">Amount: </span>
                        <span className="text-xs font-semibold text-green-600">{scheme.amount}</span>
                      </div>
                    </div>

                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(scheme.link, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredSchemes.length === 0 && schemes.length > 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-muted-foreground text-lg">No schemes found matching your criteria</p>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filter</p>
          </div>
        )}

        {/* Loading State */}
        {schemes.length === 0 && (
          <div className="text-center py-12">
            <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">Loading government schemes...</p>
          </div>
        )}

        {/* Information Section */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-300">Important Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Application Process</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Visit the official government websites</li>
                  <li>• Check eligibility criteria carefully</li>
                  <li>• Prepare required documents in advance</li>
                  <li>• Apply within the specified deadlines</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Required Documents</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Aadhaar Card and PAN Card</li>
                  <li>• Land ownership documents</li>
                  <li>• Bank account details</li>
                  <li>• Caste certificate (if applicable)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950 rounded-lg">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Disclaimer:</strong> Scheme details and eligibility criteria may change. 
                Please verify the latest information on official government websites before applying.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchemesPage;