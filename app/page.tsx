"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import LogoCloud from "@/components/logo-cloud";
import WhyChooseUsSection from "@/components/why-choose-us";
import HowItWorksSection from "@/components/how-it-works";
import TestimonialsSection from "@/components/testimonials";
import FAQSection from "@/components/faq";
import Blogs from "@/components/blogs";
import GetStarted from "@/components/get-started";

export default function Home() {
  return (
    <div className="bg-[#040404] min-h-screen font-syne">
      {/* Hero Section */}
      <div className="pt-20 px-2 lg:px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            {/* Left Content */}
            <div className="flex-1 pl-0 pr-0">
              {/* E-LEARNING PLATFORM (Simplified) */}
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 border border-[#4F1BAD] rounded-full px-4 py-2">
                  <Image
                    src="/Ellipse-2.png"
                    alt="Ellipse"
                    width={10}
                    height={10}
                  />
                  <p className="font-inter font-normal text-base text-[#FBFBFB]">
                    E-LEARNING PLATFORM
                  </p>
                </div>
              </div>

              {/* Build Your Skills */}
              <h1 className="font-syne text-[#FBFBFB] text-4xl lg:text-6xl font-bold mb-4">
                Build Your Skills,
              </h1>

              {/* Anytime, Anywhere */}
              <h1 className="font-syne text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] bg-clip-text text-transparent">
                Anytime, Anywhere
              </h1>

              {/* Subtitle */}
              <h6 className="font-syne font-medium text-[#AAAAAA] text-lg lg:text-xl mb-8">
                Anytime access to skills that take you further
              </h6>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] rounded-[40px] text-white px-8 py-4 font-medium flex items-center gap-2">
                  Start Learning
                  <Image
                    src="/start-learning.png"
                    alt="Start Learning"
                    width={10}
                    height={10}
                  />
                </Button>
                <Button
                  variant="outline"
                  className="border-[#FBFBFB] text-[#040404] bg-[#FBFBFB] rounded-[40px] px-8 py-4 font-medium hover:bg-[#040404] hover:text-[#FBFBFB]"
                >
                  How it Works
                </Button>
              </div>
            </div>

            {/* Right Content - Images */}
            <div className="flex-1 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Image */}
                <Image
                  src="/Image.png"
                  alt="Main Image"
                  width={486}
                  height={608}
                  className="relative z-0"
                />

                {/* Number.png */}
                <Image
                  src="/Number.png"
                  alt="Number"
                  width={136}
                  height={136}
                  className="absolute top-[50%] left-0 transform -translate-x-1/2 z-10"
                />

                {/* Number2.png */}
                <Image
                  src="/Number2.png"
                  alt="Number 2"
                  width={136}
                  height={136}
                  className="absolute top-[30%] right-0 transform translate-x-1/2 z-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos Carousel Section */}
      <div className="text-center my-10">
        <p className="text-[#aaaaaa]">We are trusted by</p>
        <LogoCloud />
      </div>

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <div>
        <FAQSection />
      </div>

      {/* Blogs Section */}
      <div>
        <Blogs />
      </div>

      {/* Get Started Section */}
      <div>
        <GetStarted />
      </div>
    </div>
  );
}
