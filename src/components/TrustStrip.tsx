function TrustIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-gold">
      <path
        d="M12 2l2.4 5.1 5.6.6-4.2 3.8 1.2 5.5L12 14l-5 3 1.2-5.5-4.2-3.8 5.6-.6L12 2z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TransparencyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-gold">
      <path
        d="M5 12l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-gold">
      <path
        d="M12 2l7 3v6c0 4.8-3 8.9-7 10.2C8 20 5 15.9 5 11V5l7-3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LiquidityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-gold">
      <path
        d="M5 12h11m0 0l-4-4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const VALUES = [
  { icon: TrustIcon, label: "Trust" },
  { icon: TransparencyIcon, label: "Transparency" },
  { icon: SecurityIcon, label: "Security" },
  { icon: LiquidityIcon, label: "Liquidity" },
];

export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 sm:grid-cols-4 lg:px-10">
        {VALUES.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex min-h-24 items-center justify-center gap-3 border-l border-white/5 px-4 first:border-l-0 sm:px-6"
          >
            <Icon />
            <span className="text-xs font-bold tracking-[1.4px] text-text-primary uppercase">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
