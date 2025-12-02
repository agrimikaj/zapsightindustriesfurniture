import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, TrendingDown, Target, Clock } from "lucide-react";
import demoVideo from "@/assets/impact-demo.mov";

const stats = [
  {
    value: "12–15%",
    label: "Conversion lift",
    icon: TrendingUp,
    direction: "up",
  },
  {
    value: "40%",
    label: "RSA blind spots ↓",
    icon: TrendingDown,
    direction: "down",
  },
  {
    value: "22%",
    label: "Forecast accuracy",
    icon: Target,
    direction: "up",
  },
  {
    value: "30%",
    label: "Faster replenishment",
    icon: Clock,
    direction: "up",
  },
];

export const PlatformShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="platform"
      className="py-16 md:py-20 bg-hero-gradient relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-orange-light/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            The Platform
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Real Impact, Real Numbers
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            Business-first metrics that matter to furniture retail leadership.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card-dark rounded-xl p-5 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </span>
                <span className="text-accent text-lg">
                  {stat.direction === "up" ? "↑" : "↓"}
                </span>
              </div>
              <p className="text-sm text-primary-foreground/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Interactive Video Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative group max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-orange-light/30 to-accent/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
          <div className="relative rounded-2xl overflow-hidden border border-primary-foreground/10 bg-card shadow-2xl">
            <video
              controls
              className="w-full h-auto"
            >
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-primary-foreground/50 mt-4">
            Interactive Platform Demo
          </p>
        </motion.div>

        {/* Live indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
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