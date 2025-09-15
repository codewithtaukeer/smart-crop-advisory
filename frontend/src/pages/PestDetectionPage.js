import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useLanguage } from "../contexts/LanguageContext";
import { Camera, Upload, RotateCcw, Send, Bug, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const PestDetectionPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [capturedImage, setCapturedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const streamRef = useRef(null);

  // Mock analysis results for demonstration
  const mockAnalysisResults = [
    {
      pest: "Aphid",
      confidence: 92,
      severity: "Medium",
      description: "Small, soft-bodied insects that feed on plant sap",
      treatment: "Spray with neem oil solution or insecticidal soap. Apply in early morning or late evening.",
      prevention: "Encourage beneficial insects like ladybugs, maintain proper plant spacing for air circulation."
    },
    {
      pest: "Whitefly",
      confidence: 88,
      severity: "High",
      description: "Tiny white flying insects that cluster on the undersides of leaves",
      treatment: "Use yellow sticky traps and spray with pyrethrin-based insecticide.",
      prevention: "Remove infected leaves, use reflective mulch, and introduce natural predators."
    },
    {
      pest: "Spider Mite",
      confidence: 85,
      severity: "Low",
      description: "Microscopic pests that cause stippling and webbing on leaves",
      treatment: "Increase humidity around plants and spray with miticide or neem oil.",
      prevention: "Regular watering, avoid over-fertilizing, and maintain proper humidity levels."
    }
  ];

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment', // Use back camera on mobile
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsCameraActive(true);
        
        toast({
          title: "Camera Activated",
          description: "Position your device to capture the affected plant area."
        });
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please try uploading an image instead.",
        variant: "destructive"
      });
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const video = videoRef.current;
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      
      const imageDataUrl = canvas.toDataURL('image/jpeg', 0.8);
      setCapturedImage(imageDataUrl);
      stopCamera();
      
      toast({
        title: "Image Captured",
        description: "Image captured successfully! You can now submit it for analysis."
      });
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target.result);
        toast({
          title: "Image Uploaded",
          description: "Image uploaded successfully! You can now submit it for analysis."
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const submitForAnalysis = async () => {
    if (!capturedImage) {
      toast({
        title: "No Image",
        description: "Please capture or upload an image first.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setAnalysisResult(null);

    // Simulate API call with random result
    setTimeout(() => {
      const randomResult = mockAnalysisResults[Math.floor(Math.random() * mockAnalysisResults.length)];
      setAnalysisResult(randomResult);
      setIsLoading(false);
      
      toast({
        title: "Analysis Complete",
        description: `Detected: ${randomResult.pest} with ${randomResult.confidence}% confidence`
      });
    }, 3000);
  };

  const resetDetection = () => {
    setCapturedImage(null);
    setAnalysisResult(null);
    stopCamera();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity?.toLowerCase()) {
      case 'high':
        return 'text-red-600 bg-red-50 dark:bg-red-950';
      case 'medium':
        return 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950';
      case 'low':
        return 'text-green-600 bg-green-50 dark:bg-green-950';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-950';
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Bug className="h-10 w-10 text-red-600 dark:text-red-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI Pest Detection
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload or capture an image of your crop to identify pests and get treatment recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Capture Section */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="h-6 w-6 text-red-600 mr-2" />
                  Capture or Upload Image
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Camera Controls */}
                {!capturedImage && (
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={isCameraActive ? captureImage : startCamera}
                        className="bg-red-600 hover:bg-red-700 text-white flex-1"
                        disabled={isLoading}
                      >
                        <Camera className="h-4 w-4 mr-2" />
                        {isCameraActive ? 'Capture Image' : 'Open Camera'}
                      </Button>
                      
                      <Button
                        onClick={() => fileInputRef.current?.click()}
                        variant="outline"
                        className="flex-1"
                        disabled={isLoading || isCameraActive}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Image
                      </Button>
                    </div>

                    {isCameraActive && (
                      <Button
                        onClick={stopCamera}
                        variant="outline"
                        className="w-full"
                      >
                        Cancel Camera
                      </Button>
                    )}
                  </div>
                )}

                {/* Hidden file input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />

                {/* Camera Preview */}
                {isCameraActive && (
                  <div className="relative bg-black rounded-lg overflow-hidden">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 border-2 border-dashed border-white/50 m-4 rounded-lg flex items-center justify-center">
                      <p className="text-white text-sm bg-black/50 px-3 py-1 rounded">
                        Position pest-affected area in frame
                      </p>
                    </div>
                  </div>
                )}

                {/* Canvas for image capture (hidden) */}
                <canvas ref={canvasRef} className="hidden" />

                {/* Captured Image Preview */}
                {capturedImage && (
                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src={capturedImage}
                        alt="Captured plant"
                        className="w-full h-64 object-cover rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600"
                      />
                      <Button
                        onClick={resetDetection}
                        size="sm"
                        variant="outline"
                        className="absolute top-2 right-2"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      onClick={submitForAnalysis}
                      disabled={isLoading}
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Analyzing Image...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit for Analysis
                        </>
                      )}
                    </Button>
                  </div>
                )}

                {/* Instructions */}
                <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    📸 Tips for Better Detection:
                  </h4>
                  <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• Ensure good lighting conditions</li>
                    <li>• Focus on the affected leaf or plant part</li>
                    <li>• Keep the camera steady and close enough to see details</li>
                    <li>• Capture multiple angles if pest is not clearly visible</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analysis Results Section */}
          <div>
            <Card className="shadow-lg h-fit">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bug className="h-6 w-6 text-red-600 mr-2" />
                  Analysis Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                {!analysisResult && !isLoading && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Bug className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-muted-foreground">
                      Submit an image to get AI-powered pest detection results
                    </p>
                  </div>
                )}

                {isLoading && (
                  <div className="text-center py-12">
                    <Loader2 className="h-12 w-12 text-red-600 mx-auto mb-4 animate-spin" />
                    <p className="text-foreground font-medium mb-2">Analyzing Image...</p>
                    <p className="text-sm text-muted-foreground">
                      Our AI is examining your image for pest identification
                    </p>
                  </div>
                )}

                {analysisResult && (
                  <div className="space-y-6">
                    {/* Detection Summary */}
                    <div className="text-center p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 rounded-lg">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bug className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {analysisResult.pest} Detected
                      </h3>
                      <p className="text-lg text-red-600 font-semibold mb-2">
                        {analysisResult.confidence}% Confidence
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(analysisResult.severity)}`}>
                        {analysisResult.severity} Severity
                      </span>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                        Description
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {analysisResult.description}
                      </p>
                    </div>

                    {/* Treatment */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Recommended Treatment
                      </h4>
                      <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4">
                        <p className="text-green-800 dark:text-green-200 leading-relaxed">
                          {analysisResult.treatment}
                        </p>
                      </div>
                    </div>

                    {/* Prevention */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        Prevention Tips
                      </h4>
                      <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                        <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                          {analysisResult.prevention}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button
                        onClick={resetDetection}
                        variant="outline"
                        className="flex-1"
                      >
                        Analyze Another Image
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">High Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                Our AI model identifies 95%+ common crop pests with high precision
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expert Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Get treatment recommendations from agricultural experts
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bug className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Multiple Pests</h3>
              <p className="text-sm text-muted-foreground">
                Detect aphids, whiteflies, spider mites, and 50+ other pests
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PestDetectionPage;