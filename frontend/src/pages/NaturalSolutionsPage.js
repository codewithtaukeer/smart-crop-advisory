import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { Search, Leaf, Droplets, Bug, Filter, Clock, CheckCircle, Lightbulb } from "lucide-react";
import { mockData } from "../data/mockData";

const NaturalSolutionsPage = () => {
  const { t } = useLanguage();
  const [solutions, setSolutions] = useState([]);
  const [filteredSolutions, setFilteredSolutions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setSolutions(mockData.naturalSolutions);
      setFilteredSolutions(mockData.naturalSolutions);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = solutions;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(solution =>
        solution.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solution.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(solution => solution.category === selectedCategory);
    }

    setFilteredSolutions(filtered);
  }, [searchTerm, selectedCategory, solutions]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Pest Control":
        return <Bug className="h-5 w-5" />;
      case "Soil Enrichment":
        return <Leaf className="h-5 w-5" />;
      case "Water Conservation":
        return <Droplets className="h-5 w-5" />;
      default:
        return <Lightbulb className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Pest Control":
        return "text-red-600 bg-red-50 dark:bg-red-950";
      case "Soil Enrichment":
        return "text-green-600 bg-green-50 dark:bg-green-950";
      case "Water Conservation":
        return "text-blue-600 bg-blue-50 dark:bg-blue-950";
      default:
        return "text-purple-600 bg-purple-50 dark:bg-purple-950";
    }
  };

  const uniqueCategories = [...new Set(solutions.map(solution => solution.category))];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Leaf className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Natural & Organic Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover eco-friendly, organic methods for pest control, soil enrichment, and water conservation
          </p>
        </div>

        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Search Natural Solutions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by problem (e.g., pest, soil fertility, water conservation)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                All Solutions
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

        {/* Solutions Grid */}
        {filteredSolutions.length === 0 && solutions.length > 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-muted-foreground text-lg">No solutions found matching your search</p>
            <p className="text-sm text-muted-foreground mt-2">Try different keywords or browse by category</p>
          </div>
        ) : (
          <>
            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">{filteredSolutions.length}</div>
                  <div className="text-muted-foreground">Natural Solutions</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{uniqueCategories.length}</div>
                  <div className="text-muted-foreground">Categories</div>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-muted-foreground">Organic & Safe</div>
                </CardContent>
              </Card>
            </div>

            {/* Solutions Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredSolutions.map((solution) => (
                <Card key={solution.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className={`${getCategoryColor(solution.category)} rounded-t-lg`}>
                    <CardTitle className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className={`p-2 rounded-lg mr-3 bg-white dark:bg-gray-800`}>
                          {getCategoryIcon(solution.category)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">{solution.title}</h3>
                          <span className="text-sm text-muted-foreground mt-1 block">
                            For: {solution.problem}
                          </span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(solution.category)}`}>
                        {solution.category}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-4">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{solution.description}</p>

                    {/* Preparation */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2 text-yellow-600" />
                        How to Prepare
                      </h4>
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-sm text-foreground">{solution.preparation}</p>
                      </div>
                    </div>

                    {/* When to Use */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-600" />
                        When to Use
                      </h4>
                      <p className="text-sm text-muted-foreground">{solution.whenToUse}</p>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                        Benefits
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {solution.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-2">
                      {solution.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* Loading State */}
        {solutions.length === 0 && (
          <div className="text-center py-12">
            <div className="animate-spin h-12 w-12 border-4 border-green-600 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">Loading natural solutions...</p>
          </div>
        )}

        {/* Information Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
            <CardContent className="p-6 text-center">
              <Bug className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Pest Control</h3>
              <p className="text-sm text-muted-foreground">
                Safe, organic methods to protect crops from pests without harmful chemicals
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
            <CardContent className="p-6 text-center">
              <Droplets className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Water Conservation</h3>
              <p className="text-sm text-muted-foreground">
                Efficient irrigation and water management techniques for sustainable farming
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
            <CardContent className="p-6 text-center">
              <Leaf className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Soil Enrichment</h3>
              <p className="text-sm text-muted-foreground">
                Natural fertilizers and soil improvement methods for healthy crop growth
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <Card className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
          <CardContent className="p-6">
            <div className="flex items-start">
              <Lightbulb className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Important Guidelines</h4>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>• Always test natural solutions on a small area before full application</li>
                  <li>• Consult with local agricultural experts for region-specific advice</li>
                  <li>• Results may vary based on soil type, climate, and crop variety</li>
                  <li>• Maintain proper documentation of treatments and their effectiveness</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NaturalSolutionsPage;