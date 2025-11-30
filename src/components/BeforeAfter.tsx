import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export const BeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-6">
            Visual Transformation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            See the <span className="text-gradient">ZapSight difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Drag the slider to see how ZapSight transforms raw store footage into actionable intelligence.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative aspect-video rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl border border-border/50 select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchMove={handleTouchMove}
          >
            {/* Before Image (Chaotic Store) */}
            <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/80">
              {/* Simulated chaotic store view */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Store shelves - chaotic */}
                  <div className="absolute inset-8 grid grid-cols-4 gap-4 opacity-60">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-foreground/10 rounded-lg"
                        style={{
                          height: `${40 + Math.random() * 40}%`,
                          marginTop: `${Math.random() * 30}%`,
                        }}
                      />
                    ))}
                  </div>
                  {/* Before label */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-destructive/90 text-destructive-foreground rounded-lg font-semibold text-sm">
                    BEFORE
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-foreground/60 text-sm font-medium">
                      No visibility • Guesswork decisions • Lost opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* After Image (AI-Enhanced) */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {/* Simulated AI-enhanced view */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Store shelves - organized with AI overlays */}
                  <div className="absolute inset-8 grid grid-cols-4 gap-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-accent/30 rounded-lg border border-accent/50 relative overflow-hidden"
                        style={{ height: "60%" }}
                      >
                        {/* AI tag */}
                        <div className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full animate-pulse" />
                      </div>
                    ))}
                  </div>
                  {/* Heatmap overlay */}
                  <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-accent/40 rounded-full blur-xl" />
                  <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-accent/30 rounded-full blur-xl" />
                  {/* After label */}
                  <div className="absolute top-6 left-6 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold text-sm">
                    AFTER
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute top-6 right-6 space-y-2">
                    <div className="px-3 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-lg text-xs text-primary-foreground font-medium">
                      📊 12 Hot Zones Detected
                    </div>
                    <div className="px-3 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-lg text-xs text-primary-foreground font-medium">
                      👥 47 Active Visitors
                    </div>
                    <div className="px-3 py-1.5 bg-primary-foreground/20 backdrop-blur-sm rounded-lg text-xs text-primary-foreground font-medium">
                      ⚡ 94% SKU Accuracy
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-primary-foreground/90 text-sm font-medium">
                      Real-time insights • AI-powered decisions • Maximized revenue
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent shadow-lg cursor-ew-resize z-20"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              {/* Handle knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-xl border-4 border-primary-foreground/20">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-4 bg-accent-foreground rounded-full" />
                  <div className="w-0.5 h-4 bg-accent-foreground rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            ← Drag the slider to compare →
          </p>
        </motion.div>
      </div>
    </section>
  );
};
