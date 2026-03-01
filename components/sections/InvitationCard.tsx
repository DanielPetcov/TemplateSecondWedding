import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

export default function InvitationCard({ className }: { className?: string }) {
  return (
    <div className={cn("w-full mx-auto", className)}>
      <div
        className={cn(
          "bg-background-3 text-white rounded-md py-14 lg:py-30 px-4 lg:px-0",
        )}
      >
        <div className="max-w-xl mx-auto space-y-10 lg:space-y-20">
          <div className="text-center text-xl lg:text-2xl">
            Vă invităm la nunta noastră la Golden Elm Manor, un loc fermecător
            unde ulmii impunători se întâlnesc cu alei luminate de lumânări.
            Acolo unde începe următoarea noastră aventură.
          </div>
          <Link href="/rsvp">
            <Button className="rounded-full text-xl w-full py-8 lg:py-10 bg-background-5 hover:bg-white text-black">
              RSVP
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
