export default function Hero({
  bgImage,
  title,
}: {
  bgImage: string;
  title: string;
}) {
  return (
    <div className="relative w-full max-h-screen overflow-hidden">
      <img
        src={bgImage}
        alt="hero image"
        className="w-full h-100 lg:h-auto block object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40 z-1" />
      <div className="absolute top-1/2 left-1/2 -translate-1/2 z-5">
        <p className="uppercase text-3xl lg:text-5xl text-white text-center text-nowrap">
          {title}
        </p>
      </div>
    </div>
  );
}
