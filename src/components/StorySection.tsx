type StorySectionProps = {
  kicker: string;
  heading: string;
  description: string;
};

export default function StorySection({ kicker, heading, description }: StorySectionProps) {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="text-[15px] font-semibold tracking-[3.6px] text-gold uppercase">
          {kicker}
        </p>
        <h2 className="mt-3 font-display text-4xl leading-[1.15] font-semibold tracking-[-1.28px] text-text-primary sm:text-5xl lg:text-[50px]">
          {heading}
        </h2>
        <p className="mt-6 text-[15px] leading-[21.8px] text-text-secondary">
          {description}
        </p>
      </div>
    </section>
  );
}
