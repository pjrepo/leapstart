"use client";
import { ArrowUpRight } from "lucide-react";

export default function LearnersSayingSection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 px-6 items-stretch">

        {/* LEFT SECTION */}
        <div className="relative flex items-center justify-center h-full">
          <div className="relative w-full max-w-md">
            {/* Grey box shape */}
            <div className="w-full h-[400px] bg-[#C6C6C6] rounded-[40px]"></div>

             {/* Text block overlay (exact layout as screenshot) */}
             <div className="absolute top-0 left-0">
               <div className="bg-black rounded-br-[40px] p-5 md:p-4 w-[100%]">
                <h2 className="text-[22px] md:text-[22px] font-semibold leading-tight tracking-tight">
                  <span className="block text-white">What Our</span>
                  <span className="block text-white">Learners Are</span>
                  <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] flex items-center gap-2">
                    Saying
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#4F1BAD] to-[#9867F0]">
                      <ArrowUpRight className="h-4 w-4 text-white" />
                    </span>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (Testimonials remain unchanged) */}
        <div className="flex flex-col gap-4 h-full justify-center min-h-[350px]">
          <div className="bg-[#0f0f0f] rounded-[20px] p-4 border border-[#1f1f1f]">
            <p className="text-sm text-gray-300">
              “Instructors are engaging, and I love that I can learn anytime I want.”
            </p>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-8 w-8 bg-gray-500 rounded-full" />
              <div>
                <div className="font-semibold text-sm">Sophia Thompson</div>
                <div className="text-xs text-gray-400">UI/UX Designer</div>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] rounded-[20px] p-4 shadow-lg">
            <div className="flex gap-1 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-300 text-sm">★</span>
                ))}
            </div>
            <p className="text-sm text-white mb-3">
              “I never thought online learning could feel this personal. Relearn helped me switch careers with confidence!”
            </p>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
              <div>
                <div className="font-semibold text-sm">Liam Garcia</div>
                <div className="text-xs text-gray-200">
                  Junior Front-End Developer
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0f0f0f] rounded-[20px] p-4 border border-[#1f1f1f]">
            <div className="flex gap-1 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-300 text-sm">★</span>
                ))}
            </div>
            <p className="text-sm text-gray-300">
              “I used Relearn during my final semester. The project-based learning helped me land my first internship!”
            </p>
            <div className="flex items-center gap-3 mt-3">
              <div className="h-8 w-8 bg-gray-500 rounded-full" />
              <div>
                <div className="font-semibold text-sm">Emma Wilson</div>
                <div className="text-xs text-gray-400">Student</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
