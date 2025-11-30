import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Zap, TrendingUp } from "lucide-react";

const challenges = [
  {
    icon: Eye,
    before: "Messy inventory",
    after: "Clean visibility",
    description:
      "Transform scattered SKU data into crystal-clear inventory intelligence across every location.",
    texture: "linear-gradient(135deg, hsl(30 30% 95%) 0%, hsl(30 20% 90%) 100%)",
  },
  {
    icon: Zap,
    before: "Slow decisions",
    after: "Instant AI alerts",
    description:
      "Replace reactive management with proactive insights that reach you before problems escalate.",
    texture: "linear-gradient(135deg, hsl(25 25% 95%) 0%, hsl(25 20% 90%) 100%)",
  },
  {
    icon: TrendingUp,
    before: "Lost sales",
    after: "Data-backed actions",
    description:
      "Convert missed opportunities into revenue with AI that understands your customer journey.",
    texture: "linear-gradient(135deg, hsl(20 20% 96%) 0%, hsl(20 15% 92%) 100%)",
  },
];

export const WhyFurniture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Subtle divider at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            The Challenge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Furniture Needs{" "}
            <span className="text-gradient-dark">ZapSight</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The furniture industry operates on thin margins and complex
            logistics. Traditional tools can't keep up.
          </p>
        </motion.div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.before}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="feature-card group"
              style={{ background: challenge.texture }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <challenge.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Transformation */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-muted-foreground line-through">
                  {challenge.before}
                </span>
                <svg
                  className="w-5 h-5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <span className="text-sm font-semibold text-foreground">
                  {challenge.after}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {challenge.description}
              </p>

              {/* Decorative pattern */}
              <div className="absolute bottom-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="currentColor"
                >
                  <rect x="0" y="25" width="60" height="10" />
                  <rect x="25" y="0" width="10" height="60" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};