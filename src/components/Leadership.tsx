import GradientOrbs from "./GradientOrbs";

function PortraitPlaceholder() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-14 w-14 text-gold/30">
      <circle cx="16" cy="11" r="6" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M4 28c0-6.6 5.4-12 12-12s12 5.4 12 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Leadership() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <GradientOrbs variant="bottom-left" opacity={0.1} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_2fr] lg:gap-16 lg:px-10">
        <div className="max-w-sm">
          <p className="text-xs font-bold tracking-[3.6px] text-gold-deep uppercase">
            Leadership
          </p>
          <h2 className="mt-6 font-display text-4xl font-bold text-text-primary sm:text-5xl">
            Founder &amp; Chairman
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-[14rem_1fr] sm:items-start">
          <div className="relative mx-auto w-full max-w-56 sm:mx-0">
            <div className="absolute -inset-2 border border-gold/30" aria-hidden="true" />
            <div className="relative grid aspect-4/5 w-full place-items-center rounded border border-line bg-card">
              <PortraitPlaceholder />
              <span className="sr-only">Founder and Chairman portrait to be added</span>
            </div>
          </div>

          <div className="border-t border-line pt-6 sm:border-t-0 sm:pt-0">
            <blockquote className="border-l-2 border-gold pl-5 font-display text-xl leading-snug font-semibold text-text-primary sm:text-2xl">
              &ldquo;To be the trusted bridge between luxury and liquidity.&rdquo;
            </blockquote>
            <h3 className="mt-8 font-display text-xl font-semibold text-text-primary">
              Samar Mukundhan
            </h3>
            <p className="mt-2 text-xs font-bold tracking-[2px] text-gold-deep uppercase">
              Founder &amp; Chairman · VLTX · LuxVault
            </p>
            <div className="mt-5 flex flex-col gap-4 text-base leading-7 text-text-muted">
              <p>
                An Accredited Jewellery Professional (AJP) of the Gemological
                Institute of America with over 25 years in the jewellery
                industry, Samar Mukundhan brings deep expertise in gemmology,
                diamond and precious jewellery manufacturing, merchandising
                and product evaluation.
              </p>
              <p>
                His years with a leading jewellery organisation gave him a
                rigorous understanding of craftsmanship, quality standards,
                authenticity and market value.
              </p>
              <p>
                At VLTX, he unites technical knowledge with commercial
                insight to guide the company&rsquo;s approach to expert
                valuation, transparency and trusted transactions — building a
                platform where clients can confidently unlock the value of
                their luxury assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
