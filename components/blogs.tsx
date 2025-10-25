"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User2 } from "lucide-react";
import CallToAction from "@/components/call-to-action";

export default function Blogs() {
  const blogPosts = [
    {
      type: "large",
      author: "Sarah Johnson",
      date: "April 10, 2025",
      title: "5 Simple Ways to Stay Motivated While Learning Online",
      description:
        "Discover easy tips to keep your motivation high during your online learning journey, even when life gets busy.",
      tags: ["online learning", "motivation tips", "study habits"],
    },
    {
      type: "small",
      date: "April 10, 2025",
      title: "How to Choose the Right Online Course for Your Career Goals",
      description:
        "Learn how to select courses that match your ambitions and boost your career growth with smart decision-making.",
      tags: ["course selection", "skills growth"],
    },
    {
      type: "small",
      date: "April 10, 2025",
      title: "The Future of Remote Learning: Trends to Watch in 2025",
      description:
        "Stay ahead of the curve with the latest trends and technologies shaping the future of remote education.",
      tags: ["remote learning", "online study"],
    },
    {
      type: "small",
      date: "April 10, 2025",
      title: "Top Skills You Can Learn Online That Employers Love",
      description:
        "Explore the most in-demand skills you can start mastering today to boost your resume and impress employers.",
      tags: ["top skills", "online courses"],
    },
  ];

  return (
    <>
      {/* Call to Action Section */}
      <CallToAction />
      
      {/* Blog Posts Section */}
      <section className="relative bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE (Large Blog) */}
        <div className="flex flex-col gap-6">
          {/* Image Placeholder */}
          <div className="w-full h-[419px] bg-[#C4C4C4] rounded-[50px]" />

          {/* Author & Date — Gradient background with custom stops */}
          <div
            className="flex items-center gap-3 px-6 py-3 rounded-full w-fit shadow-lg"
            style={{
              background:
                "linear-gradient(90deg, #6630C6 18%, #330F95 62%)",
            }}
          >
            <User2 className="w-4 h-4 text-white" />
            <span className="text-sm font-medium">{blogPosts[0].author}</span>
            <span className="text-white">|</span>
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-sm font-medium">{blogPosts[0].date}</span>
          </div>

          {/* Title */}
          <h4
            className="text-2xl sm:text-3xl font-bold leading-snug"
            style={{
              fontFamily: "Syne, sans-serif",
              color: "#FBFBFB",
            }}
          >
            {blogPosts[0].title}
          </h4>

          {/* Description */}
          <p className="text-xs" style={{ color: "#AAAAAA" }}>
            {blogPosts[0].description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {blogPosts[0].tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-1.5 border border-white/40 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (Smaller Blogs) */}
        <div className="flex flex-col justify-between gap-6">
          {blogPosts.slice(1).map((post, i) => (
            <div key={i} className="flex flex-row items-start gap-5">
              {/* Image + Date */}
              <div className="flex flex-col items-start gap-3">
                <div className="w-[240px] h-[120px] bg-[#C4C4C4] rounded-[40px]" />
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4B21D5] to-[#7B3EFF] text-white text-sm font-medium w-fit">
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-start">
                <h3 className="text-lg font-semibold leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-[#bdbdbd] text-sm mb-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 border border-white/40 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}