import Image from "next/image";
import Link from "next/link";
import sectionVector from "../../public/images/section-vector.png";

type PortfolioHeaderProps = {
  kicker?: string;
  heading?: string;
  linkText?: string;
  linkHref?: string;
};

export default function PortfolioHeader({
  kicker = "Live Exchange",
  heading = "Featured Portfolio",
  linkText = "View Full Inventory",
  linkHref = "/assets",
}: PortfolioHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 35% 15%, rgba(6,77,77,0.55) 0%, rgba(1,38,38,0) 70%)",
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
            <p className="text-xs font-bold tracking-[1.2px] text-gold uppercase">
              {kicker}
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold text-text-primary sm:text-5xl">
              {heading}
            </h1>
          </div>
          <Link
            href={linkHref}
            className="text-[15px] font-bold tracking-[1.2px] text-gold uppercase"
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
}
