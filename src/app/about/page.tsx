import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageIntro from "@/components/PageIntro";
import StorySection from "@/components/StorySection";
import AboutExpertise from "@/components/AboutExpertise";
import AboutMissionCards from "@/components/AboutMissionCards";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

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
          heading="A More Intelligent Relationship With Luxury"
          description="VLTX is building a specialised platform for people and businesses who own high-value assets but need greater financial flexibility. Our focus is simple: bring clarity to valuation, discipline to financing and dignity to the client experience."
        />
        <StorySection
          kicker="Our Story"
          heading="From Ownership to Opportunity"
          description="Diamonds, precious stones, jewellery, platinum and luxury watches carry more than financial value. They often represent years of work, family history, personal achievement or business capital. However, converting these assets into liquidity can be difficult. Conventional options may be limited, fragmented or influenced by where an item was purchased. VLTX is being created to offer a more focused alternative. We aim to make the process of understanding, evaluating and unlocking value from eligible luxury assets more structured, transparent and convenient."
        />
        <AboutExpertise />
        <StorySection
          kicker="For Individuals"
          heading="Financial Flexibility Without Unnecessary Exposure"
          description="For individual asset owners, VLTX offers a discreet starting point to understand the potential value of eligible possessions and explore suitable liquidity options. The experience is designed to be clear, private and respectful, whether the asset is a diamond, a piece of precious jewellery, platinum jewellery or an eligible luxury watch."
        />
        <AboutMissionCards />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
