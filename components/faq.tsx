"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Plus, Minus } from "lucide-react";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export default function FAQSection() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      question: "What is Relearn?",
      answer:
        "Relearn is an online learning platform that lets you take courses anytime, anywhere. Learn new skills, level up your career, or explore new interests on your schedule.",
    },
    {
      id: "item-2",
      question: "Who can use Relearn?",
      answer:
        "Relearn is designed for learners of all levels - from beginners to professionals. Whether you're looking to start a new career, advance in your current role, or simply explore new interests, our platform has something for everyone.",
    },
    {
      id: "item-3",
      question: "What types of courses are available?",
      answer:
        "We offer a wide range of courses across various categories including technology, business, design, marketing, data science, and more. Our courses are created by industry experts and cover everything from basic concepts to advanced topics.",
    },
    {
      id: "item-4",
      question: "Are the courses beginner-friendly?",
      answer:
        "Yes! Many of our courses are designed with beginners in mind. Each course clearly indicates its difficulty level, and we provide learning paths to help you progress from basic to advanced topics at your own pace.",
    },
    {
      id: "item-5",
      question: "Can I access Relearn from my phone or tablet?",
      answer:
        "Absolutely! Relearn is fully responsive and works seamlessly on all devices - desktop, tablet, and mobile. You can learn on the go with our mobile-optimized platform.",
    },
    {
      id: "item-6",
      question: "Do I need to download anything?",
      answer:
        "No downloads required! Relearn is a web-based platform that works directly in your browser. Simply create an account and start learning immediately from any device with internet access.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F] to-[#1A0A33]" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Section */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 border border-[#A066FF] rounded-full px-4 py-2 bg-[#1A0A33]">
                <div className="w-2 h-2 bg-[#A066FF] rounded-full" />
                <span className="text-white text-sm font-medium">
                  NEED HELP
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h3 className="text-4xl lg:text-5xl font-bold text-white">
                  Frequently Asked
                </h3>
                <h3 className="text-4xl lg:text-5xl font-bold text-[#A066FF]">
                  Questions
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#CCCCCC] text-lg leading-relaxed">
                We're here to make learning easy. Explore our FAQs to quickly
                find the information you need about features, courses, access,
                and more.
              </p>
            </div>

            {/* Ask a Question */}
            <div className="bg-transparent border border-[#333333] rounded-2xl p-6 space-y-4 mt-8 max-w-md">
              <h3 className="text-white text-xl font-bold">
                Still have a question?
              </h3>
              <p className="text-[#CCCCCC]">
                We're here to help you. If you have any questions or need more
                information, feel free to reach out!
              </p>
              <Button
                variant="outline"
                className="border-white text-black bg-white hover:bg-gray-100 rounded-xl px-6 py-3 flex items-center gap-2 w-fit"
              >
                Ask a Question
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Section - Accordion */}
          <div className="lg:w-1/2">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className={`
                    rounded-[40px] border border-[#333333] overflow-hidden
                    transition-all duration-300
                    bg-[#1A1A1A]
                    data-[state=open]:bg-gradient-to-br 
                    data-[state=open]:from-[#6630C6]/90 
                    data-[state=open]:to-[#330F95]/90
                    data-[state=open]:border-[#6630C6]
                  `}
                >
                  {/* Removed down arrow — only + / − toggle remains */}
                  <AccordionTrigger className="cursor-pointer items-center py-6 px-6 hover:no-underline flex justify-between [&>svg]:hidden">
                    <span className="text-lg font-bold text-left flex-1 text-white">
                      {item.question}
                    </span>
                    <div className="flex items-center justify-center w-6 h-6">
                      {/* Plus when closed */}
                      <Plus className="w-5 h-5 text-white data-[state=open]:hidden" />
                      {/* Minus when open */}
                      <Minus className="w-5 h-5 text-white hidden data-[state=open]:block" />
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pb-6">
                    <p className="text-base leading-relaxed text-white">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
