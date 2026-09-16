import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

const FACTS = [
  { label: "Legal Name", value: "LuxVault" },
  { label: "Brand Name", value: "VLTX" },
  {
    label: "Positioning",
    value: "High-Value Asset Valuation, Liquidity & Resale Company",
  },
  { label: "Core Promise", value: "Trust • Security • Liquidity • Transparency" },
  { label: "Tagline", value: "Where Luxury Meets Liquidity" },
];

export default function CompanyFacts() {
  return (
    <section className="relative overflow-hidden py-10">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[-12%] -z-10 w-150 max-w-none rotate-6 opacity-35 select-none lg:w-225"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/5 bg-white/5 sm:grid-cols-2 lg:grid-cols-5">
          {FACTS.map((fact, i) => (
            <div
              key={fact.label}
              className={`bg-bg p-6 ${i === FACTS.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <dt className="text-[11px] font-bold tracking-[2px] text-gold uppercase">
                {fact.label}
              </dt>
              <dd className="mt-3 font-display text-lg leading-snug font-semibold text-text-primary">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
