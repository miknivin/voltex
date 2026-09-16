import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/images/emerald-theme/Hero.jpg";
import GradientOrbs from "./GradientOrbs";

const CHIPS = ["Platinum", "Diamonds", "Precious Gem Stones & Jewellery", "Luxury Watches"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 65% 20%, var(--color-line-soft) 0%, transparent 70%)",
        }}
      />

      <GradientOrbs variant="top-left" opacity={0.14} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <div className="relative z-10 text-center lg:text-left">
            <p className="mb-6 flex items-center justify-center gap-3 text-[13px] font-semibold tracking-[3px] text-gold-deep uppercase lg:justify-start">
              <span className="h-px w-8 bg-gold" />
              Where Luxury Meets Liquidity
            </p>

            <h1 className="font-display text-5xl leading-[1.04] font-semibold tracking-[-1px] text-text-primary sm:text-6xl lg:text-[64px] xl:text-[76px]">
              Luxury Deserves Its{" "}
              <span className="text-gold-deep">True Value</span>
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-text-muted lg:mx-0">
              VLTX offers expert valuation and a transparent way to unlock
              the true value of your luxury assets.
            </p>

            <div className="mt-9 flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex min-h-13 items-center gap-3 rounded-2xl bg-gold px-9 py-4 text-sm font-semibold tracking-[1.2px] text-white uppercase shadow-lg transition-opacity hover:opacity-90"
              >
                Get a Valuation
              </Link>
            </div>

            <p className="mt-5 text-[11px] tracking-[2px] text-text-mutedmore uppercase">
              Confidential · Expert valued · Secure completion
            </p>

            <span className="gold-rule mt-10 block h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent lg:mx-0" />

            <div className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs tracking-[1.4px] text-text-secondary uppercase lg:justify-start">
              {CHIPS.map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-xl lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-3 border border-gold/40"
              aria-hidden
            />
            <Image
              src={heroImage}
              alt="Platinum rings, diamond pendant, gemstone jewellery and a luxury watch on a steel surface"
              priority
              className="relative aspect-5/4 w-full border-2 border-line object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
