import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioGrid from "@/components/PortfolioGrid";
import DataAnalytics from "@/components/DataAnalytics";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import { WATCH_ITEMS } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Luxury Watches | VLTX",
  description:
    "Explore VLTX's live exchange of eligible luxury watches, plus real-time loan-to-value data.",
};

export default function LuxuryWatchesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHeader kicker="Live Exchange" heading="Luxury Watches" />
        <PortfolioGrid items={WATCH_ITEMS} />
        <DataAnalytics />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
