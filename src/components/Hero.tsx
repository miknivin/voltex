import Image from "next/image";
import Link from "next/link";
import heroImageSide from "../../public/images/hero-image-side.png";
import heroContentSide from "../../public/images/hero-content-side.png";
import badgeValuation from "../../public/icons/badge-valuation.svg";
import badgeSecure from "../../public/icons/badge-secure.svg";
import badgeExpert from "../../public/icons/badge-expert.svg";
import badgeLiquidity from "../../public/icons/badge-liquidity.svg";

const BADGES = [
  { icon: badgeValuation, label: "Complimentary Valuation" },
  { icon: badgeSecure, label: "Private and Secure" },
  { icon: badgeExpert, label: "Expert-Led Assessment" },
  { icon: badgeLiquidity, label: "Luxury Asset Liquidity" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 65% 20%, rgba(6,77,77,0.55) 0%, rgba(1,38,38,0) 70%)",
        }}
      />

      <Image
        src={heroContentSide}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-24 -z-10 w-150 max-w-none opacity-70 select-none lg:w-205"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[7fr_5fr] lg:gap-8">
          <div className="relative z-10">
            <p className="text-[15px] font-semibold tracking-[3.6px] text-gold uppercase">
              Unlocking Asset Value
            </p>

            <h1 className="mt-4 font-display text-6xl leading-[0.95] font-semibold tracking-[-1.28px] text-text-primary sm:text-7xl lg:text-[64px] xl:text-[85px] xl:leading-20">
              Luxury Deserves its <span className="text-gold">True Value</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-[21.8px] text-text-secondary">
              VLTX is a trusted platform for evaluating and reselling high value
              assets.
            </p>
            <ul className="mt-4 flex max-w-lg flex-col gap-2">
              {[
                "Platinum Jewellery",
                "Diamond Jewellery",
                "Precious Jewellery",
                "Luxury watches",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[15px] leading-[21.8px] text-text-secondary">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="rounded-2xl border border-white/10 bg-[rgba(217,217,217,0.25)] px-4.5 py-3 text-sm font-medium tracking-[1.2px] text-[#b5e4e3] transition-colors hover:bg-[rgba(217,217,217,0.35)]"
              >
                Explore Our Services
              </a>
              <Link
                href="/contact"
                className="rounded-2xl bg-gold px-6 py-3.5 text-sm font-medium tracking-[1.2px] text-[#3c2f00] transition-opacity hover:opacity-90"
              >
                Request a Free Valuation
              </Link>
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-lg lg:max-w-none">
            <Image
              src={heroImageSide}
              alt="Gold Rolex Deepsea watch"
              priority
              className="w-full"
            />
          </div>
        </div>

        <div className="relative z-10 mt-14 grid grid-cols-2 gap-4 sm:flex sm:items-stretch sm:gap-5">
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/5 bg-pill px-4 py-2.5"
            >
              <Image src={badge.icon} alt="" className="h-4 w-auto shrink-0" />
              <span className="text-sm font-medium whitespace-nowrap text-text-primary">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
