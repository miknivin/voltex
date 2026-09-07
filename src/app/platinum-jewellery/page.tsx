import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioGrid, { type PortfolioItem } from "@/components/PortfolioGrid";
import DataAnalytics from "@/components/DataAnalytics";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import bangles from "../../../public/images/platinum/Platinum Bangles.png";
import chain from "../../../public/images/platinum/Platinum Chain.png";
import earrings from "../../../public/images/platinum/Platinum Earrings.png";
import ring from "../../../public/images/platinum/Platinum Ring.png";

export const metadata: Metadata = {
  title: "Platinum Jewellery | VLTX",
  description:
    "Explore VLTX's live exchange of eligible platinum jewellery, plus real-time loan-to-value data.",
};

const ITEMS: PortfolioItem[] = [
  { image: bangles, name: "Platinum Bangles", spec: "CERTIFIED PLATINUM" },
  { image: chain, name: "Platinum Chain", spec: "CERTIFIED PLATINUM" },
  { image: earrings, name: "Platinum Earrings", spec: "CERTIFIED PLATINUM" },
  { image: ring, name: "Platinum Ring", spec: "CERTIFIED PLATINUM" },
];

export default function PlatinumJewelleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHeader kicker="Live Exchange" heading="Platinum Jewellery" />
        <PortfolioGrid items={ITEMS} />
        <DataAnalytics />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
