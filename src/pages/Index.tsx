import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhyFurniture } from "@/components/WhyFurniture";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { UseCaseCards } from "@/components/UseCaseCards";
import { PlatformShowcase } from "@/components/PlatformShowcase";
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
      
      {/* Use Case Cards */}
      <UseCaseCards />
      
      {/* Platform Showcase with Stats & Dashboard Screenshots */}
      <PlatformShowcase />
      
      {/* CTA and Footer with About */}
      <CTAFooter />
    </main>
  );
};

export default Index;
