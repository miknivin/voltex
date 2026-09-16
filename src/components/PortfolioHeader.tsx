import Link from "next/link";
import GradientOrbs from "./GradientOrbs";

type PortfolioHeaderProps = {
  kicker?: string;
  heading?: string;
  linkText?: string;
  linkHref?: string;
  showLink?: boolean;
};

export default function PortfolioHeader({
  kicker = "Live Exchange",
  heading = "Featured Portfolio",
  linkText = "View Full Inventory",
  linkHref = "/assets",
  showLink = true,
}: PortfolioHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 35% 15%, var(--color-line-soft) 0%, transparent 70%)",
        }}
      />

      <GradientOrbs variant="top-right" opacity={0.14} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[1.2px] text-gold-deep uppercase">
              {kicker}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-text-primary sm:text-5xl">
              {heading}
            </h1>
          </div>
          {showLink && (
            <Link
              href={linkHref}
              className="text-[15px] font-bold tracking-[1.2px] text-gold-deep uppercase"
            >
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
