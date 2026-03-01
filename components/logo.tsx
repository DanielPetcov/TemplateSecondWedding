import { cn } from "@/lib/utils";

export default function Logo({
  firstInitial,
  secondInitial,
  className,
}: {
  firstInitial: string;
  secondInitial: string;
  className?: string;
}) {
  return (
    <div className={cn("uppercase", className)}>
      <span>{firstInitial}</span>
      <span>&</span>
      <span>{secondInitial}</span>
    </div>
  );
}
