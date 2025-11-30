import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Store,
  Users,
  Truck,
  PackageCheck,
  Warehouse,
  Search,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

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

export const UseCaseCarousel = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const visibleCases = () => {
    const cases = [];
    for (let i = 0; i < 3; i++) {
      cases.push(useCases[(currentIndex + i) % useCases.length]);
    }
    return cases;
  };

  return (
    <section
      ref={ref}
      id="use-cases"
      className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
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

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:flex rounded-full bg-background shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:flex rounded-full bg-background shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {visibleCases().map((useCase, index) => (
              <motion.div
                key={`${useCase.title}-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-glow-sm"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <useCase.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2">
                  {useCase.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile navigation dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {useCases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop pagination */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {useCases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-accent w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
