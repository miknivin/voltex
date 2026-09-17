import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";
import CompanyFacts from "./CompanyFacts";

const PILLARS = [
  {
    label: "Vision",
    value:
      "To redefine how luxury assets are valued, protected, and transformed into financial freedom.",
  },
  {
    label: "Mission",
    value: "To be the trusted bridge between luxury and liquidity.",
  },
];

export default function AboutVltxTeaser() {
  return (
    <section className="relative z-0 overflow-hidden bg-bg-band py-20 text-white lg:py-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-[-8%] -z-10 w-325 max-w-none rotate-3 opacity-40 select-none lg:w-[1600px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-white/80">About VLTX</p>
        <h2 className="mt-6 max-w-4xl font-display text-3xl leading-[1.1] font-semibold tracking-tight text-white sm:text-4xl">
          A Premium Platform for Unlocking the Value of High-Value Assets
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-6 text-white/85">
          VLTX offers expert valuation and resale solutions for high-value
          assets — including platinum, diamonds, precious stones, jewellery
          and luxury watches — through a secure, transparent and professional
          process.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="relative border border-white/25 bg-white/10 p-8 sm:p-10"
            >
              <span
                className="absolute top-8 left-0 h-12 w-[3px] bg-white"
                aria-hidden="true"
              />
              <p className="text-xs font-bold tracking-[3px] text-white/80 uppercase">
                {pillar.label}
              </p>
              <p className="mt-4 font-display text-xl leading-snug font-semibold text-white sm:text-2xl">
                {pillar.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-14">
        <CompanyFacts onBand />
      </div>
    </section>
  );
}
