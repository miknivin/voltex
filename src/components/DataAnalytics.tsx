import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

const LTV_RATIOS = [
  { label: "Watches", value: 85 },
  { label: "Diamonds", value: 80 },
  { label: "Jewellery", value: 70 },
  { label: "Fine Art", value: 60 },
];

// Relative index heights (%) — the source design ships this as an unlabeled
// decorative sparkline, so it is rendered as relative bars, not fabricated figures.
const MARKET_INDEX = [44, 61, 50, 78, 100];

export default function DataAnalytics() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-24 right-0 -z-10 w-325 max-w-none -rotate-6 opacity-60 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="text-xs font-bold tracking-[4.8px] text-gold uppercase">
          Data &amp; Analytics
        </p>
        <h2 className="mt-4 font-display text-4xl leading-[1.2] font-bold text-text-primary sm:text-5xl">
          Precision Valuation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-[#d0c5af]">
          Real-time market tracking for luxury asset categories, allowing for
          instant loan eligibility calculations.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div className="rounded-2xl border border-white/5 bg-card p-8">
          <h3 className="text-[11px] font-normal tracking-[2.2px] text-[#d0c5af] uppercase">
            Loan-to-Value Ratios
          </h3>
          <div className="mt-6 flex flex-col gap-6">
            {LTV_RATIOS.map((ratio) => (
              <div key={ratio.label} className="group">
                <div className="flex items-center justify-between text-[10px] tracking-[1px] uppercase">
                  <span className="text-[#d0c5af]">{ratio.label}</span>
                  <span className="text-gold">{ratio.value}% LTV</span>
                </div>
                <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-[rgba(77,70,53,0.2)]">
                  <div
                    className="h-full rounded-full bg-gold transition-[width] duration-500"
                    style={{ width: `${ratio.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-card p-8">
          <h3 className="text-[11px] font-normal tracking-[2.2px] text-[#d0c5af] uppercase">
            Market Performance Index
          </h3>
          <div className="mt-8 flex h-56 items-end gap-4">
            {MARKET_INDEX.map((height, i) => {
              const isCurrent = i === MARKET_INDEX.length - 1;
              return (
                <div
                  key={i}
                  className="group relative flex-1 rounded-t-lg transition-opacity"
                  style={{
                    height: `${height}%`,
                    backgroundColor: isCurrent
                      ? "rgba(242,202,80,0.3)"
                      : "rgba(242,202,80,0.1)",
                    boxShadow: isCurrent
                      ? "0 -8px 24px rgba(242,202,80,0.15)"
                      : undefined,
                  }}
                >
                  <div className="absolute inset-0 rounded-t-lg opacity-0 transition-opacity group-hover:opacity-100 group-hover:bg-[rgba(242,202,80,0.15)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
