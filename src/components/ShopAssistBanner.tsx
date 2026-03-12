import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ShopAssistBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-charcoal">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-accent/[0.06] rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/[0.08] mb-8">
          <ShoppingCart className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Agentic Commerce by ZapSight</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-2">
          From Website to
        </h2>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-6">
          Shopping Concierge
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Gen Z expects a concierge service, a shopping assistant with a character — not just a chatbot. Shop Assist transforms your digital presence into an AI-powered shopping experience.
        </p>

        {/* CTA Button */}
        <a
          href="https://zapsight.com/case-studies/shop-assist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-accent hover:bg-orange-dark text-accent-foreground px-8 py-6 text-base font-semibold rounded-xl gap-2 group">
            Explore Shop Assist by ZapSight
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      </div>
    </section>
  );
};
