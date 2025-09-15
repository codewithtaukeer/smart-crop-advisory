import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useLanguage } from "../contexts/LanguageContext";
import { MessageSquare, Send, Bot, User } from "lucide-react";
import { mockData } from "../data/mockData";

const ChatbotSection = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Hello! I'm your Smart Crop Advisory assistant. I can help you with crop diseases, irrigation, fertilizers, and pest control. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes("disease") || lowerMessage.includes("बीमारी") || lowerMessage.includes("ਬਿਮਾਰੀ")) {
      return mockData.chatbotResponses["crop disease"];
    } else if (lowerMessage.includes("irrigation") || lowerMessage.includes("सिंचाई") || lowerMessage.includes("ਸਿੰਚਾਈ")) {
      return mockData.chatbotResponses["irrigation"];
    } else if (lowerMessage.includes("fertilizer") || lowerMessage.includes("खाद") || lowerMessage.includes("ਖਾਦ")) {
      return mockData.chatbotResponses["fertilizer"];
    } else if (lowerMessage.includes("pest") || lowerMessage.includes("कीट") || lowerMessage.includes("ਕੀਟ")) {
      return mockData.chatbotResponses["pest control"];
    } else {
      return mockData.chatbotResponses["default"];
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      message: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        message: getResponse(inputMessage),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "How to treat wheat rust disease?",
    "Best irrigation schedule for rice?",
    "Organic fertilizers for vegetables?",
    "Pest control for cotton crops?"
  ];

  return (
    <section id="chatbot" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("aiChatbotTitle")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get instant answers to your farming questions with our AI-powered assistant
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-2">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-t-lg">
              <CardTitle className="flex items-center text-xl">
                <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                Smart Crop Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-start max-w-[80%] ${message.type === "user" ? "flex-row-reverse" : "flex-row"}`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === "user" 
                          ? "bg-green-500 ml-2" 
                          : "bg-blue-500 mr-2"
                      }`}>
                        {message.type === "user" ? (
                          <User className="h-4 w-4 text-white" />
                        ) : (
                          <Bot className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          message.type === "user"
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 dark:bg-gray-800 text-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === "user" ? "text-green-100" : "text-muted-foreground"
                        }`}>
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 mr-2 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              <div className="px-4 py-2 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setInputMessage(question)}
                      className="text-xs"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Ask me about crops, diseases, irrigation, fertilizers..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="flex-1"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;