import Image from "next/image";
import diamondImg from "../../public/images/asset-diamond.png";
import platinumImg from "../../public/images/asset-platinum.png";
import watchImg from "../../public/images/asset-watch.png";
import sectionVector from "../../public/images/section-vector.png";

const DIAMOND = {
  image: diamondImg,
  name: "5.4ct Vivid Pink Diamond",
  spec: "IF - EXCELLENT CUT",
  price: "₹420,000",
  change: "+2.4% Est.",
};
const PATEK = {
  image: platinumImg,
  name: "Patek Philippe Ref. 5320G",
  spec: "MINT - FULL SET",
  price: "₹115,000",
  change: "+1.8% Est.",
};
const SAPPHIRE = {
  image: watchImg,
  name: "Blue Sapphire Octagon",
  spec: "12.8ct ROYAL BLUE",
  price: "₹88,500",
  change: "+0.9% Est.",
};

const ROW = [DIAMOND, DIAMOND, PATEK, PATEK, SAPPHIRE];
const ITEMS = [...ROW, ...ROW].map((item, i) => ({ ...item, key: `${item.name}-${i}` }));

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="relative overflow-hidden pb-20 lg:pb-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-32 -z-10 w-325 max-w-none rotate-12 opacity-60 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {ITEMS.map((item) => (
            <div key={item.key} className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg leading-tight font-medium text-text-primary xl:text-xl">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-5 tracking-[0.3px] text-text-mutedmore">
                    {item.spec}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-base font-medium tracking-[0.4px] text-gold xl:text-lg">
                    {item.price}
                  </p>
                  <p className="mt-1 text-[10px] tracking-[1px] text-positive">
                    {item.change}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
