"use client";

import useFadeIn from "@/hooks/useFadeIn";
import { cn } from "@/lib/utils";

interface DynamicDataAcoutCard {
  title: string;
  content: string;
}

export default function AboutCard({ data }: { data: DynamicDataAcoutCard[] }) {
  const { ref, isVisible } = useFadeIn({ threshold: 1 });

  return (
    <div
      ref={ref}
      className={cn(
        "bg-background-4 rounded-md h-full transition-opacity duration-1000 ease-in-out",
        isVisible ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="flex flex-col h-full gap-10 items-center justify-center p-10">
        {data.map((d, index) => (
          <div key={index} className="text-center space-y-2">
            <div>{d.title}</div>
            <div>{d.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
