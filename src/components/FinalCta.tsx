import Link from "next/link";
import GradientOrbs from "./GradientOrbs";

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
      <GradientOrbs variant="bottom-right" opacity={0.12} />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-8 rounded-2xl border border-line bg-card px-6 py-20 text-center sm:px-12">
          <p className="text-xs font-bold tracking-[6px] text-gold-deep uppercase">
            {kicker}
          </p>
          <h2 className="font-display text-5xl leading-[1.1] font-bold text-text-primary sm:text-6xl lg:text-[64px]">
            {heading}
          </h2>
          <p className="max-w-2xl text-base leading-6 text-text-muted">
            {description}
          </p>
          <Link
            href={buttonHref}
            className="mt-2 rounded-2xl bg-gradient-to-r from-gold to-gold-deep px-16 py-6 text-xs font-bold tracking-[1.2px] text-white uppercase transition-opacity hover:opacity-90"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
