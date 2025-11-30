import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, TrendingDown, Target, Clock } from "lucide-react";

const stats = [
  {
    value: "12–15%",
    label: "Conversion lift",
    icon: TrendingUp,
    direction: "up",
    description: "Average increase in store conversion rates",
  },
  {
    value: "40%",
    label: "RSA blind spots",
    icon: TrendingDown,
    direction: "down",
    description: "Reduction in missed customer interactions",
  },
  {
    value: "22%",
    label: "Forecast accuracy",
    icon: Target,
    direction: "up",
    description: "Improvement in store-level demand prediction",
  },
  {
    value: "30%",
    label: "Faster replenishment",
    icon: Clock,
    direction: "up",
    description: "Reduction in stockout response time",
  },
];

export const RealImpact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="impact"
      className="py-24 md:py-32 bg-hero-gradient relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-electric-glow/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            Proven Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Real Impact, Real Numbers
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Business-first metrics that matter to furniture retail leadership.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-dark rounded-2xl p-6 text-center"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center">
                <stat.icon
                  className={`w-6 h-6 ${
                    stat.direction === "up" ? "text-accent" : "text-accent"
                  }`}
                />
              </div>

              {/* Value */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
                  {stat.value}
                </span>
                {stat.direction === "up" ? (
                  <span className="text-accent text-xl">↑</span>
                ) : (
                  <span className="text-accent text-xl">↓</span>
                )}
              </div>

              {/* Label */}
              <h3 className="font-semibold text-primary-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-primary-foreground/60">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dashboard preview hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-foreground/50 text-sm mb-4">
            See these metrics live in your personalized dashboard
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/5">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Real-time data • Updated every 5 minutes
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
