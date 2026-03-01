export default function Hero({
  bgImage,
  title,
}: {
  bgImage: string;
  title: string;
}) {
  return (
    <div className="relative w-full max-h-screen overflow-hidden">
      <img src={bgImage} alt="hero image" className="w-full h-auto block" />
      <div className="absolute inset-0 bg-black/40 z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 z-5">
        <span className="uppercase text-5xl text-white">{title}</span>
      </div>
    </div>
  );
}
