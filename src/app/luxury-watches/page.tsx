import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioGrid, { type PortfolioItem } from "@/components/PortfolioGrid";
import DataAnalytics from "@/components/DataAnalytics";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import aigner from "../../../public/images/watches/AIGNER.png";
import audemarsPiguet from "../../../public/images/watches/Audemars Piguet.png";
import balmain from "../../../public/images/watches/BALMAIN.png";
import cartier from "../../../public/images/watches/Cartier.png";
import graffDiamonds from "../../../public/images/watches/Graff Diamonds Hallucination.png";
import jacobCo from "../../../public/images/watches/Jacob & Co.png";
import patekPhilippe from "../../../public/images/watches/Patek Philippe.png";
import rolex from "../../../public/images/watches/Rolex.png";

export const metadata: Metadata = {
  title: "Luxury Watches | VLTX",
  description:
    "Explore VLTX's live exchange of eligible luxury watches, plus real-time loan-to-value data.",
};

const ITEMS: PortfolioItem[] = [
  { image: aigner, name: "AIGNER", spec: "CERTIFIED AUTHENTIC" },
  { image: audemarsPiguet, name: "Audemars Piguet", spec: "CERTIFIED AUTHENTIC" },
  { image: balmain, name: "BALMAIN", spec: "CERTIFIED AUTHENTIC" },
  { image: cartier, name: "Cartier", spec: "CERTIFIED AUTHENTIC" },
  { image: graffDiamonds, name: "Graff Diamonds Hallucination", spec: "CERTIFIED AUTHENTIC" },
  { image: jacobCo, name: "Jacob & Co.", spec: "CERTIFIED AUTHENTIC" },
  { image: patekPhilippe, name: "Patek Philippe", spec: "CERTIFIED AUTHENTIC" },
  { image: rolex, name: "Rolex", spec: "CERTIFIED AUTHENTIC" },
];

export default function LuxuryWatchesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHeader kicker="Live Exchange" heading="Luxury Watches" />
        <PortfolioGrid items={ITEMS} />
        <DataAnalytics />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
