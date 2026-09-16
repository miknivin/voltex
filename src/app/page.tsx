import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhatWeValue from "@/components/Assets";
import StatsBand from "@/components/StatsBand";
import HowItWorks from "@/components/HowItWorks";
import WhyVltx from "@/components/WhyVltx";
import AboutVltxTeaser from "@/components/AboutVltxTeaser";
import Leadership from "@/components/Leadership";
import FAQ from "@/components/FAQ";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhatWeValue />
        <StatsBand />
        <HowItWorks />
        <WhyVltx />
        <AboutVltxTeaser />
        <Leadership />
        <FAQ />
        <FinalCta
          kicker="Begin the Conversation"
          heading="What Is Your Luxury Asset Truly Worth?"
          description="Start with a confidential conversation and discover a clear path to understanding your asset's value."
          buttonText="Get a Valuation"
        />
      </main>
      <Footer />
    </>
  );
}
