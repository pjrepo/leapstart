"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, ExternalLink } from "lucide-react";

const CoursesPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("UI/UX DESIGN");

  const courseCategories = [
    "UI/UX DESIGN",
    "GRAPHIC DESIGN",
    "WEB DEVELOPMENT",
    "DATA SCIENCE",
    "MOBILE DEVELOPMENT",
  ];

  const courses = [
    {
      id: 1,
      category: "UI/UX DESIGN",
      title: "User Experience Design Fundamentals",
      instructor: "Sarah Mitchell",
      sessions: 16,
      currentPrice: 19.0,
      originalPrice: 26.0,
      isActive: true,
    },
    {
      id: 2,
      category: "GRAPHIC DESIGN",
      title: "Introduction to Graphic Design",
      instructor: "Liam Garcia",
      sessions: 12,
      currentPrice: 30.0,
      originalPrice: 35.0,
      isActive: false,
    },
    {
      id: 3,
      category: "WEB DEVELOPMENT",
      title: "Frontend Web Development Bootcamp",
      instructor: "Emma Wilson",
      sessions: 20,
      currentPrice: 30.0,
      originalPrice: 45.0,
      isActive: false,
    },
    {
      id: 4,
      category: "DATA SCIENCE",
      title: "Beginner's Guide to Data Analysis with SQL",
      instructor: "Noah Robinson",
      sessions: 18,
      currentPrice: 50.0,
      originalPrice: 70.0,
      isActive: false,
    },
    {
      id: 5,
      category: "MOBILE DEVELOPMENT",
      title: "Apple App Development Basics",
      instructor: "Olivia Martinez",
      sessions: 14,
      currentPrice: 40.0,
      originalPrice: 55.0,
      isActive: false,
    },
    {
      id: 6,
      category: "GRAPHIC DESIGN",
      title: "Graphic Design Essentials: Craft Visual Stories",
      instructor: "Daniel Rivera",
      sessions: 8,
      currentPrice: 25.0,
      originalPrice: 35.0,
      isActive: false,
    },
    {
      id: 7,
      category: "UI/UX DESIGN",
      title: "Advanced User Interface Design",
      instructor: "Laura Bennett",
      sessions: 9,
      currentPrice: 40.0,
      originalPrice: 65.0,
      isActive: false,
    },
    {
      id: 8,
      category: "DATA SCIENCE",
      title: "Data Science for Beginners: Turn Data Into Decisions",
      instructor: "Kevin Liu",
      sessions: 12,
      currentPrice: 55.0,
      originalPrice: 65.0,
      isActive: false,
    },
    {
      id: 9,
      category: "DIGITAL MARKETING",
      title: "SEO & Content Strategy Masterclass",
      instructor: "Rachel Adams",
      sessions: 11,
      currentPrice: 35.0,
      originalPrice: 55.0,
      isActive: false,
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
        <div className="absolute"></div>

        <div className="container mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center w-full">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3 space-y-40">
              {/* Block A: Tag + Heading */}
              <div className="space-y-4">
                {/* Courses Tag */}
                <div className="inline-flex items-center gap-2 border border-[#6630C6]/80 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-[#6630C6] rounded-full"></div>
                  <span className="text-white text-sm font-medium">
                    COURSES
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Find the right course to level up{" "}
                  <span className="text-[#6630C6]">your skills.</span>
                </h1>
              </div>

              {/* Block B: Navigation Toggle */}
              <div className="w-[200px] h-14 bg-gray/100 rounded-full relative flex items-center shadow-inner border border-gray-800">
                {/* Animated/Pill Selector */}
                <div className="absolute top-1 bottom-1 right-1 w-[calc(50%-0.25rem)] bg-gradient-to-r from-[#6630C6] to-[#6B21A8] rounded-full transition-all duration-300 ease 1s pointer-events-none" />
                {/* Home (inactive, animated hover) */}
                <Link
                  href="/"
                  className={`
                    group
                    relative 
                    z-10 
                    flex-1 
                    h-full 
                    flex 
                    items-center 
                    justify-center 
                    text-white 
                    font-medium 
                    text-base 
                    rounded-full 
                    transition-colors 
                    select-none
                    duration-300
                    ease 1s
                    hover:bg-gradient-to-r hover:from-[#7B34E6] hover:to-[#A864F0]
                    hover:shadow-[0_0_10px_2px_rgba(123,52,230,0.22),0_0_20px_4px_rgba(168,100,240,0.12)]
                    hover:text-white
                  `}
                  style={{ textAlign: "center" }}
                >
                  <span
                    className="transition-colors transition-shadow duration-300 ease 1s group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(123,52,230,0.38)]"
                    style={{ filter: "none" }}
                  >
                    Home
                  </span>
                </Link>
                {/* Courses (active, animated hover-on-active) */}
                <Link
                  href="/courses"
                  className={`
                    group
                    relative 
                    z-10 
                    flex-1 
                    h-full 
                    flex 
                    items-center 
                    justify-center 
                    text-white 
                    font-medium 
                    text-base 
                    rounded-full 
                    transition-colors
                    select-none
                    duration-300
                    ease 1s
                    // Background only revealed by underlying selector, but we add hover effect here
                    hover:bg-gradient-to-r 
                    hover:from-[#6730ff]
                    hover:to-[#4e129e]
                    hover:shadow-[0_0_14px_3px_rgba(123,52,230,0.28),0_0_20px_6px_rgba(123,52,230,0.18)]
                  `}
                  style={{ textAlign: "center" }}
                  tabIndex={-1}
                  aria-current="page"
                >
                  <span
                    className="transition-colors transition-shadow duration-300 ease 1s group-hover:drop-shadow-[0_0_8px_rgba(123,52,230,0.46)]"
                    style={{ filter: "none" }}
                  >
                    Courses
                  </span>
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

      {/* Courses Exploration Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6630C6]/10 from-0% via-transparent to-transparent to-100%"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3 space-y-6">
              {/* Our Courses Tag */}
              <div className="inline-flex items-center gap-2 border border-[#6630C6]/40 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#6630C6] rounded-full"></div>
                <span className="text-white text-sm font-medium">
                  OUR COURSES
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Explore our Best <span className="text-[#6630C6]">Courses</span>
              </h2>
            </div>

            {/* Right Content - Search Bar - 40% */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="flex items-center bg-[#1A1A1A] border border-[#6630C6]/40 rounded-full px-6 py-5 backdrop-blur-sm">
                  <input
                    type="text"
                    placeholder="Search course..."
                    className="flex-1 bg-transparent text-white placeholder-gray-700 outline-none text-lg"
                  />
                  <Button className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-full border-none text-white px-6 py-3 ml-4 hover:from-[#6630C6]/90 hover:to-[#330F95]/90 transition-all">
                    <span className="mr-2">Search Course</span>
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Category Filters */}
      <section className="relative py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {courseCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-bold text-sm uppercase transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-gradient-to-br from-[#6630C6] to-[#330F95] text-white"
                    : "bg-[#1A1A1A] border border-gray-600 text-white hover:border-gray-500 hover:bg-[#2A2A2A] hover:shadow-[0_0_16px_4px_rgba(102,48,198,0.7)]"
                }`}
                style={{
                  transitionProperty: "box-shadow, background, border, color",
                  WebkitTransitionProperty:
                    "box-shadow, background, border, color",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="relative py-16">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6630C6]/5 from-0% via-transparent to-transparent to-100%"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`relative bg-[#1A1A1A] border rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  course.isActive
                    ? "border-[#6630C6]/60 shadow-lg shadow-[#6630C6]/20"
                    : "border-gray-600 hover:border-gray-500"
                }`}
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-300 rounded-t-2xl"></div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  {/* Category Tag */}
                  <div className="text-gray-400 text-xs font-medium uppercase tracking-wide">
                    {course.category}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-white text-lg font-bold leading-tight">
                    {course.title}
                  </h3>

                  {/* Instructor & Sessions */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span>{course.instructor}</span>
                    <span>•</span>
                    <span>{course.sessions} Sessions</span>
                  </div>

                  {/* Pricing & Button */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-lg">
                        ${course.currentPrice.toFixed(2)}
                      </span>
                      <span className="text-gray-400 text-sm line-through">
                        ${course.originalPrice.toFixed(2)}
                      </span>
                    </div>

                    <Link href={`/courses/${course.id}`}>
                      <Button className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-full border-none text-white px-4 py-2 text-sm font-medium hover:from-[#6630C6]/90 hover:to-[#330F95]/90 transition-all">
                        Join Course
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
              <text
                x="250"
                y="240"
                className="text-xs fill-gray-300 opacity-60"
                fontSize="12"
              >
                Canada
              </text>
              <text
                x="450"
                y="190"
                className="text-xs fill-gray-300 opacity-60"
                fontSize="12"
              >
                USA
              </text>
              <text
                x="650"
                y="240"
                className="text-xs fill-gray-300 opacity-60"
                fontSize="12"
              >
                Brasil
              </text>
              <text
                x="850"
                y="190"
                className="text-xs fill-gray-300 opacity-60"
                fontSize="12"
              >
                Qatar
              </text>
              <text
                x="1050"
                y="240"
                className="text-xs fill-gray-300 opacity-60"
                fontSize="12"
              >
                China
              </text>
              <text
                x="950"
                y="320"
                className="text-xs fill-gray-300 opacity-60"
                fontSize="12"
              >
                Singapore
              </text>
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
            <span className="text-[#6630C6]">Your Skills</span> into a Career?
          </h1>

          {/* Supporting Text */}
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Join thousands of learners who are building better futures with
            flexible learning. Take your first step today and unlock real growth
            through knowledge.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <Button className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-full border-none text-white px-8 py-4 text-lg font-medium hover:from-[#6630C6]/90 hover:to-[#330F95]/90 transition-all flex items-center gap-2">
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

export default CoursesPage;
