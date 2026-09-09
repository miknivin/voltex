import Image from "next/image";
import Link from "next/link";
import sectionVector from "../../public/images/section-vector.png";

const STEPS = [
  {
    number: "01",
    title: "Share",
    description:
      "Begin by sharing details of your platinum, diamond, precious stone or luxury watch. You may include photographs, invoices, certificates or any supporting documentation you have, and our team will guide you through the next steps for a full assessment.",
    badge: "Digital Submission Available",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Our specialists carefully examine the asset alongside any supporting documents provided. Where required, category-specific testing is carried out to confirm authenticity, quality and condition before an initial valuation is prepared.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Eligible assets may require physical inspection or additional authentication by our specialists. This step ensures every valuation is backed by a thorough, professionally verified assessment before any offer is made.",
  },
  {
    number: "04",
    title: "Get Your Offer",
    description:
      "You receive a clear, transparent resale offer based on the completed evaluation and verification. We explain how the value was determined, so you understand exactly what is being offered and why.",
  },
  {
    number: "05",
    title: "Sell or Lock & Receive the Payment",
    description:
      "Once you accept the offer, the transaction is completed securely — whether you choose to sell outright or lock in the value through an asset advance. Payment is processed promptly once all agreements are finalised.",
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
            <div className="flex h-8.5 w-12 items-center justify-center bg-[#121414] text-lg font-bold text-gold">
              {step.number}
            </div>
            <h2 className="mt-4 font-display text-3xl leading-[1.3] font-semibold text-text-primary">
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

        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-base leading-6 text-[#d0c5af]">
            Ready to find out what your asset is worth?
          </p>
          <Link
            href="/contact"
            className="rounded-2xl bg-gradient-to-r from-gold to-gold-deep px-10 py-4 text-xs font-bold tracking-[1.2px] text-[#3c2f00] uppercase transition-opacity hover:opacity-90"
          >
            Request an Evaluation
          </Link>
        </div>
      </div>
    </section>
  );
}
