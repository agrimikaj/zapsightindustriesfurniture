import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import zapsightLogo from "@/assets/zapsight-logo.png";

export const CTAFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Main CTA Section */}
      <section className="py-24 md:py-32 bg-hero-gradient relative">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Ready to transform every store into an{" "}
              <span className="text-gradient">intelligent store</span>?
            </h2>

            <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
              See ZapSight in action with a personalized demo tailored to your
              furniture retail operations.
            </p>

            {/* CTA Button */}
            <Button
              variant="hero"
              size="xl"
              className="group text-lg px-12 animate-pulse-glow"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>

            {/* Trust note */}
            <p className="text-sm text-primary-foreground/50 mt-6">
              30-minute call • No commitment • Custom insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section id="about" className="py-12 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-10">
            {/* Brand & About */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={zapsightLogo}
                  alt="ZapSight Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="font-display font-bold text-xl text-primary-foreground">
                  ZapSight
                </span>
              </div>
              <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-md mb-4">
                ZapSight is an AI-powered retail intelligence platform designed specifically
                for the furniture industry. We help retailers transform their operations
                with real-time insights, predictive analytics, and actionable intelligence
                across showrooms, warehouses, and supply chains.
              </p>
              <p className="text-sm text-primary-foreground/50">
                Empowering furniture retailers to make smarter decisions, faster.
              </p>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-8">
              {/* Product */}
              <div>
                <h4 className="font-semibold text-primary-foreground mb-4">
                  Product
                </h4>
                <ul className="space-y-2">
                  {["Features", "Use Cases", "Pricing", "Integrations"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold text-primary-foreground mb-4">
                  Company
                </h4>
                <ul className="space-y-2">
                  {["About", "Careers", "Blog", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © 2024 ZapSight. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};