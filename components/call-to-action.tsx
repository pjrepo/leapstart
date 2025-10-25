"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function CallToAction() {
    return (
        <section className="relative py-20 overflow-hidden bg-black">
            <div className="mx-auto max-w-5xl px-4 md:px-6 text-center space-y-8">
                {/* BLOG & ARTICLES Tag */}
                <div className="inline-flex items-center gap-2 border border-[#A066FF] rounded-full px-3 py-1 bg-[#1A0A33]">
                    <div className="w-2 h-2 bg-[#A066FF] rounded-full" />
                    <span className="text-white text-[16px] font-normal font-inter px-3 py-1">
                        BLOG & ARTICLES
                    </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-2">
                    <h3 className="text-[48px] font-semibold font-syne text-transparent bg-clip-text bg-gradient-to-r from-[#4F1BAD] via-[#9867F0] to-[#9867F0]">
                        Explore Our Latest Blogs & Articles
                    </h3>
                </div>

                {/* Description */}
                <p className="text-[#AAAAAA] text-lg max-w-3xl mx-auto">
                    Get fresh ideas, practical guides, and motivation to keep you moving
                    forward in your learning journey.
                </p>

                {/* Email Subscription */}
                <div className="flex items-center justify-center max-w-md mx-auto">
                    <div className="flex w-full bg-[#1A1A1A] border border-[#333333] rounded-full overflow-hidden">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-transparent border-0 text-white placeholder:text-[#CCCCCC] px-6 py-4 focus:outline-none focus:ring-0"
                        />
                        <Button 
                            className="bg-gradient-to-br from-[#6630C6] to-[#330F95] text-white border-0 px-8 py-4 hover:from-[#5a2bb8] hover:to-[#2a0d7a] transition-all duration-200 shadow-lg rounded-full"
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}