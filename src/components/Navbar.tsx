"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "../../public/images/nav-logo.png";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "What We Value", href: "/#assets" },
  { label: "How It Works", href: "/#process" },
  { label: "Why VLTX", href: "/#why-vltx" },
  { label: "About VLTX", href: "/#about-vltx" },
  { label: "Leadership", href: "/#leadership" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/contact" },
];

function ArrowDownRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 7l10 10M17 7v10H7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (link: (typeof LINKS)[number]) => {
    if (link.href.startsWith("/#")) return false;
    return pathname === link.href;
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={logo}
            alt="VLTX — Luxury Meets Liquidity"
            priority
            className="h-9 w-auto lg:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-6 rounded-full border border-line bg-bg/70 px-6 py-3 shadow-sm backdrop-blur-md xl:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[11px] font-semibold tracking-[1.4px] uppercase transition-colors hover:text-gold-deep ${
                isActive(link) ? "text-gold-deep" : "text-text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-2 border-b border-gold pb-1 text-xs font-semibold tracking-[1.4px] text-gold-deep uppercase transition-colors hover:text-text-primary xl:inline-flex"
        >
          Get a Valuation
          <ArrowDownRightIcon className="h-4 w-4" />
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-bg/70 shadow-sm backdrop-blur-md xl:hidden"
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
        <nav className="mx-6 flex flex-col gap-1 rounded-2xl border border-line bg-bg/95 p-4 shadow-lg backdrop-blur-md xl:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3 text-sm font-medium tracking-[1.4px] uppercase transition-colors hover:bg-line-soft hover:text-gold-deep ${
                isActive(link) ? "text-gold-deep" : "text-text-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-between rounded-lg bg-gold px-4 py-3 text-sm font-semibold tracking-[1.4px] text-[#3c2f00] uppercase"
          >
            Get a Valuation
            <ArrowDownRightIcon className="h-4 w-4" />
          </Link>
        </nav>
      )}
    </header>
  );
}
