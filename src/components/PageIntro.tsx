import Image from "next/image";
import type { ReactNode } from "react";
import sectionVector from "../../public/images/section-vector.png";

type PageIntroProps = {
  kicker?: string;
  heading: string;
  description: ReactNode;
};

export default function PageIntro({ kicker, heading, description }: PageIntroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 35% 15%, rgba(6,77,77,0.55) 0%, rgba(1,38,38,0) 70%)",
        }}
      />

      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-16 right-0 -z-10 w-325 max-w-none opacity-70 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          {kicker && (
            <p className="text-xs font-bold tracking-[2.4px] text-gold uppercase">
              {kicker}
            </p>
          )}
          <h1
            className={`font-display text-5xl leading-[1.1] font-semibold tracking-[-1.44px] text-text-primary sm:text-6xl lg:text-[72px] lg:leading-[79.2px] ${kicker ? "mt-6" : ""}`}
          >
            {heading}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[28.8px] tracking-[0.18px] text-[#d0c5af]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
