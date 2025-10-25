"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const ContactPage = () => {
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
                <span className="text-white text-sm font-medium">ABOUT US</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Have questions or need{" "}
                <span className="text-[#6630C6]">support?</span>{" "}
                Reach out to us anytime.
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
                  Contact Us
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

      {/* Main Contact Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Contact Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Heading and Description */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Contact{" "}
                  <span className="text-[#6630C6]">Us</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Have questions, suggestions, or need help? Reach out and our team will get back to you as soon as possible.
                </p>
              </div>

              {/* Contact Information Blocks */}
              <div className="space-y-6">
                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#6630C6] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Office Location</h3>
                    <p className="text-gray-300">KLLG St, No.99, Pku City, ID 28289</p>
                  </div>
                </div>

                {/* Telephone Number */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#6630C6] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Telephone Number</h3>
                    <p className="text-gray-300">+1 (212) 555-1212</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#6630C6] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Email Address</h3>
                    <p className="text-gray-300">hello@domainsite.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#1A1A1A] border border-gray-600 rounded-2xl p-8">
                {/* Form Heading */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-white font-bold text-2xl">Send Us a Message</h3>
                  <p className="text-gray-300">Let us know how we can help by filling out the form below.</p>
                </div>

                {/* Contact Form */}
                <form className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-[#2A2A2A] border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:border-[#6630C6] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="johndoe@gmail.com"
                        className="w-full bg-[#2A2A2A] border border-gray-600 rounded-full px-6 py-4 text-white placeholder-gray-400 focus:border-[#6630C6] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your subject"
                      className="w-full bg-[#2A2A2A] border border-gray-600 rounded-full px-6 py-4 pr-12 text-white placeholder-gray-400 focus:border-[#6630C6] focus:outline-none transition-colors"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <textarea
                      placeholder="Example Text"
                      rows={6}
                      className="w-full bg-[#2A2A2A] border border-gray-600 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-[#6630C6] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-full py-4 px-8 text-white font-medium flex items-center justify-center gap-3 hover:from-[#6630C6]/90 hover:to-[#330F95]/90 transition-all"
                    >
                      Send Message
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                    </button>
                  </div>
                </form>
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
            Ready to Transform{" "}
            <span className="text-[#6630C6]">Your Skills</span>{" "}
            into a Career?
          </h1>

          {/* Supporting Text */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Join thousands of learners who are building better futures with flexible learning. 
            Take your first step today and unlock real growth through knowledge.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <Button
              className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-full border-none text-white px-8 py-4 text-lg font-medium hover:from-[#6630C6]/90 hover:to-[#330F95]/90 transition-all flex items-center gap-2"
            >
              Start Learning Now
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* Secondary Button */}
            <Button
              variant="outline"
              className="bg-transparent border border-white/30 text-white rounded-full px-8 py-4 text-lg font-medium hover:bg-white/10 hover:border-white/50 transition-all flex items-center gap-2"
            >
              View Packages
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
