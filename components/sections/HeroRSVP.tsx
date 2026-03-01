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
      <img src={bgImage} alt="hero image" className="w-full h-auto block" />
      <div className="absolute inset-0 bg-black/20 z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 z-5">
        <div className="text-white text-center space-y-6">
          <div className="uppercase text-5xl">{title}</div>
          <div>{content}</div>
          <Link href="/rsvp">
            <Button className="rounded-full w-1/2 py-6 bg-background-3">
              GO TO REGISTRY
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
