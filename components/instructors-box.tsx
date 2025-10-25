"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Instructors() {
  const instructors = [
    {
      name: "Sarah Mitchell",
      role: "Senior UX Designer"
    },
    {
      name: "Liam Garcia",
      role: "Graphic Designer"
    },
    {
      name: "Emma Wilson",
      role: "Full Stack Web Developer"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Side - Header */}
          <div className="lg:col-span-2 space-y-6">
            {/* OUR INSTRUCTOR Tag */}
            <div 
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[#1A0A33] font-inter font-normal text-base border border-transparent"
              style={{
                backgroundImage: 'linear-gradient(#1A0A33, #1A0A33), linear-gradient(135deg, #6630C6 0%, #330F95 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                border: '1px solid transparent'
              }}
            >
              <div className="w-2 h-2 bg-[#A066FF] rounded-full" />
              <span className="text-white">OUR INSTRUCTOR</span>
            </div>

            {/* Main Heading */}
            <h3 className="text-4xl font-bold leading-tight">
              <span className="text-white">Meet Our </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6630C6] to-[#330F95]">Instructors</span>
            </h3>
          </div>

          {/* Right Side - Description */}
          <div className="lg:col-span-3 flex items-center">
            <p className="text-[#CCCCCC] leading-relaxed">
              Learn from experienced professionals who are passionate about teaching and committed to helping you grow.
            </p>
          </div>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {instructors.map((instructor, index) => (
            <div key={index} className="relative">
              {/* Instructor Card */}
              <div className="rounded-[40px] overflow-hidden"> 
                {/* C4C4C4 Image Placeholder */}
                <div className="w-full h-80 bg-[#C4C4C4] rounded-[40px] mb-4">
                </div>

                {/* Name and Role Section */}
                <div 
                  className="px-6 py-4 rounded-[40px] w-3/4"
                  style={{
                    background: 'linear-gradient(135deg, #6630C6 0%, #330F95 100%)'
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-1 text-left">{instructor.name}</h3>
                  <p className="text-white text-sm text-left">{instructor.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Instructors Button */}
        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-white text-white bg-transparent hover:bg-white hover:text-black rounded-[40px] px-8 py-4 text-base font-medium flex items-center gap-2 group"
          >
            <span className="text-white group-hover:text-black transition-colors">View All Instructors</span>
            <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </Button>
        </div>
      </div>
    </section>
  );
}
