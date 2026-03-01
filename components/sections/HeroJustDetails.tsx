"use client";

import useFadeIn from "@/hooks/useFadeIn";
import { cn } from "@/lib/utils";

export default function HeroJustDetails({
  bgImage,
  details,
}: {
  bgImage: string;
  details: string[];
}) {
  const { ref, isVisible } = useFadeIn({});

  return (
    <div
      ref={ref}
      className={cn(
        `relative w-full max-h-screen overflow-hidden transition-opacity duration-1000 ease-in-out`,
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <img
        src={bgImage}
        className="w-full min-h-100 lg:h-auto block object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40 z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 z-5 w-[90%] lg:w-auto">
        <div className="space-y-5 ">
          {details.map((d, index) => (
            <p
              key={index}
              className="text-white text-center text-xl 2xl:text-3xl lg:max-w-2/3 mx-auto"
            >
              {d}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
