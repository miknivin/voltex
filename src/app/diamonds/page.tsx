import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioGrid, { type PortfolioItem } from "@/components/PortfolioGrid";
import DataAnalytics from "@/components/DataAnalytics";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import diamondImg from "../../../public/images/asset-diamond.png";

export const metadata: Metadata = {
  title: "Diamonds | VLTX",
  description:
    "Explore VLTX's live exchange of eligible diamonds and diamond jewellery, plus real-time loan-to-value data.",
};

// Placeholder items — real photography and per-piece details to be added.
const ITEM: PortfolioItem = {
  image: diamondImg,
  name: "5.4ct Vivid Pink Diamond",
  spec: "IF - EXCELLENT CUT",
};
const ITEMS = Array.from({ length: 10 }, () => ITEM);

export default function DiamondsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHeader kicker="Live Exchange" heading="Diamonds" />
        <PortfolioGrid items={ITEMS} />
        <DataAnalytics />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
