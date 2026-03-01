import Link from "next/link";
import Logo from "./logo";

export default function Navbar() {
  const links = [
    {
      key: "Acasa",
      href: "/",
    },
    {
      key: "Povestea noastra",
      href: "/povestea-noastra",
    },
    {
      key: "Detalii",
      href: "/detalii",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-10 text-white">
      <div className="absolute inset-0 bg-[#44423E] opacity-80 z-0" />
      <div className="relative flex items-center justify-between px-10 py-5 z-1">
        <Link href="/" className="flex items-center">
          <Logo firstInitial="J" secondInitial="J" className={"text-4xl"} />
          <div className="ml-5">Iunie 23, 2026</div>
        </Link>
        <div className="flex gap-12">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="hover:underline uppercase"
            >
              {link.key}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
