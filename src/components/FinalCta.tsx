import Image from "next/image";
import Link from "next/link";
import sectionVector from "../../public/images/section-vector.png";

type FinalCtaProps = {
  kicker?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
};

export default function FinalCta({
  kicker = "Begin the Conversation",
  heading = "Value, When You Need It",
  description = "From diamonds and precious jewellery to platinum and exceptional timepieces, VLTX helps you explore the potential held within the assets you already own.",
  buttonText = "Speak With Our Team",
  buttonHref = "/contact",
}: FinalCtaProps) {
  return (
    <section id="contact" className="relative overflow-hidden py-20 lg:py-28">
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-40 -z-10 w-325 max-w-none -rotate-12 opacity-40 select-none lg:w-[1600px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-line bg-card px-6 py-20 text-center sm:px-12">
          <p className="eyebrow justify-center text-gold-deep">{kicker}</p>
          <h2 className="font-display text-3xl leading-[1.08] font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="max-w-2xl text-base leading-6 text-text-muted">
            {description}
          </p>
          <Link
            href={buttonHref}
            className="mt-2 rounded-2xl bg-gradient-to-r from-gold to-gold-deep px-16 py-6 text-xs font-bold tracking-[1.2px] text-[#3c2f00] uppercase transition-opacity hover:opacity-90"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
