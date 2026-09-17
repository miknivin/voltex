import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

type StorySectionProps = {
  kicker: string;
  heading: string;
  description?: string;
  items?: string[];
  decor?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "none";
};

const DECOR_CLASSES: Record<string, string> = {
  "top-right": "-top-24 -right-40 rotate-6",
  "top-left": "-top-24 -left-40 -rotate-6",
  "bottom-right": "-bottom-24 -right-40 rotate-12",
  "bottom-left": "-bottom-24 -left-40 -rotate-12",
};

export default function StorySection({
  kicker,
  heading,
  description,
  items,
  decor = "top-right",
}: StorySectionProps) {
  return (
    <section className="relative overflow-hidden py-10">
      {decor !== "none" && (
        <Image
          src={sectionVector}
          alt=""
          aria-hidden
          className={`pointer-events-none absolute -z-10 w-150 max-w-none opacity-35 select-none lg:w-225 ${DECOR_CLASSES[decor]}`}
        />
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-gold-deep">{kicker}</p>
        <h2 className="mt-4 max-w-2xl font-display text-2xl leading-tight font-medium tracking-tight text-text-primary sm:text-3xl">
          {heading}
        </h2>
        {description && (
          <p className="mt-4 max-w-2xl text-[15px] leading-[21.8px] text-text-secondary">
            {description}
          </p>
        )}
        {items && (
          <ul className="mt-6 flex flex-col gap-3">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] leading-[21.8px] text-text-secondary">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
