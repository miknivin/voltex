import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
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
                "radial-gradient(ellipse 70% 55% at 35% 15%, rgba(6,77,77,0.55) 0%, rgba(1,38,38,0) 70%)",
            }}
          />
          <Image
            src={sectionVector}
            alt=""
            aria-hidden
            className="pointer-events-none absolute -top-16 right-0 -z-10 w-325 max-w-none opacity-70 select-none lg:w-[1600px]"
          />

          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
              <div className="lg:pt-16">
                <h1 className="font-display text-5xl leading-[1.2] font-semibold text-white sm:text-6xl">
                  Private
                  <br />
                  Consultation.
                </h1>
                <p className="mt-6 max-w-sm text-base leading-6 text-[#d0c5af]">
                  Submit initial details for your portfolio valuation or
                  liquidity inquiry. All submissions are processed through
                  our secure, encrypted institutional gateway.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
