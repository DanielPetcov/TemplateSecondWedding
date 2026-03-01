import Logo from "./logo";

export default function Footer() {
  return (
    <div className="bg-background-5 py-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <Logo firstInitial="J" secondInitial="J" className="text-5xl" />
        <div className="text-center text-2xl">
          Saturday, <br />
          September 20, 2025
        </div>
      </div>
    </div>
  );
}
