import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

const CATEGORIES = [
  "Platinum",
  "Diamonds",
  "Precious Gem Stones & Jewellery",
  "Luxury Watches",
];

export default function StatsBand() {
  return (
    <section className="relative z-0 overflow-hidden border-y border-line bg-bg-band py-14 text-white">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/3 -z-10 w-325 max-w-none -rotate-3 opacity-30 select-none lg:w-[1600px]"
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="border-l border-white/40 pl-5">
          <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
            25+
          </p>
          <p className="mt-3 text-[11px] font-bold tracking-[2px] text-white/80 uppercase">
            Years of industry expertise
          </p>
        </div>

        <div className="border-l border-white/40 pl-5">
          <ul className="flex flex-col gap-1.5">
            {CATEGORIES.map((name) => (
              <li
                key={name}
                className="font-display text-sm leading-relaxed font-semibold tracking-[0.6px] text-white uppercase sm:text-base"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-l border-white/40 pl-5">
          <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
            100%
          </p>
          <p className="mt-3 text-[11px] font-bold tracking-[2px] text-white/80 uppercase">
            Confidential process
          </p>
        </div>

        <div className="border-l border-white/40 pl-5">
          <p className="font-display text-4xl font-semibold text-white sm:text-5xl">
            24hr
          </p>
          <p className="mt-3 text-[11px] font-bold tracking-[2px] text-white/80 uppercase">
            Typical response time
          </p>
        </div>
      </div>
    </section>
  );
}
