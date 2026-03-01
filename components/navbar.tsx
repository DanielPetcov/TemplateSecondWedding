"use client";

import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";
import { useState } from "react";

import NavbarMenu from "./navbarMenu";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

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
    {
      key: "RSVP",
      href: "/rsvp",
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-20 text-white">
        <div className="absolute inset-0 bg-background-3 z-0" />
        <div className="relative flex items-center justify-between px-4 lg:px-10 py-3 lg:py-5 z-1">
          <Link href="/" className="flex items-center">
            <Logo
              firstInitial="J"
              secondInitial="J"
              className={"text-xl lg:text-4xl"}
            />
            <div className="ml-3 lg:ml-5">Iunie 23, 2026</div>
          </Link>
          <div className="hidden lg:flex gap-12">
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
          <div className="lg:hidden">
            <Button
              onClick={openMenu}
              variant={"ghost"}
              className="uppercase font-semibold hover:bg-transparent! hover:text-white!"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
      <NavbarMenu show={showMenu} closeMenu={closeMenu} links={links} />
    </>
  );
}
