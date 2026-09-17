import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import sectionVector from "../../public/images/section-vector.png";

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

      {!bannerImage && (
        <Image
          src={sectionVector}
          alt=""
          aria-hidden
          className="pointer-events-none absolute -top-16 right-0 -z-10 w-325 max-w-none opacity-70 select-none lg:w-[1600px]"
        />
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className={bannerImage ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" : ""}>
          <div className="max-w-3xl">
            {kicker && <p className="eyebrow text-gold-deep">{kicker}</p>}
            <h1
              className={`font-display text-4xl leading-[1.08] font-medium tracking-tight text-text-primary sm:text-5xl lg:text-6xl ${kicker ? "mt-5" : ""}`}
            >
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
