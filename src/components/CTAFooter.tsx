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
      <section className="py-16 md:py-20 bg-hero-gradient relative">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <a href="https://zapsight.com/contact" target="_blank" rel="noopener noreferrer">
              <Button
                variant="hero"
                size="xl"
                className="group text-lg px-12 animate-pulse-glow"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>

          </motion.div>
        </div>
      </section>

    </footer>
  );
};