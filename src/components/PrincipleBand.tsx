import Image from "next/image";
import sectionVector from "../../public/images/section-vector.png";

type Step = {
  number: string;
  title: string;
  description: string;
};

type PrincipleBandProps = {
  id?: string;
  kicker: string;
  heading: string;
  description?: string;
  steps: Step[];
};

export default function PrincipleBand({
  id,
  kicker,
  heading,
  description,
  steps,
}: PrincipleBandProps) {
  return (
    <section
      id={id}
      className="relative z-0 overflow-hidden border-y border-line bg-bg-band py-20 text-white lg:py-28"
    >
      <Image
        src={sectionVector}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -top-16 left-[-10%] -z-10 w-325 max-w-none rotate-6 opacity-40 select-none lg:w-[1600px]"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-16 lg:px-10">
        <div className="max-w-sm">
          <p className="eyebrow text-white/80">{kicker}</p>
          <h2 className="section-title mt-5 text-white">{heading}</h2>
          {description && (
            <p className="mt-7 text-base leading-6 text-white/85">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-6">
              <div className="flex h-8.5 w-12 items-center justify-center rounded-lg bg-bg text-lg font-bold text-gold-deep">
                {step.number}
              </div>
              <h3 className="text-[28px] leading-[36.4px] font-medium text-white">
                {step.title}
              </h3>
              <p className="text-base leading-6 text-white/85">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
