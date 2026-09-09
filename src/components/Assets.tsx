import Image from "next/image";
import Link from "next/link";
import diamondImg from "../../public/images/asset-diamond.png";
import platinumImg from "../../public/images/platinum/Platinum Bangles.png";
import watchImg from "../../public/images/watches/AIGNER.png";
import sectionVector from "../../public/images/section-vector.png";

const ASSETS = [
  {
    image: diamondImg,
    name: "Diamonds",
    description:
      "Loose diamonds and diamond jewellery assessed through a careful review of quality, authenticity and documentation.",
    href: "/diamonds",
  },
  {
    image: platinumImg,
    name: "Platinum Jewellery",
    description:
      "Platinum pieces assessed for their traits and worth, free from original jeweller restrictions.",
    href: "/platinum-jewellery",
  },
  {
    image: watchImg,
    name: "Luxury Watches",
    description:
      "Exceptional timepieces evaluated for authenticity, condition, documentation, and market demand.",
    href: "/luxury-watches",
  },
];

export default function Assets() {
  return (
    <section id="assets" className="relative py-20 lg:py-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 -z-10 w-375 max-w-none opacity-40 select-none lg:-top-56 lg:w-[1900px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[1.2px] text-gold uppercase">
              Selected Categories
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-text-primary sm:text-5xl">
              Assets We Evaluate
            </h2>
          </div>
          <Link
            href="/assets"
            className="text-[15px] font-bold tracking-[1.2px] text-gold uppercase"
          >
            Explore Eligible Assets
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ASSETS.map((asset) => (
            <Link
              key={asset.name}
              href={asset.href}
              className="group flex flex-col gap-6"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={asset.image}
                  alt={asset.name}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <h3 className="text-[28px] leading-[36.4px] font-medium text-text-primary transition-colors group-hover:text-gold">
                  {asset.name}
                </h3>
                <p className="mt-1 max-w-xs text-base leading-6 text-text-mutedmore">
                  {asset.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
