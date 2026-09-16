import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import CompanyFacts from "@/components/CompanyFacts";
import StorySection from "@/components/StorySection";
import AboutExpertise from "@/components/AboutExpertise";
import AboutMissionCards from "@/components/AboutMissionCards";
import Leadership from "@/components/Leadership";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import bannerAbout from "../../../public/images/banner-about.png";

export const metadata: Metadata = {
  title: "About VLTX | Luxury Meets Liquidity",
  description:
    "VLTX is building a specialised platform for people and businesses who own high-value assets but need greater financial flexibility.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageIntro
          kicker="Our Story"
          heading="We Are Building a Better Resale Ecosystem for High Value Assets"
          description={
            <>
              Buying luxury is easy, selling it at a transparent and
              professionally assessed value is often not.{" "}
              <span className="font-semibold text-gold italic">
                VLTX exists to bridge that gap.
              </span>
            </>
          }
          bannerImage={bannerAbout}
        />
        <CompanyFacts />
        <StorySection
          kicker="Our Story"
          heading="From Ownership to Opportunity"
          description="Diamonds, precious stones, jewellery, platinum and luxury watches carry more than financial value. They often represent years of work, family history, personal achievement or business capital. However, converting these assets into liquidity can be difficult. Conventional options may be limited, fragmented or influenced by where an item was purchased. VLTX is being created to offer a more focused alternative. We aim to make the process of understanding, evaluating and unlocking value from eligible luxury assets more structured, transparent and convenient."
          decor="bottom-left"
        />
        <AboutExpertise />
        <StorySection
          kicker="For Individuals"
          heading="Your Asset. It's True Market Value"
          items={[
            "Platinum Articles & Platinum Jewellery",
            "Certified Diamonds & Diamonds Jewellery",
            "Precious Stones & Precious Stone Jewellery",
            "Luxury Watches",
          ]}
          decor="top-right"
        />
        <StorySection
          kicker="For Business"
          heading="Turn Slow-Moving Assets into Working Value"
          items={["Jewellers", "Retailers & Wholesalers", "Luxury Businesses"]}
          decor="bottom-right"
        />
        <AboutMissionCards />
        <Leadership />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
