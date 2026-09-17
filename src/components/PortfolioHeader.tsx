import Image from "next/image";
import Link from "next/link";
import sectionVector from "../../public/images/section-vector.png";

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

      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 -z-10 w-325 max-w-none opacity-70 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow text-gold-deep">{kicker}</p>
            <h1 className="section-title mt-5 text-text-primary">
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
