import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

const STEPS = [
  {
    title: "Share Your Asset",
    description:
      "Begin by submitting basic information about your asset. Depending on the category, this may include photographs, invoices, certificates, product details, ownership documents or other relevant records. You may also contact our team to understand the next steps for an in-person assessment.",
    badge: "Digital Submission Available",
  },
  {
    title: "Expert Authentication",
    description:
      "Our team conducts an initial review of the information provided to determine whether the asset falls within our eligible categories and whether further assessment is appropriate. This preliminary stage helps establish the likely documentation and evaluation requirements.",
  },
  {
    title: "Specialist Valuation",
    description:
      "Eligible assets are assessed using category-specific criteria. The evaluation may consider authenticity, quality, condition, provenance, documentation and relevant market factors. Where necessary, the asset may require physical inspection or additional expert review before a final value is determined.",
  },
  {
    title: "Receive a Clear Assessment",
    description:
      "You receive a structured assessment of the asset and the factors that influence its value. Our objective is not only to provide a figure, but also to make the reasoning behind the assessment easier to understand.",
  },
  {
    title: "Explore Your Options",
    description:
      "Based on the assessment, eligible clients may discuss available liquidity solutions with the VLTX team. The final terms depend on the asset, documentation, valuation, customer profile, applicable policies and regulatory requirements.",
  },
  {
    title: "Complete Documentation",
    description:
      "If you choose to proceed, the required agreements and compliance documentation are completed before any transaction is finalised. We maintain a clear record of the asset, the agreed terms and the responsibilities of all parties.",
  },
  {
    title: "Secure Settlement",
    description:
      "Once all requirements are satisfied, the agreed transaction is completed through the appropriate process. The exact timeline depends on the asset category, verification requirements, documentation and selected solution.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-64 -z-10 w-325 max-w-none rotate-12 opacity-50 select-none lg:w-[1600px]"
      />

      <div className="mx-auto flex max-w-3xl flex-col gap-20 px-6 lg:px-10">
        {STEPS.map((step) => (
          <div key={step.title} className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-display text-3xl leading-[1.3] font-semibold text-text-primary">
              {step.title}
            </h2>
            <p className="mt-2 max-w-2xl text-base leading-6 text-[#d0c5af]">
              {step.description}
            </p>
            {step.badge && (
              <div className="mt-4 flex items-center gap-4 rounded-2xl border border-white/5 bg-[rgba(30,32,32,0.6)] px-4 py-4">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 shrink-0 text-gold"
                >
                  <path
                    d="M10 13.333V3.333M10 3.333 6.667 6.667M10 3.333l3.333 3.334M4.167 13.333v1.667a1.667 1.667 0 0 0 1.666 1.667h8.334a1.667 1.667 0 0 0 1.666-1.667v-1.667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xs font-bold tracking-[1.8px] text-text-primary uppercase">
                  {step.badge}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
