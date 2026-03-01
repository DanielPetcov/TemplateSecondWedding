import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PovesteaNoastraPage() {
  return (
    <div className="container mt-30 mb-10 lg:mb-20 mx-auto px-4 space-y-16 lg:space-y-20">
      <div className="space-y-10">
        <img
          src={"/couple.png"}
          className="rotate-2 rounded-md shadow mx-auto mb-10 w-60 lg:w-auto"
        />
        <h1 className="uppercase text-3xl text-center">
          Where the wild things wed
        </h1>
      </div>
      <div className="space-y-12 lg:space-y-16 text-xl">
        <p>
          We met at an art walk in Seattle, literally bumping into each other.
          We started hiking together, a lot. We both love the PNW, the
          mountains, the coast, everything. We’d be out on trails, just hanging
          out, talking around a fire. It clicked. We were on the same
          wavelength. One time, we were hiking and I complained about my boots
          and Jenny just stopped and started tying my laces for me. That's when
          I knew. It wasn't some grand gesture. It was just...us.
        </p>
        <p>
          We’ve built a life together. It’s chill, it’s real. We love low-key
          adventures, but also appreciate good wine with friends. From those
          first hikes to figuring out life together under countless starry
          skies, we've always found our best moments in the wild.
        </p>
      </div>
      <div className="relative mx-auto mb-40 lg:mb-50">
        <img
          src="/sparkle.png"
          alt="sparkle"
          className="-rotate-5 mx-auto w-50 lg:w-auto -translate-x-10"
        />
        <img
          src="/ballons.png"
          alt="ballons"
          className="w-45 lg:w-auto absolute top-[calc(50%+40%)] left-2/3 -translate-1/2 z-1 rotate-10 rounded-md shadow"
        />
      </div>
      <div className="text-xl">
        <p>
          It feels right to celebrate surrounded by the people who get us. We're
          stoked to start this next chapter with you.
        </p>
        <br />
        <p>Onward and upward to the next adventure!</p>
      </div>
      <Link href="/rsvp" className="block mx-auto">
        <Button className="rounded-full w-full max-w-100 py-6 bg-background-3">
          RSVP
        </Button>
      </Link>
    </div>
  );
}
