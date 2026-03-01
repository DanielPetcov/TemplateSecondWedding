import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroRSVP({
  bgImage,
  title,
  content,
}: {
  bgImage: string;
  title: string;
  content: string;
}) {
  return (
    <div className="relative w-full max-h-screen overflow-hidden">
      <img
        src={bgImage}
        alt="hero image"
        className="w-full h-100 lg:h-auto block object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/10 z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 z-5">
        <div className="text-white text-center space-y-6">
          <div className="uppercase text-2xl lg:text-5xl">{title}</div>
          <div className="text-sm xl:text-base">{content}</div>
          <Link href="/rsvp">
            <Button className="rounded-full text-xs lg:text-base w-full lg:w-1/2 py-6 bg-background-3">
              GO TO REGISTRY
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
