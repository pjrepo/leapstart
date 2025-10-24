"use client";
import Image from "next/image";

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-22">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Left Side Image */}
          <div className="relative mb-6 sm:mb-0 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="w-full h-[400px] bg-[#C6C6C6] rounded-2xl"></div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="relative space-y-6">
            <div className="inline-flex items-center gap-2 rounded-[40px] bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] p-[1px]">
              <div className="flex items-center gap-2 px-2 py-2 rounded-[40px] bg-[#040404]">
                <Image
                  src="/Ellipse 2.png"
                  alt="Ellipse"
                  width={10}
                  height={10}
                />
                <span className="text-[#FBFBFB] text-xs font-medium">
                  WHY CHOOSE US
                </span>
              </div>
            </div>

            <h3 className="font-syne text-3xl font-bold">
              <span className="text-[#FBFBFB]">Why Relearn Works for You </span>
              <span className="bg-gradient-to-r from-[#4F1BAD] to-[#9867F0] bg-clip-text text-transparent">
                Effectively
              </span>
            </h3>

            {/* Feature Blocks */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/why-choose-icon1.png"
                  alt="Learn at Your Own Pace Icon"
                  width={58}
                  height={58}
                />
                <div>
                  <h4 className="text-[#FBFBFB] text-base font-bold mb-2 leading-none">
                    Learn at Your Own Pace
                  </h4>
                  <p className="text-[#AAAAAA] text-xs">
                    Access a wide range of courses anytime, anywhere. Whether
                    you're an early bird or night owl, your learning fits your
                    schedule.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/why-choose-icon2.png"
                  alt="Curated Courses by Experts Icon"
                  width={58}
                  height={58}
                />
                <div>
                  <h4 className="text-[#FBFBFB] text-base font-bold mb-2 leading-none">
                    Curated Courses by Experts
                  </h4>
                  <p className="text-[#AAAAAA] text-xs">
                    Every course is created or reviewed by professionals, so you
                    only get relevant, high-quality learning materials.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/why-choose-icon3.png"
                  alt="Seamless Across All Devices Icon"
                  width={58}
                  height={58}
                />
                <div>
                  <h4 className="text-[#FBFBFB] text-base font-bold mb-2 leading-none">
                    Seamless Across All Devices
                  </h4>
                  <p className="text-[#AAAAAA] text-xs">
                    From desktop to mobile, enjoy a smooth learning experience
                    with a beautifully crafted interface — optimized for focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
