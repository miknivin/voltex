import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

const REASONS = [
  {
    number: "01",
    title: "Expertise You Can Trust",
    description: "Specialised understanding across each luxury category.",
  },
  {
    number: "02",
    title: "Value You Can Understand",
    description:
      "Clear evaluation based on the qualities and condition of your item.",
  },
  {
    number: "03",
    title: "Complete Discretion",
    description:
      "Your valuables, information and transaction are handled confidentially.",
  },
  {
    number: "04",
    title: "Clear & Considered Offers",
    description:
      "Straightforward offers designed to reflect the assessed value.",
  },
  {
    number: "05",
    title: "Seamless Experience",
    description:
      "A professionally managed journey from evaluation to completion.",
  },
];

export default function WhyVltx() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -z-10 w-325 max-w-none -translate-x-1/2 opacity-35 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl font-bold text-text-primary sm:text-5xl">
          Why VLTX?
        </h2>
        <div className="mt-6 flex flex-col gap-4 text-base leading-7 text-text-muted">
          <p>
            You may have bought a platinum, diamond or precious jewellery
            piece for ₹5 lakhs. Years later, when you want to sell it or
            unlock its value through an asset advance, the question is —
            where do you go?
          </p>
          <p>
            Gold has an established resale ecosystem. But high-value
            diamonds, platinum and other precious luxury assets often don&apos;t.
          </p>
          <p className="font-display text-2xl font-semibold text-gold italic">
            VLTX changes that.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-4 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {REASONS.map((reason) => (
          <div
            key={reason.number}
            className="flex h-full flex-col gap-3 rounded-2xl border border-white/5 bg-card p-7"
          >
            <span className="text-xs font-bold tracking-[2px] text-gold">
              {reason.number}
            </span>
            <h3 className="font-display text-lg font-semibold text-text-primary">
              {reason.title}
            </h3>
            <p className="text-sm leading-6 text-text-muted">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
