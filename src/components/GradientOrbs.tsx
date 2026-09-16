type Variant =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center"
  | "wide";

const VARIANTS: Record<Variant, { a: string; b: string }> = {
  "top-left": {
    a: "-top-32 -left-24 h-112 w-112",
    b: "top-24 left-1/3 h-80 w-80",
  },
  "top-right": {
    a: "-top-28 -right-20 h-120 w-120",
    b: "top-1/3 right-1/4 h-72 w-72",
  },
  "bottom-left": {
    a: "-bottom-32 -left-20 h-112 w-112",
    b: "bottom-16 left-1/3 h-72 w-72",
  },
  "bottom-right": {
    a: "-bottom-28 -right-24 h-120 w-120",
    b: "bottom-1/4 right-1/3 h-80 w-80",
  },
  center: {
    a: "top-0 left-1/2 h-112 w-112 -translate-x-1/2",
    b: "bottom-0 left-1/4 h-80 w-80",
  },
  wide: {
    a: "-top-24 -left-16 h-96 w-96",
    b: "-bottom-24 -right-16 h-96 w-96",
  },
};

type GradientOrbsProps = {
  variant?: Variant;
  opacity?: number;
};

export default function GradientOrbs({
  variant = "top-right",
  opacity = 0.16,
}: GradientOrbsProps) {
  const pos = VARIANTS[variant];

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className={`absolute rounded-full bg-gold blur-3xl ${pos.a}`}
        style={{ opacity, animation: "orb-drift-a 16s ease-in-out infinite" }}
      />
      <div
        className={`absolute rounded-full bg-gold-deep blur-3xl ${pos.b}`}
        style={{
          opacity: opacity * 0.8,
          animation: "orb-drift-b 20s ease-in-out infinite",
        }}
      />
    </div>
  );
}
