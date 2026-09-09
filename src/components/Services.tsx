import Image from "next/image";
import Link from "next/link";
import sectionVector from "../../public/images/section-vector.png";
import cardDiamond from "../../public/icons/card-diamond.svg";
import cardJewellery from "../../public/icons/card-jewellery.svg";
import cardPlatinum from "../../public/icons/card-platinum.svg";
import cardWatch from "../../public/icons/card-watch.svg";
import arrowDiscover from "../../public/icons/arrow-discover.svg";

const SERVICES = [
  {
    icon: cardDiamond,
    title: "Diamond Jewellery",
    description: "Discover the resale value beyond just gold.",
  },
  {
    icon: cardJewellery,
    title: "Precious Jewellery",
    description: "Make more of your platinum pieces.",
  },
  {
    icon: cardPlatinum,
    title: "Platinum Jewellery",
    description: "Transparent valuation and resale.",
  },
  {
    icon: cardWatch,
    title: "Luxury watches",
    description: "A refined destination for exceptional timepieces.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-48 -z-10 w-325 max-w-none -rotate-12 opacity-45 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-4xl font-bold text-text-primary sm:text-5xl">
            High Value Asset Solutions
          </h2>
          <div className="h-px w-24 bg-gold" />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col items-start overflow-hidden rounded-2xl border border-white/5 bg-card p-10 transition-transform hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(242,202,80,0.06) 0%, rgba(0,43,43,0) 55%)",
                }}
              />
              <Image src={service.icon} alt="" className="relative h-8 w-auto" />
              <h3 className="relative mt-6 text-[28px] leading-[36.4px] font-medium text-text-primary">
                {service.title}
              </h3>
              <p className="relative mt-4 flex-1 text-base leading-6 text-text-muted">
                {service.description}
              </p>
              <Link
                href="/contact"
                className="relative mt-8 flex w-fit items-center gap-2 text-[10px] font-normal tracking-[1px] text-gold uppercase"
              >
                Discover
                <Image src={arrowDiscover} alt="" className="h-2.5 w-auto" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
