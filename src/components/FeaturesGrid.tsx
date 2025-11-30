import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Users,
  Package,
  DollarSign,
  Warehouse,
  Route,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "AI Floor Monitoring",
    description:
      "Track footfall patterns, hot zones, and dwell time across your showroom in real-time.",
    highlight: "Live Heatmaps",
  },
  {
    icon: Users,
    title: "RSA Productivity AI",
    description:
      "Performance analytics, automated coaching insights, and data-driven incentive management.",
    highlight: "Team Analytics",
  },
  {
    icon: Package,
    title: "Vendor & PO Intelligence",
    description:
      "Automate accuracy checks, track delivery timelines, and optimize vendor relationships.",
    highlight: "Smart Procurement",
  },
  {
    icon: DollarSign,
    title: "Pricing & Margin Insights",
    description:
      "Identify margin leakage, optimize pricing strategies, and boost profitability per SKU.",
    highlight: "Revenue AI",
  },
  {
    icon: Warehouse,
    title: "Warehouse Ops AI",
    description:
      "Storage optimization, order accuracy tracking, and intelligent replenishment alerts.",
    highlight: "Operations Hub",
  },
  {
    icon: Route,
    title: "Customer Journey Mapping",
    description:
      "Understand what sells, what doesn't, and why. Map the complete path to purchase.",
    highlight: "Journey Intel",
  },
];

export const FeaturesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="features"
      className="py-24 md:py-32 bg-secondary/30 relative"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Platform Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Six powerful AI modules designed specifically for furniture retail
            operations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card bg-card group"
            >
              {/* Header with icon and highlight */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover indicator line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent to-accent/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};