import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Store,
  Users,
  Truck,
  PackageCheck,
  Warehouse,
  Search,
  AlertTriangle,
} from "lucide-react";

const useCases = [
  {
    icon: Store,
    title: "Retail Store Monitoring",
    description:
      "Real-time visibility into customer behavior, product interactions, and staff performance across your showroom floor.",
    benefits: ["Footfall analytics", "Zone performance", "Peak hour insights"],
  },
  {
    icon: Users,
    title: "RSA Performance Management",
    description:
      "Data-driven coaching and performance tracking for retail sales associates with automated incentive calculations.",
    benefits: ["Engagement scoring", "Training triggers", "Incentive tracking"],
  },
  {
    icon: Truck,
    title: "Vendor Management",
    description:
      "Streamline supplier relationships with automated compliance tracking, delivery monitoring, and quality scoring.",
    benefits: ["Delivery accuracy", "Lead time tracking", "Quality metrics"],
  },
  {
    icon: PackageCheck,
    title: "Inventory Accuracy",
    description:
      "Eliminate discrepancies between system records and physical inventory with continuous AI-powered auditing.",
    benefits: ["Shrinkage detection", "Cycle counting", "SKU reconciliation"],
  },
  {
    icon: Warehouse,
    title: "Warehouse & PO",
    description:
      "Optimize storage layouts, track order fulfillment accuracy, and automate purchase order intelligence.",
    benefits: ["Space utilization", "Pick accuracy", "PO automation"],
  },
  {
    icon: Search,
    title: "Product Discovery",
    description:
      "Understand which products catch attention, drive consideration, and convert to sales across your catalog.",
    benefits: ["Interest mapping", "Cross-sell insights", "Trend detection"],
  },
  {
    icon: AlertTriangle,
    title: "Damage Detection",
    description:
      "AI-powered visual inspection to identify product damage, wear, and quality issues before they reach customers.",
    benefits: ["Early detection", "Quality gates", "Return prevention"],
  },
];

export const UseCaseCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="use-cases"
      className="py-16 md:py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Solutions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Use Cases
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how ZapSight transforms every aspect of furniture retail
            operations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-glow-sm hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <useCase.icon className="w-6 h-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {useCase.description}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-1.5">
                {useCase.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};