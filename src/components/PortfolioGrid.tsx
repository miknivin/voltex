import Image, { type StaticImageData } from "next/image";
import sectionVector from "../../public/images/section-vector.png";

export type PortfolioItem = {
  image: StaticImageData;
  name: string;
  spec: string;
};

type PortfolioGridProps = {
  items: PortfolioItem[];
};

export default function PortfolioGrid({ items }: PortfolioGridProps) {
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
          {items.map((item, i) => (
            <div key={`${item.name}-${i}`} className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg leading-tight font-medium text-text-primary xl:text-xl">
                  {item.name}
                </h3>
                <p className="mt-1.5 text-xs leading-5 tracking-[0.3px] text-text-mutedmore">
                  {item.spec}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
