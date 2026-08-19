import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Assets from "@/components/Assets";
import PrincipleBand from "@/components/PrincipleBand";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Share Your Asset",
    description:
      "Tell us about your diamond, jewellery, precious stone, platinum piece or luxury watch. You may share photographs and available documents for an initial review.",
  },
  {
    number: "02",
    title: "Receive a Preliminary Valuation",
    description:
      "Our team reviews the information provided and helps you understand the potential value of your asset. The initial valuation is complimentary.",
  },
  {
    number: "03",
    title: "Complete the Assessment",
    description:
      "Eligible assets may require additional documentation, physical inspection or specialist verification before a final assessment is made.",
  },
  {
    number: "04",
    title: "Explore Your Liquidity Options",
    description:
      "Once the assessment is complete, our team explains the available options and applicable terms, allowing you to make an informed decision.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Assets />
        <PrincipleBand
          id="process"
          kicker="The Process"
          heading="The VLTX Journey"
          description="Luxury assets deserve a process that is careful, transparent and professionally managed. At VLTX, every step is designed to protect privacy, clarify value and move with purpose."
          steps={HOW_IT_WORKS_STEPS}
        />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
