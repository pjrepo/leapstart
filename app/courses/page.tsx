"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";

const CoursesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activePath, setActivePath] = React.useState("/courses");
  const [activeCategory, setActiveCategory] = React.useState("UI/UX DESIGN");

  const navItems = [
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  const courseCategories = [
    "UI/UX DESIGN",
    "GRAPHIC DESIGN", 
    "WEB DEVELOPMENT",
    "DATA SCIENCE",
    "MOBILE DEVELOPMENT"
  ];

  const courses = [
    {
      id: 1,
      category: "UI/UX DESIGN",
      title: "User Experience Design Fundamentals",
      instructor: "Sarah Mitchell",
      sessions: 16,
      currentPrice: 19.00,
      originalPrice: 26.00,
      isActive: true
    },
    {
      id: 2,
      category: "GRAPHIC DESIGN",
      title: "Introduction to Graphic Design",
      instructor: "Liam Garcia",
      sessions: 12,
      currentPrice: 30.00,
      originalPrice: 35.00,
      isActive: false
    },
    {
      id: 3,
      category: "WEB DEVELOPMENT",
      title: "Frontend Web Development Bootcamp",
      instructor: "Emma Wilson",
      sessions: 20,
      currentPrice: 30.00,
      originalPrice: 45.00,
      isActive: false
    },
    {
      id: 4,
      category: "DATA SCIENCE",
      title: "Beginner's Guide to Data Analysis with SQL",
      instructor: "Noah Robinson",
      sessions: 18,
      currentPrice: 50.00,
      originalPrice: 70.00,
      isActive: false
    },
    {
      id: 5,
      category: "MOBILE DEVELOPMENT",
      title: "Apple App Development Basics",
      instructor: "Olivia Martinez",
      sessions: 14,
      currentPrice: 40.00,
      originalPrice: 55.00,
      isActive: false
    },
    {
      id: 6,
      category: "GRAPHIC DESIGN",
      title: "Graphic Design Essentials: Craft Visual Stories",
      instructor: "Daniel Rivera",
      sessions: 8,
      currentPrice: 25.00,
      originalPrice: 35.00,
      isActive: false
    },
    {
      id: 7,
      category: "UI/UX DESIGN",
      title: "Advanced User Interface Design",
      instructor: "Laura Bennett",
      sessions: 9,
      currentPrice: 40.00,
      originalPrice: 65.00,
      isActive: false
    },
    {
      id: 8,
      category: "DATA SCIENCE",
      title: "Data Science for Beginners: Turn Data Into Decisions",
      instructor: "Kevin Liu",
      sessions: 12,
      currentPrice: 55.00,
      originalPrice: 65.00,
      isActive: false
    },
    {
      id: 9,
      category: "DIGITAL MARKETING",
      title: "SEO & Content Strategy Masterclass",
      instructor: "Rachel Adams",
      sessions: 11,
      currentPrice: 35.00,
      originalPrice: 55.00,
      isActive: false
    }
  ];

  return (
    <div className="bg-[#040404] min-h-screen font-syne">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-0">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/Logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setActivePath(item.path)}
                    className={`font-medium text-lg relative ${
                      activePath === item.path
                        ? "text-[#FBFBFB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6630C6] after:to-[#330F95]"
                        : "text-[#FBFBFB]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Get Started Button */}
              <div className="flex items-center">
                <Button
                  size="sm"
                  className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-[40px] border-none text-white py-4 px-2"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#6630C6]/30 from-0% via-[#6630C6]/10 via-20% to-transparent to-100%"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[600px]">
            {/* Left Content - 60% */}
            <div className="lg:col-span-3 space-y-8">
              {/* Courses Tag */}
              <div className="inline-flex items-center gap-2 bg-[#6630C6]/20 border border-[#6630C6]/40 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#6630C6] rounded-full"></div>
                <span className="text-white text-sm font-medium">COURSES</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Find the right course to level up{" "}
                <span className="text-[#6630C6]">your skills.</span>
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
                  href="/courses"
                  className="px-4 py-2 bg-[#6630C6] text-white rounded-full text-sm font-medium"
                >
                  Courses
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
                <span className="text-white text-sm font-medium">OUR COURSES</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Explore our Best{" "}
                <span className="text-[#6630C6]">Courses</span>
              </h2>
            </div>

            {/* Right Content - Search Bar - 40% */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="flex items-center bg-[#1A1A1A] border border-[#6630C6]/40 rounded-full px-6 py-4 backdrop-blur-sm">
                  <input
                    type="text"
                    placeholder="Search course..."
                    className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                  />
                  <Button
                    className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-full border-none text-white px-6 py-3 ml-4 hover:from-[#6630C6]/90 hover:to-[#330F95]/90 transition-all"
                  >
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
                    : "bg-[#1A1A1A] border border-gray-600 text-white hover:border-gray-500 hover:bg-[#2A2A2A]"
                }`}
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
                    
                    <Button
                      className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-full border-none text-white px-4 py-2 text-sm font-medium hover:from-[#6630C6]/90 hover:to-[#330F95]/90 transition-all"
                    >
                      Join Course
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;