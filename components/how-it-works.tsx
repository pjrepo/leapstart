"use client";
import Image from "next/image";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Sign Up for Free",
      description: "Create your account in seconds — no hidden fees, no setup, just learning.",
      icon: "/flow1.png",
      titleColor: "text-[#9867F0]" // Purple color for first step title
    },
    {
      id: 2,
      number: "02", 
      title: "Pick Your Course",
      description: "Browse top-quality courses in various categories tailored to your goals.",
      icon: "/flow2.png",
      titleColor: "text-[#FBFBFB]" // White color for other step titles
    },
    {
      id: 3,
      number: "03",
      title: "Learn at Your Own Pace", 
      description: "Access lessons anytime, anywhere. Enjoy flexible learning with videos, quizzes, and assignments.",
      icon: "/flow3.png",
      titleColor: "text-[#FBFBFB]"
    },
    {
      id: 4,
      number: "04",
      title: "Earn Your Certificate",
      description: "Complete the course and receive an official digital certificate to boost your resume and career.",
      icon: "/flow4.png", 
      titleColor: "text-[#FBFBFB]"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Image
              src="/Ellipse-2.png"
              alt="Ellipse"
              width={10}
              height={10}
            />
            <span className="text-[#FBFBFB] text-sm font-medium">
              HOW IT WORKS
            </span>
          </div>
          
          <h2 className="font-syne text-3xl md:text-5xl font-bold mb-8">
            <span className="text-[#FBFBFB]">Easy</span>
            <span className="bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] bg-clip-text text-transparent"> Steps </span>
            <span className="text-[#FBFBFB]">to Smarter Learning</span>
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-[60px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] hidden lg:block"></div>
          
          {/* Steps Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Icon and Number */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <Image
                      src={step.icon}
                      alt={`Step ${step.id}`}
                      width={96}
                      height={96}
                      className="w-24 h-24 object-contain"
                    />
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="text-center">
                  <h3 className={`font-syne text-lg font-bold mb-4 ${step.titleColor}`}>
                    {step.title}
                  </h3>
                  <p className="text-[#AAAAAA] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
