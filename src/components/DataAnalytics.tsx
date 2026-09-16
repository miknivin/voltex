import GradientOrbs from "./GradientOrbs";

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
      <GradientOrbs variant="bottom-right" opacity={0.12} />

      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="text-xs font-bold tracking-[4.8px] text-gold-deep uppercase">
          Data &amp; Analytics
        </p>
        <h2 className="mt-4 font-display text-4xl leading-[1.2] font-bold text-text-primary sm:text-5xl">
          Precision Valuation
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-text-muted">
          Real-time market tracking for luxury asset categories, allowing for
          instant loan eligibility calculations.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div className="rounded-2xl border border-line bg-card p-8">
          <h3 className="text-[11px] font-normal tracking-[2.2px] text-text-muted uppercase">
            Loan-to-Value Ratios
          </h3>
          <div className="mt-6 flex flex-col gap-6">
            {LTV_RATIOS.map((ratio) => (
              <div key={ratio.label} className="group">
                <div className="flex items-center justify-between text-[10px] tracking-[1px] uppercase">
                  <span className="text-text-muted">{ratio.label}</span>
                  <span className="text-gold-deep">{ratio.value}% LTV</span>
                </div>
                <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-line">
                  <div
                    className="h-full rounded-full bg-gold transition-[width] duration-500"
                    style={{ width: `${ratio.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-card p-8">
          <h3 className="text-[11px] font-normal tracking-[2.2px] text-text-muted uppercase">
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
                      ? "color-mix(in srgb, var(--color-gold) 35%, transparent)"
                      : "color-mix(in srgb, var(--color-gold) 12%, transparent)",
                    boxShadow: isCurrent
                      ? "0 -8px 24px color-mix(in srgb, var(--color-gold) 20%, transparent)"
                      : undefined,
                  }}
                >
                  <div className="absolute inset-0 rounded-t-lg bg-gold/15 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
