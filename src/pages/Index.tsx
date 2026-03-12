import { Hero } from "@/components/Hero";
import { WhyFurniture } from "@/components/WhyFurniture";
import { ShopAssistBanner } from "@/components/ShopAssistBanner";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { BeforeAfter } from "@/components/BeforeAfter";
import { UseCaseCards } from "@/components/UseCaseCards";
import { PlatformShowcase } from "@/components/PlatformShowcase";
import { CTAFooter } from "@/components/CTAFooter";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />
      
      
      {/* Hero Section */}
      <Hero />
      
      {/* Why Furniture Needs ZapSight */}
      <WhyFurniture />
      
      {/* Shop Assist Banner */}
      <ShopAssistBanner />
      
      {/* Core Features Grid */}
      <FeaturesGrid />
      
      {/* Before/After Slider */}
      <BeforeAfter />
      
      {/* Use Case Cards */}
      <UseCaseCards />
      
      {/* Platform Showcase with Stats & Dashboard Screenshots */}
      <PlatformShowcase />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* CTA and Footer with About */}
      <CTAFooter />
    </main>
  );
};

export default Index;
