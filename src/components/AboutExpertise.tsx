import Image from "next/image";
import expertiseImg from "../../public/images/about-expertise.png";
import GradientOrbs from "./GradientOrbs";

const FACTORS = [
  "Authenticity and documentation.",
  "Material quality and craftsmanship.",
  "Brand, design and rarity.",
  "Condition and market demand.",
  "Provenance and resale potential.",
  "Current category-specific market conditions.",
];

export default function AboutExpertise() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      <GradientOrbs variant="top-right" opacity={0.1} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded border border-line bg-card lg:max-w-none">
            <Image
              src={expertiseImg}
              alt="Detailed appraisal of a luxury asset"
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-display text-4xl font-bold text-text-primary sm:text-5xl">
              Expertise Before Estimation
            </h2>
            <p className="mt-5 text-base leading-[26px] text-text-muted">
              A luxury asset cannot be understood by weight or appearance
              alone. Its value may depend on multiple factors, including:
            </p>
            <ul className="mt-8 flex flex-col gap-6">
              {FACTORS.map((factor) => (
                <li key={factor} className="flex items-center gap-4">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-base leading-6 font-semibold text-text-primary">
                    {factor}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
