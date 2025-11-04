"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white overflow-hidden">
      {/* Top Section - 5 Columns */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
                <span className="bg-[#6630C6] text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pages" className="text-gray-300 hover:text-white transition-colors">
                  Pages
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Features */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Features</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/online-courses" className="text-gray-300 hover:text-white transition-colors">
                  Online Courses
                </Link>
              </li>
              <li>
                <Link href="/interactive-lessons" className="text-gray-300 hover:text-white transition-colors">
                  Interactive Lessons
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link href="/expert-instructors" className="text-gray-300 hover:text-white transition-colors">
                  Expert Instructors
                </Link>
                <span className="bg-[#6630C6] text-white text-xs px-2 py-1 rounded-full">
                  New
                </span>
              </li>
              <li>
                <Link href="/certification" className="text-gray-300 hover:text-white transition-colors">
                  Certification
                </Link>
              </li>
              <li>
                <Link href="/mobile-access" className="text-gray-300 hover:text-white transition-colors">
                  Mobile Friendly Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog / Articles
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-gray-300 hover:text-white transition-colors">
                  Help Center (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/learning-guides" className="text-gray-300 hover:text-white transition-colors">
                  Learning Guides
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Social Media</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/facebook" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="/twitter" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Twitter className="w-4 h-4" />
                  X Twitter
                </Link>
              </li>
              <li>
                <Link href="/whatsapp" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link href="/telegram" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Telegram
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p>@hellodomainsite.com</p>
              <p>KLLG St, No.99, Pku City, ID 28289</p>
              <p>0761-8523-398</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 relative">
        {/* Logo Watermark Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[#6630C6] text-8xl font-bold opacity-10 select-none">
            RELEARN®
          </div>
        </div>

        {/* Bottom Content */}
        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright Text */}
            <div className="text-gray-400 text-sm">
              © Copyright 2025. All Rights Reserved Rometheme Studio
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
