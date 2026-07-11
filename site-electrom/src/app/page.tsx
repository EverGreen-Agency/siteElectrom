import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import SolutionsGrid from "../components/SolutionsGrid";
import ServicesHorizontalScroll from "../components/ServicesHorizontalScroll";
import SlotMachineCases from "../components/SlotMachineCases";
import ImpactNumbers from "../components/ImpactNumbers";
import BlogPreview from "../components/BlogPreview";
import PartnersCarousel from "../components/PartnersCarousel";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <HeroSection />
      <TrustBar />
      <SolutionsGrid />
      <ServicesHorizontalScroll />
      <SlotMachineCases />
      <ImpactNumbers />
      <BlogPreview />
      <PartnersCarousel />
      <ContactCTA />
      <Footer />
    </main>
  );
}

