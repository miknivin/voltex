import Image from "next/image";
import platinumImg from "../../public/images/emerald-theme/Platinum.jpg";
import diamondImg from "../../public/images/emerald-theme/Certified Diamonds & Diamond Jewellery.jpg";
import gemstoneImg from "../../public/images/emerald-theme/Precious Gem Stones & Jewellery.jpg";
import watchImg from "../../public/images/emerald-theme/Luxury Watches.jpg";
import sectionVector from "../../public/images/section-vector.png";

const CATEGORIES = [
  {
    image: platinumImg,
    name: "Platinum",
    description: "Platinum bars & coins, platinum jewellery",
  },
  {
    image: diamondImg,
    name: "Certified Diamonds & Diamond Jewellery",
    description: "Certified loose diamonds and finished diamond jewellery",
  },
  {
    image: gemstoneImg,
    name: "Precious Gem Stones & Jewellery",
    description: "Emeralds, rubies, sapphires and fine jewellery",
  },
  {
    image: watchImg,
    name: "Luxury Watches",
    description: "Exceptional timepieces from leading luxury houses",
  },
];

export default function WhatWeValue() {
  return (
    <section id="assets" className="relative py-20 lg:py-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 -z-10 w-375 max-w-none opacity-40 select-none lg:-top-56 lg:w-[1900px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow text-gold-deep">Selected Categories</p>
            <h2 className="section-title mt-5 text-text-primary">
              What We Value
            </h2>
          </div>
          <p className="max-w-xl text-base leading-6 text-text-muted lg:justify-self-end">
            A considered evaluation begins with understanding the details
            that make every exceptional object distinct.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-line bg-bg"
            >
              <div className="sheen relative aspect-3/4 overflow-hidden border-b border-line">
                <Image
                  src={category.image}
                  alt={category.name}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <h3 className="absolute inset-x-4 bottom-4 translate-y-3 font-display text-base leading-tight font-semibold text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="inline w-fit border-b border-transparent pb-0.5 font-display text-lg font-semibold text-text-primary transition-colors group-hover:border-gold-deep group-hover:text-gold-deep">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex w-fit items-center gap-2 text-[11px] font-semibold tracking-[1.6px] text-gold-deep uppercase">
                  Ask about this
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h13m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
