import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioGrid from "@/components/PortfolioGrid";
import DataAnalytics from "@/components/DataAnalytics";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { GEMSTONE_ITEMS } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Precious Gem Stones & Jewellery | VLTX",
  description:
    "Explore VLTX's live exchange of eligible emeralds, rubies, sapphires and fine gemstone jewellery, plus real-time loan-to-value data.",
};

export default function PreciousGemstonesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHeader kicker="Live Exchange" heading="Precious Gem Stones & Jewellery" />
        <PortfolioGrid items={GEMSTONE_ITEMS} />
        <DataAnalytics />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
