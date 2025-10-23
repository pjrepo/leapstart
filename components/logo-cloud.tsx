import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

export default function LogoCloud() {
  const logos = [
    {
      id: 1,
      imgSrc: "/logo-2.png",
    },
    {
      id: 2,
      imgSrc: "/logo-5.png",
    },
    {
      id: 3,
      imgSrc: "/logo-29.png",
    },
    {
      id: 4,
      imgSrc: "/logo-53.png",
    },
  ];

  return (
    <section className="bg-[#040404] overflow-hidden py-2">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              {logos.map((logo) => (
                <div key={logo.id} className="flex">
                  <Image
                    className="mx-auto w-[120px] h-[35px] transition-transform duration-300 hover:scale-105 dark:invert"
                    src={logo.imgSrc}
                    alt={`Logo ${logo.id}`}
                    width={120}
                    height={35}
                  />
                </div>
              ))}
            </InfiniteSlider>

            <div className="bg-gradient-to-r from-[#040404] via-[#040404]/80 to-transparent absolute inset-y-0 left-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />

            <div className="bg-gradient-to-l from-[#040404] via-[#040404]/80 to-transparent absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
