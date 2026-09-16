import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

const FAQS = [
  {
    question: "How is platinum valued?",
    answer:
      "Platinum bars, coins and jewellery are assessed on purity (Pt 950 and above), weight and current market rates, with craftsmanship and brand considered for finished pieces.",
  },
  {
    question: "Do diamonds need a certificate?",
    answer:
      "A GIA or equivalent certificate helps, but it is not essential. Our specialists assess carat, colour, clarity and cut in person and can guide you on certification.",
  },
  {
    question: "How are precious gemstones assessed?",
    answer:
      "Emeralds, rubies and sapphires are judged on origin, colour saturation, clarity, treatment and cut, alongside the quality of the setting in finished jewellery.",
  },
  {
    question: "Which luxury watches do you accept?",
    answer:
      "Timepieces from leading Swiss and international houses, in any condition. Original box, papers and service history improve the offer but are not required.",
  },
  {
    question: "How long does a valuation take?",
    answer:
      "Most enquiries receive a response within one business day, and a full valuation is usually completed shortly after our specialists examine the asset.",
  },
  {
    question: "Is my enquiry confidential?",
    answer:
      "Entirely. Your details and your asset are handled with complete discretion, viewed only by the specialists preparing your valuation.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-8%] -z-10 w-325 max-w-none rotate-3 opacity-35 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-bold tracking-[3.6px] text-gold uppercase">
            Common Questions
          </p>
          <h2 className="font-display text-4xl font-bold text-text-primary sm:text-5xl">
            FAQ
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl border-t border-white/5">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-white/5 py-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold text-text-primary transition-colors group-open:text-gold">
                {faq.question}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 shrink-0 text-gold transition-transform group-open:rotate-90"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
