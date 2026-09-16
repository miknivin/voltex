import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import GradientOrbs from "./GradientOrbs";

type PageIntroProps = {
  kicker?: string;
  heading: string;
  description: ReactNode;
  bannerImage?: StaticImageData;
};

export default function PageIntro({ kicker, heading, description, bannerImage }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 35% 15%, var(--color-line-soft) 0%, transparent 70%)",
        }}
      />

      {!bannerImage && <GradientOrbs variant="top-right" opacity={0.14} />}

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className={bannerImage ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" : ""}>
          <div className="max-w-3xl">
            {kicker && <p className="eyebrow text-gold-deep">{kicker}</p>}
            <h1 className={`section-title text-text-primary ${kicker ? "mt-5" : ""}`}>
              {heading}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-[28.8px] tracking-[0.18px] text-text-muted">
              {description}
            </p>
          </div>

          {bannerImage && (
            <Image
              src={bannerImage}
              alt=""
              priority
              className="h-auto w-full object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}
