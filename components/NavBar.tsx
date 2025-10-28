"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about-us" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040404]">
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            {/* <Image
              src="/Logo.png"
              alt="Logo"
              width={120}
              height={40}
              className="group-hover:scale-105 transition-transform"
            /> */}
            <h3 className="bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] bg-clip-text text-transparent font-semibold text-4xl">
              Leapstart
            </h3>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-medium text-lg relative ${
                    pathname === item.path
                      ? "text-[#FBFBFB] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#6630C6] after:to-[#330F95]"
                      : "text-[#FBFBFB]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Get Started Button */}
            {/* <div className="flex items-center">
              <Button
                size="sm"
                className="bg-gradient-to-br from-[#6630C6] to-[#330F95] rounded-[40px] border-none text-white py-4 px-2"
              >
                Get Started
              </Button>
            </div> */}
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
  );
};

export default NavBar;
