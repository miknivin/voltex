import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

type Audience = {
  kicker: string;
  heading: string;
  items: string[];
};

type AudienceCardsProps = {
  audiences: Audience[];
};

export default function AudienceCards({ audiences }: AudienceCardsProps) {
  return (
    <section className="relative overflow-hidden py-10">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-40 -z-10 w-150 max-w-none rotate-6 opacity-35 select-none lg:w-225"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row">
          {audiences.map((audience) => (
            <div
              key={audience.kicker}
              className="flex-1 rounded-2xl border border-line bg-card p-8 sm:p-10"
            >
              <p className="eyebrow text-gold-deep">{audience.kicker}</p>
              <h2 className="mt-4 font-display text-2xl leading-tight font-medium tracking-tight text-text-primary sm:text-3xl">
                {audience.heading}
              </h2>
              <ul className="mt-6 flex flex-col gap-3">
                {audience.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[15px] leading-[21.8px] text-text-secondary"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
