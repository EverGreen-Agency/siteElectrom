import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import SolutionsGrid from "../components/SolutionsGrid";
import ServicesHorizontalScroll from "../components/ServicesHorizontalScroll";
import SlotMachineCases from "../components/SlotMachineCases";
import ImpactNumbers from "../components/ImpactNumbers";
import BlogPreview from "../components/BlogPreview";
import PartnersCarousel from "../components/PartnersCarousel";
import ContactCTA from "../components/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-petrol">
      <HeroSection />
      <TrustBar />
      <SolutionsGrid />
      <ServicesHorizontalScroll />
      <SlotMachineCases />
      <ImpactNumbers />
      <BlogPreview />
      <PartnersCarousel />
      <ContactCTA />
    </div>
  );
}

