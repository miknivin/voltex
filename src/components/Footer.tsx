import Image from "next/image";
import logo from "../../public/images/footer-logo.png";

const COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Experts", href: "/about" },
      { label: "Vault Security", href: "/about" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Regulatory Disclosures", href: "#" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "concierge@vltx.com", href: "mailto:concierge@vltx.com" },
      { label: "+1 (800) 555-VLTX", href: "tel:+18005558589" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src={logo} alt="VLTX" className="h-10 w-auto" />
            <p className="mt-6 max-w-xs text-xs leading-[19.5px] tracking-[0.3px] text-text-mutedmore">
              Redefining high-net-worth liquidity through the lens of luxury
              horology and rare gems.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="text-xl font-bold text-gold">{col.heading}</h3>
              <ul className="mt-6 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs tracking-[0.3px] text-text-mutedmore transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center">
          <p className="text-xs tracking-[0.3px] text-text-mutedmore">
            © 2024 VLTX Sovereign Wealth. Curated Precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
