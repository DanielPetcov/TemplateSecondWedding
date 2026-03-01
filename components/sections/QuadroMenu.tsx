"use client";

import useFadeIn from "@/hooks/useFadeIn";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function QuadroMenu({
  data,
  className,
}: {
  data: { title: string; url: string; bgImage: string }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-4", className)}>
      {data.map((d, index) => (
        <QuadroMenuItem {...d} key={index} />
      ))}
    </div>
  );
}

function QuadroMenuItem({
  title,
  url,
  bgImage,
}: {
  title: string;
  url: string;
  bgImage: string;
}) {
  const { ref, isVisible } = useFadeIn({ threshold: 0.7 });

  return (
    <div
      ref={ref}
      className={cn(
        "relative aspect-square rounded-md overflow-hidden transition-opacity duration-1000 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <Link href={url} className={cn(`h-full`)}>
        <div className="absolute z-1 inset-0 bg-black/10 hover:bg-gray-200/20 transition-all" />
        <div className="absolute z-0 inset-0">
          <img
            src={bgImage}
            alt="quadro image"
            className="w-full h-full object-center object-cover"
          />{" "}
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-white text-2xl uppercase underline">{title}</div>
        </div>
      </Link>
    </div>
  );
}
