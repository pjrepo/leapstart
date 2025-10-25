"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const FAQsPage = () => {
  return (
    <div className="bg-[#040404] min-h-screen font-syne">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center" style={{ minHeight: 'calc(100vh)' }}>
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6630C6]/30 from-0% via-[#6630C6]/10 via-20% to-transparent to-100%"></div>
        
        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center w-full">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3 space-y-8">
              {/* About Us Tag */}
              <div className="inline-flex items-center gap-2 bg-[#6630C6]/20 border border-[#6630C6]/40 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#6630C6] rounded-full"></div>
                <span className="text-white text-sm font-medium">FAQs</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Get quick answers to most common {" "}
                <span className="text-[#6630C6]">questions</span>{" "}
              </h1>

              {/* Breadcrumbs */}
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="px-4 py-2 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-[#2a2a2a] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-[#6630C6] text-white rounded-full text-sm font-medium"
                >
                  FAQs
                </Link>
              </div>
            </div>

            {/* Right Visual - 40% */}
            <div className="lg:col-span-2 relative">
              <div className="relative w-full h-[500px] lg:h-[600px]">
                {/* L-shaped visual matching the design */}
                <div className="absolute inset-0">
                  {/* Create the L-shape using CSS with proper rounded corners */}
                  <div className="absolute bottom-0 right-0 w-full h-full">
                    <svg 
                      className="w-full h-full" 
                      viewBox="0 0 400 500" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M0 0 L0 350 Q0 400 50 400 L350 400 Q400 400 400 350 L400 0 Q400 0 350 0 L50 0 Q0 0 0 50 Z" 
                        fill="#D1D5DB" 
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Ready to Transform CTA Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* World Map Background */}
        <div className="absolute inset-0 bg-black">
          {/* World Map Visual */}
          <div className="absolute inset-0 opacity-20">
            <svg 
              className="w-full h-full" 
              viewBox="0 0 1200 600" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified world map shapes */}
              <path 
                d="M200 200 L300 180 L350 220 L320 280 L250 300 L200 250 Z" 
                fill="#6630C6" 
                opacity="0.3"
              />
              <path 
                d="M400 150 L500 140 L550 180 L520 240 L450 250 L400 200 Z" 
                fill="#6630C6" 
                opacity="0.3"
              />
              <path 
                d="M600 200 L700 180 L750 220 L720 280 L650 300 L600 250 Z" 
                fill="#6630C6" 
                opacity="0.3"
              />
              <path 
                d="M800 150 L900 140 L950 180 L920 240 L850 250 L800 200 Z" 
                fill="#6630C6" 
                opacity="0.3"
              />
              <path 
                d="M1000 200 L1100 180 L1150 220 L1120 280 L1050 300 L1000 250 Z" 
                fill="#6630C6" 
                opacity="0.3"
              />
              
              {/* Country Labels */}
              <text x="250" y="240" className="text-xs fill-gray-300 opacity-60" fontSize="12">Canada</text>
              <text x="450" y="190" className="text-xs fill-gray-300 opacity-60" fontSize="12">USA</text>
              <text x="650" y="240" className="text-xs fill-gray-300 opacity-60" fontSize="12">Brasil</text>
              <text x="850" y="190" className="text-xs fill-gray-300 opacity-60" fontSize="12">Qatar</text>
              <text x="1050" y="240" className="text-xs fill-gray-300 opacity-60" fontSize="12">China</text>
              <text x="950" y="320" className="text-xs fill-gray-300 opacity-60" fontSize="12">Singapore</text>
            </svg>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* GET STARTED Tag */}
          <div className="inline-flex items-center gap-2 border border-[#6630C6]/40 rounded-full px-4 py-2 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-[#6630C6] rounded-full"></div>
            <span className="text-white text-sm font-medium">GET STARTED</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Still have a {" "}
            <span className="text-[#6630C6]">question?</span>{" "}
          </h1>

          {/* Supporting Text */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            We're here to help you. If you have any questions or need more information, feel free to reach out!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <Button
              className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-full border-none text-white px-8 py-4 text-lg font-medium hover:from-[#6630C6]/90 hover:to-[#330F95]/90 transition-all flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
