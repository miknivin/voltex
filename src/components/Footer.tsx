import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/emerald-theme/VLTX Logo.png";

const EXPLORE_LINKS = [
  { label: "What We Value", href: "/#assets" },
  { label: "How It Works", href: "/#process" },
  { label: "Why VLTX", href: "/#why-vltx" },
];

const COMPANY_LINKS = [
  { label: "About VLTX", href: "/about" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/contact" },
];

const CATEGORY_LINKS = [
  { label: "Platinum", href: "/platinum-jewellery" },
  { label: "Certified Diamonds & Diamond Jewellery", href: "/diamonds" },
  { label: "Precious Gem Stones & Jewellery", href: "/precious-gemstones" },
  { label: "Luxury Watches", href: "/luxury-watches" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep">
      <span className="block h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_2fr]">
          <div>
            <Image
              src={logo}
              alt="VLTX — Luxury Meets Liquidity"
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-6 text-text-muted">
              Where luxury meets liquidity — secure pledging and resale of
              high-value assets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[2px] text-gold-deep uppercase">
                Explore
              </p>
              {EXPLORE_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block w-fit py-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[2px] text-gold-deep uppercase">
                Company
              </p>
              {COMPANY_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block w-fit py-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div>
              <p className="mb-4 text-[11px] font-bold tracking-[2px] text-gold-deep uppercase">
                Categories
              </p>
              {CATEGORY_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block w-fit py-1.5 text-sm text-text-muted transition-colors hover:text-text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line pt-7 text-xs text-text-mutedmore sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 VLTX (LuxVault). All rights reserved.</span>
          <span>Where luxury meets liquidity.</span>
        </div>
      </div>
    </footer>
  );
}
