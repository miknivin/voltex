import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

const MISSION_ITEMS = [
  "Help asset owners understand the value they hold.",
  "Create responsible pathways to liquidity.",
  "Improve transparency in luxury asset transactions.",
  "Support jewellers with more flexible financial solutions.",
  "Build a trusted database and digital experience around eligible assets.",
  "Establish a foundation for a future resale and asset exchange platform.",
];

function VisionIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-gold">
      <path
        d="M4 28V12l8-6 8 6v16M4 28h24M12 28V18h8v10M20 28V6l8 4v18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7 text-gold">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  );
}

export default function AboutMissionCards() {
  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-56 -z-10 w-325 max-w-none -rotate-6 opacity-50 select-none lg:w-[1600px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-2 lg:px-10">
        <div className="rounded-lg border border-line bg-card p-10">
          <VisionIcon />
          <h3 className="mt-4 font-display text-3xl leading-tight font-medium text-text-primary">
            Building the Future of Luxury Asset Liquidity
          </h3>
          <p className="mt-4 text-base leading-[25.6px] text-text-muted">
            VLTX aims to become a trusted name in the evaluation and
            financing of high-value luxury assets. Over time, we plan to
            strengthen our technology, expand our specialist network and
            develop a larger ecosystem for asset owners, jewellers and
            buyers. Our long-term ambition is to make eligible luxury assets
            easier to understand, access and circulate responsibly.
          </p>
        </div>

        <div className="rounded-lg border border-line bg-card p-10">
          <MissionIcon />
          <h3 className="mt-4 font-display text-3xl leading-tight font-medium text-text-primary">
            Make Value More Accessible
          </h3>
          <p className="mt-4 text-base leading-[25.6px] text-text-muted">
            Our mission is to:
          </p>
          <ul className="mt-3 flex flex-col gap-2">
            {MISSION_ITEMS.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-[25.6px] text-text-muted">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
