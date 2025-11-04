"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function GetStarted() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Map.png"
          alt="World Map"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 md:px-6 text-center space-y-8">
        {/* GET STARTED Tag */}
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#1A0A33] border border-transparent"
          style={{
            backgroundImage:
              "linear-gradient(#1A0A33, #1A0A33), linear-gradient(135deg, #6630C6 0%, #330F95 100%)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
            border: "1px solid transparent",
          }}
        >
          <div className="w-2 h-2 bg-[#A066FF] rounded-full" />
          <span className="text-white text-sm font-medium">GET STARTED</span>
        </div>

        {/* Main Heading */}
        <h3 className="text-[48px] font-bold text-white leading-tight">
          Ready to Transform <span className="text-[#A066FF]">Your Skills</span>{" "}
          into a Career?
        </h3>

        {/* Description */}
        <p className="text-[#CCCCCC] text-lg max-w-3xl mx-auto leading-relaxed">
          Join thousands of learners who are building better futures with
          flexible learning. Take your first step today and unlock real growth
          through knowledge.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Start Learning Now Button */}
          <Button
            className="text-white rounded-[40px] px-8 py-4 text-base font-medium flex items-center gap-2 group"
            style={{
              background: "linear-gradient(135deg, #6630C6 0%, #330F95 100%)",
            }}
          >
            Start Learning Now
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>

          {/* View Packages Button */}
          <Button
            variant="outline"
            className="!border-white !text-white !bg-transparent hover:!bg-transparent rounded-[40px] px-8 py-4 text-base font-medium flex items-center gap-2"
          >
            <span className="text-white">
              View Packages
            </span>
            <ArrowUpRight className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
}
