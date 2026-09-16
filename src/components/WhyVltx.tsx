import GradientOrbs from "./GradientOrbs";

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
    <section id="why-vltx" className="relative overflow-hidden py-20 lg:py-28">
      <GradientOrbs variant="center" opacity={0.12} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow text-gold-deep">Confidence at Every Step</p>
          <h2 className="section-title mt-5 text-text-primary">Why VLTX?</h2>
          <p className="mt-7 text-base leading-7 text-text-muted">
            Every detail is approached with expertise, clarity and respect
            for your privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((reason) => (
            <div
              key={reason.number}
              className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-card p-7 transition-colors hover:bg-bg"
            >
              <span className="text-xs font-bold tracking-[2px] text-gold-deep">
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
      </div>
    </section>
  );
}
