import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import ProcessTimeline from "@/components/ProcessTimeline";
import PrincipleBand from "@/components/PrincipleBand";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Process | VLTX",
  description:
    "A clear, transparent process for unlocking liquidity from your luxury assets — from first enquiry to secure settlement.",
};

const VALUATION_PRINCIPLES = [
  {
    number: "01",
    title: "Precision",
    description:
      "We look beyond surface appearance and consider the characteristics that influence real market value.",
  },
  {
    number: "02",
    title: "Transparency",
    description:
      "We communicate the relevant steps, requirements and limitations before you make a decision.",
  },
  {
    number: "03",
    title: "Privacy",
    description:
      "Information shared with VLTX is handled with care and discretion.",
  },
  {
    number: "04",
    title: "Responsibility",
    description:
      "Every transaction is subject to proper verification, documentation and applicable legal and regulatory requirements.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageIntro
          heading="A Clear Process for Valuable Assets"
          description="The value of a luxury asset deserves a process that is careful, transparent and easy to understand. From the first enquiry to the final decision, VLTX is designed to keep you informed at every stage."
        />
        <ProcessTimeline />
        <PrincipleBand
          kicker="Trust Matters"
          heading="Our Valuation Principles"
          steps={VALUATION_PRINCIPLES}
        />
        <FinalCta
          kicker="Grab This Opportunity"
          heading="Start With a Free Preliminary Valuation"
          description="Share the basic details of your asset and let our team guide you through the next step."
          buttonText="Request a Valuation"
        />
      </main>
      <Footer />
    </>
  );
}
