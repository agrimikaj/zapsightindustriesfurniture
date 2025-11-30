import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import showroomAi from "@/assets/showroom-ai.jpg";

export const BeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-4 block">
            The Transformation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Before <span className="text-muted-foreground">→</span> After
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how ZapSight transforms chaotic retail environments into
            intelligent, data-driven operations.
          </p>
        </motion.div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Image container with slider */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            {/* Before state - grayscale filter on left */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={showroomAi}
                alt="Furniture showroom before ZapSight"
                className="w-full h-full object-cover filter grayscale brightness-75"
              />
              {/* Before overlay */}
              <div className="absolute inset-0 bg-primary/40" />
              {/* Before label */}
              <div className="absolute top-6 left-6 bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-primary-foreground">
                  Before ZapSight
                </span>
              </div>
              {/* Chaos indicators */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8">
                  {["No visibility", "Guesswork", "Lost revenue"].map((text, i) => (
                    <div
                      key={text}
                      className="bg-destructive/80 backdrop-blur-sm px-3 py-2 rounded text-xs font-medium text-destructive-foreground"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* After state - full color on right */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <img
                src={showroomAi}
                alt="Furniture showroom with ZapSight AI analytics"
                className="w-full h-full object-cover"
              />
              {/* AI overlay elements */}
              <div className="absolute inset-0">
                {/* Heatmap simulation */}
                <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-electric-glow/40 rounded-full blur-xl animate-pulse" style={{ animationDelay: "0.5s" }} />

                {/* SKU tags */}
                <div className="absolute top-1/3 right-1/3 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-medium text-foreground">SKU-4521</span>
                  </div>
                  <span className="text-xs text-muted-foreground">High interest zone</span>
                </div>

                <div className="absolute bottom-1/4 left-1/4 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-accent/20">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-xs font-medium text-foreground">Dwell: 4.2m</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Above average</span>
                </div>
              </div>

              {/* After label */}
              <div className="absolute top-6 right-6 bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-sm font-semibold text-accent-foreground">
                  With ZapSight
                </span>
              </div>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent shadow-glow flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-accent-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
            </div>

            {/* Slider input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />
          </div>

          {/* Drag instruction */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            ← Drag to compare →
          </p>
        </motion.div>
      </div>
    </section>
  );
};
