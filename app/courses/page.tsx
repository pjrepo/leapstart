"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const CoursesPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activePath, setActivePath] = React.useState("/courses");

  const navItems = [
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
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
    </div>
  );
};

export default CoursesPage;