import React from "react";
import ContactSection from "../components/ContactSection";
import { Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-cyan-100 dark:bg-cyan-900 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-10 w-10 text-cyan-600 dark:text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need support? We're here to help you succeed in your farming journey
          </p>
        </div>

        {/* Use the existing ContactSection component */}
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;