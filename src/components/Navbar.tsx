"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../public/images/nav-logo.png";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Assets", href: "/assets", matchPaths: ["/diamonds", "/platinum-jewellery", "/luxury-watches"] },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (link: (typeof LINKS)[number]) => {
    if (link.href.startsWith("/#")) return pathname === "/";
    if (pathname === link.href) return true;
    return link.matchPaths?.includes(pathname) ?? false;
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="VLTX — Luxury Meets Liquidity"
            priority
            className="h-9 w-auto lg:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-10 rounded-full border border-white/10 bg-pill px-6 py-3 backdrop-blur-sm lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-[1.4px] uppercase transition-colors hover:text-gold ${
                isActive(link) ? "text-gold" : "text-[#839ec5]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-pill lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-px w-5 bg-text-primary transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`h-px w-5 bg-text-primary transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-5 bg-text-primary transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="mx-6 flex flex-col gap-1 rounded-2xl border border-white/10 bg-bg-deep/95 p-4 backdrop-blur-sm lg:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium tracking-[1.4px] uppercase transition-colors hover:bg-white/5 hover:text-gold ${
                isActive(link) ? "text-gold" : "text-[#839ec5]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
