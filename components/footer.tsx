import Logo from "./logo";

export default function Footer() {
  return (
    <div className="bg-background-5 pt-10 pb-2">
      <div className="flex flex-col items-center justify-center gap-3 lg:gap-5">
        <Logo
          firstInitial="J"
          secondInitial="J"
          className="text-3xl lg:text-5xl"
        />
        <div className="text-center text-xl lg:text-2xl">
          Saturday, <br />
          September 20, 2025
        </div>
      </div>
      <div className="mt-10 text-center text-xs">Made by Petcov Daniel</div>
    </div>
  );
}
