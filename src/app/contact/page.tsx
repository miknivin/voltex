import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ValuationForm from "@/components/ValuationForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";
import sectionVector from "../../../public/images/section-vector.png";

export const metadata: Metadata = {
  title: "Contact VLTX | Luxury Meets Liquidity",
  description:
    "Submit initial details for your portfolio valuation or liquidity inquiry through VLTX's secure, encrypted institutional gateway.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden pt-36 pb-20 lg:pt-44">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 35% 15%, var(--color-line-soft) 0%, transparent 70%)",
            }}
          />
          <Image
            src={sectionVector}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -top-16 right-0 -z-10 w-325 max-w-none opacity-70 select-none lg:w-[1600px]"
          />

          <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
            <h1 className="section-title text-text-primary">
              Private <span className="text-gold-deep">Consultation.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-lg text-base leading-6 text-text-muted">
              Submit initial details for your portfolio valuation or
              liquidity inquiry. All submissions are processed through our
              secure, encrypted institutional gateway.
            </p>

            <div className="mt-12 text-left">
              <ValuationForm />
            </div>
          </div>
        </section>

        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
