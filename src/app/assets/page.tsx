import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PortfolioHeader from "@/components/PortfolioHeader";
import PortfolioGrid from "@/components/PortfolioGrid";
import DataAnalytics from "@/components/DataAnalytics";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Featured Portfolio | VLTX",
  description:
    "Explore VLTX's live exchange of eligible diamonds, jewellery and luxury watches, plus real-time loan-to-value data.",
};

export default function AssetsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHeader />
        <PortfolioGrid />
        <DataAnalytics />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
