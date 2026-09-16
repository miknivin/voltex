import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyVltx from "@/components/WhyVltx";
import Services from "@/components/Services";
import Assets from "@/components/Assets";
import StatsBand from "@/components/StatsBand";
import PrincipleBand from "@/components/PrincipleBand";
import Testimonials from "@/components/Testimonials";
import Leadership from "@/components/Leadership";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const HOW_IT_WORKS_STEPS = [
  {
    number: "01",
    title: "Share",
    description: "Tell us what you want to sell.",
  },
  {
    number: "02",
    title: "Evaluate",
    description:
      "Our specialists assess the asset and supporting documents & test.",
  },
  {
    number: "03",
    title: "Verify",
    description: "Physical verification and authentication, where required.",
  },
  {
    number: "04",
    title: "Get Your Offer",
    description: "Receive a transparent resale offer.",
  },
  {
    number: "05",
    title: "Sell or Lock & Receive the Payment",
    description: "Accept the offer and complete the transaction securely.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhyVltx />
        <Services />
        <Assets />
        <StatsBand />
        <PrincipleBand
          id="process"
          kicker="The Process"
          heading="The VLTX Journey"
          description="Luxury assets deserve a process that is careful, transparent and professionally managed. At VLTX, every step is designed to protect privacy, clarify value and move with purpose."
          steps={HOW_IT_WORKS_STEPS}
        />
        <Leadership />
        <Testimonials />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
