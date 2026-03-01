"use client";

import { X } from "lucide-react";

import { Button } from "./ui/button";
import Logo from "./logo";
import Link from "next/link";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function NavbarMenu({
  show,
  closeMenu,
  links,
}: {
  show: boolean;
  closeMenu: () => void;
  links: {
    key: string;
    href: string;
  }[];
}) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

  return (
    <div
      className={cn(
        `fixed inset-0 z-100 bg-background-3 transform transition-transform 
        duration-300 ${show ? "translate-x-0" : "-translate-x-full"}`,
      )}
    >
      <div className="flex items-center justify-between p-5">
        <Logo
          firstInitial="J"
          secondInitial="J"
          className="text-white text-xl"
        />
        <Button
          size={"icon-sm"}
          variant={"ghost"}
          asChild
          className="bg-transparent! hover:bg-transparent!"
          onClick={closeMenu}
        >
          <X className="text-white hover:text-white" />
        </Button>
      </div>
      <div>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={closeMenu}
            className="block bg-white hover:bg-background-5 py-6 text-center transition"
          >
            {link.key}
          </Link>
        ))}
      </div>
    </div>
  );
}
