import Image from "next/image";
import star from "../../public/icons/star.svg";
import sectionVector from "../../public/images/section-vector.png";

const TESTIMONIALS = [
  {
    quote:
      "“VLTX provides a level of discretion and financial sophistication that is unmatched in the asset-backed lending space.”",
    initial: "M",
    name: "Private Collector",
    location: "Geneva, Switzerland",
  },
  {
    quote:
      "“The valuation precision of my watch collection was remarkably accurate. The funding arrived within hours.”",
    initial: "J",
    name: "Estate Manager",
    location: "London, UK",
  },
  {
    quote:
      "“Professional, seamless, and highly exclusive. VLTX is the only partner I trust with my family's heritage assets.”",
    initial: "S",
    name: "HNWI Individual",
    location: "New York, USA",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-16 left-[-10%] -z-10 w-325 max-w-none rotate-6 opacity-40 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-8 rounded-2xl border border-line bg-card p-10"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image key={i} src={star} alt="" className="h-5 w-auto" />
                ))}
              </div>
              <p className="flex-1 text-base leading-6 text-text-secondary">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 border-t border-line pt-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-deep font-display text-base text-[#554300]">
                  {t.initial}
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[1.2px] text-text-primary">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-text-mutedmore">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
