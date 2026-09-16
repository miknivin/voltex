import GradientOrbs from "./GradientOrbs";

const STEPS = [
  {
    number: "01",
    title: "Share Your Item",
    description: "Tell us about the asset you would like evaluated.",
  },
  {
    number: "02",
    title: "Expert Evaluation",
    description: "Specialists review its characteristics and condition.",
  },
  {
    number: "03",
    title: "Receive Your Offer",
    description: "A clear offer reflects our considered assessment.",
  },
  {
    number: "04",
    title: "Make Your Decision",
    description: "Review the offer with no pressure or obligation.",
  },
  {
    number: "05",
    title: "Secure Completion",
    description: "We guide the transaction through to completion.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-line bg-card py-20 lg:py-28"
    >
      <GradientOrbs variant="top-left" opacity={0.12} />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow text-gold-deep">A Clear Path Forward</p>
          <h2 className="section-title mt-5 text-text-primary">
            How It
            <br />
            <span className="text-gold-deep">Works</span>
          </h2>
          <p className="mt-7 max-w-md text-base leading-6 text-text-muted">
            A simple, professionally managed journey from first conversation
            to secure completion.
          </p>
        </div>

        <ol className="relative border-l border-gold/40 pl-8 sm:pl-12">
          {STEPS.map((step) => (
            <li key={step.number} className="relative pb-10 last:pb-0">
              <span
                className="absolute -left-[2.3rem] top-1 grid size-6 place-items-center rounded-full border border-gold bg-bg sm:-left-[3.3rem]"
                aria-hidden="true"
              >
                <span className="size-1.5 rotate-45 bg-gold" />
              </span>
              <div className="relative">
                <span
                  className="pointer-events-none absolute -top-6 right-0 hidden font-display text-6xl font-semibold text-gold/15 select-none sm:block sm:text-7xl"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <p className="text-xs font-bold tracking-[2px] text-gold-deep">
                  {step.number}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold text-text-primary sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-text-muted">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
