import React from "react";
import Link from "next/link";
import HowItWorksSection from "@/components/how-it-works";
import Instructors from "@/components/instructors-box";

const AboutUs = () => {
  const statistics = [
    {
      number: "50",
      label: "Amazing Course",
    },
    {
      number: "10K",
      label: "Student",
    },
    {
      number: "80",
      label: "Expert Instructors",
    },
    {
      number: "200",
      label: "Job Connections",
    },
  ];

  return (
    <div className="bg-[#040404] min-h-screen font-syne">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ minHeight: "calc(100vh)" }}
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6630C6]/30 from-0% via-[#6630C6]/10 via-20% to-transparent to-100%"></div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center w-full">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3 space-y-8">
              {/* Courses Tag */}
              <div className="inline-flex items-center gap-2 bg-[#6630C6]/20 border border-[#6630C6]/40 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#6630C6] rounded-full"></div>
                <span className="text-white text-sm font-medium">About us</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-5xl lg:text-5xl font-bold text-white leading-tight">
              Relearn empowers your growth-{" "}
                <span className="text-[#6630C6]">anytime, anywhere.</span>
              </h2>

              {/* Breadcrumbs */}
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="px-4 py-2 bg-[#1a1a1a] text-white rounded-full text-sm font-medium hover:bg-[#2a2a2a] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/courses"
                  className="px-4 py-2 bg-[#6630C6] text-white rounded-full text-sm font-medium"
                >
                  About Us
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

      {/* About Us Mission Section */}
      <section className="py-20 bg-[#040404]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="space-y-16 text-center">
            {/* ABOUT US Tag */}
            <div className="inline-flex items-center gap-2 border border-[#A066FF] rounded-full px-4 py-2 bg-[#1A0A33]">
              <div className="w-2 h-2 bg-[#A066FF] rounded-full" />
              <span className="text-white text-sm font-medium">ABOUT US</span>
            </div>

            {/* Mission Statement */}
            <div className="space-y-6 max-w-6xl mx-auto text-center">
              <h3 className="text-4xl lg:text-4xl font-bold text-white leading-tight">
                At Relearn, our mission is to make learning new skills easy,
                fast, and accessible.
                <span className="text-[#AAAAAA]">
                  We believe digital education should be flexible and fit into
                  your busy life. Whether you're advancing your career, starting
                  a new one, or expanding your knowledge, Relearn is here to
                  help you reach your goals.
                </span>
              </h3>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                    {stat.number}
                    <span className="text-[#A066FF]">+</span>
                  </div>
                  <div className="text-lg text-[#CCCCCC]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <div>
        <HowItWorksSection />
      </div>

      {/* Instructors boxes */}
      <div>
        <Instructors />
      </div>
    </div>
  );
};

export default AboutUs;
