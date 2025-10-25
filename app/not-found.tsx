"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="bg-[#040404] min-h-screen font-syne">
      {/* Hero Section */}
      <section className="relative overflow-hidden flex items-center" style={{ minHeight: 'calc(100vh)' }}>
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6630C6]/30 from-0% via-[#6630C6]/10 via-20% to-transparent to-100%"></div>
        
        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center w-full">
            {/* Left Content - Error Message */}
            <div className="lg:col-span-3 space-y-8">
              {/* 404 Display */}
              <div className="text-8xl lg:text-9xl font-bold">
                <span className="text-white">4</span>
                <span className="text-[#6630C6]">0</span>
                <span className="text-white">4</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Page Not Found!
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg leading-relaxed">
                Oops! The page you're looking for can't be found. Let's get you back on track.
              </p>

              {/* Go Back To Home Button */}
              <div className="pt-4">
                <Link href="/">
                  <Button className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-full py-4 px-8 text-white font-medium flex items-center gap-3 hover:from-[#6630C6]/90 hover:to-[#330F95]/90 transition-all">
                    Go Back To Home
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Visual - Replicate Home Page */}
            <div className="lg:col-span-2 relative">
              <div className="relative w-full h-[500px] lg:h-[600px] flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Main Image - Replicate Home Page */}
                  <Image
                    src="/Image.png"
                    alt="Main Image"
                    width={486}
                    height={608}
                    className="relative z-0"
                  />

                  {/* Number.png - First Circular Element */}
                  <Image
                    src="/Number_3.png"
                    alt="Cloud is Down!"
                    width={136}
                    height={136}
                    className="absolute top-[50%] left-0 transform -translate-x-1/2 z-10"
                  />

                  {/* Number2.png - Second Circular Element */}
                  <Image
                    src="/Number_4.png"
                    alt="Internet is Down!"
                    width={136}
                    height={136}
                    className="absolute top-[30%] right-0 transform translate-x-1/2 z-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
