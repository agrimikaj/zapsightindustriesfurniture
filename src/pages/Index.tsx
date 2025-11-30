import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyFurniture } from "@/components/WhyFurniture";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { BeforeAfter } from "@/components/BeforeAfter";
import { RealImpact } from "@/components/RealImpact";
import { UseCaseCarousel } from "@/components/UseCaseCarousel";
import { CustomerQuotes } from "@/components/CustomerQuotes";
import { CTAFooter } from "@/components/CTAFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Why Furniture Needs ZapSight */}
      <WhyFurniture />
      
      {/* Core Features Grid */}
      <FeaturesGrid />
      
      {/* Before/After Transformation */}
      <BeforeAfter />
      
      {/* Real Impact Stats */}
      <RealImpact />
      
      {/* Use Case Carousel */}
      <UseCaseCarousel />
      
      {/* Customer Testimonials */}
      <CustomerQuotes />
      
      {/* CTA and Footer */}
      <CTAFooter />
    </main>
  );
};

export default Index;
