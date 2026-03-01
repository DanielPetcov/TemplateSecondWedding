import { cn } from "@/lib/utils";

export default function ImageCard({
  bgImage,
  className,
}: {
  bgImage: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-md", className)}>
      <img
        src={bgImage}
        alt="cover image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
