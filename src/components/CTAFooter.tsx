import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTAFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} id="about" className="relative overflow-hidden">
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

      {/* Footer Links */}
      <section className="py-12 bg-primary border-t border-primary-foreground/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      fill="hsl(217 91% 60%)"
                      stroke="hsl(217 91% 60%)"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="font-display font-bold text-xl text-primary-foreground">
                  ZapSight
                </span>
              </div>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                AI-powered retail intelligence platform designed specifically
                for the furniture industry.
              </p>
            </div>

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

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-primary-foreground mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                {["Documentation", "API", "Support", "Security"].map((item) => (
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
