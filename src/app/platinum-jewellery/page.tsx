import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioGrid from "@/components/PortfolioGrid";
import DataAnalytics from "@/components/DataAnalytics";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { PLATINUM_ITEMS } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Platinum Jewellery | VLTX",
  description:
    "Explore VLTX's live exchange of eligible platinum jewellery, plus real-time loan-to-value data.",
};

export default function PlatinumJewelleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHeader kicker="Live Exchange" heading="Platinum Jewellery" />
        <PortfolioGrid items={PLATINUM_ITEMS} />
        <DataAnalytics />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
