import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, EyeOff, TrendingUp, Users, Package, AlertTriangle } from "lucide-react";

export const BeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Memoize shelf data to prevent re-renders
  const shelfData = useMemo(() => [
    { w: "w-16", h: "h-20", color: "bg-stone-600" },
    { w: "w-20", h: "h-24", color: "bg-stone-500" },
    { w: "w-14", h: "h-16", color: "bg-stone-700" },
    { w: "w-18", h: "h-28", color: "bg-stone-600" },
    { w: "w-24", h: "h-20", color: "bg-stone-500" },
    { w: "w-16", h: "h-32", color: "bg-stone-600" },
    { w: "w-20", h: "h-18", color: "bg-stone-700" },
    { w: "w-14", h: "h-24", color: "bg-stone-500" },
  ], []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
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
            className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl border border-border/50 select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchMove={handleTouchMove}
          >
            {/* BEFORE - Raw Store View */}
            <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950">
              {/* Floor grid */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              {/* Store layout - furniture items */}
              <div className="absolute inset-0 p-8">
                {/* Row 1 */}
                <div className="flex gap-6 mb-6">
                  <div className="w-32 h-20 bg-stone-700/60 rounded-lg" />
                  <div className="w-40 h-24 bg-stone-600/60 rounded-lg" />
                  <div className="w-28 h-18 bg-stone-700/60 rounded-lg" />
                  <div className="w-36 h-22 bg-stone-600/60 rounded-lg" />
                </div>
                {/* Row 2 */}
                <div className="flex gap-6 mb-6 ml-12">
                  <div className="w-44 h-28 bg-stone-600/60 rounded-lg" />
                  <div className="w-32 h-20 bg-stone-700/60 rounded-lg" />
                  <div className="w-48 h-24 bg-stone-600/60 rounded-lg" />
                </div>
                {/* Row 3 */}
                <div className="flex gap-6 ml-4">
                  <div className="w-36 h-24 bg-stone-700/60 rounded-lg" />
                  <div className="w-40 h-20 bg-stone-600/60 rounded-lg" />
                  <div className="w-32 h-28 bg-stone-700/60 rounded-lg" />
                  <div className="w-44 h-22 bg-stone-600/60 rounded-lg" />
                </div>
              </div>

              {/* Before Label & Info */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-stone-900/90 border border-stone-700 rounded-lg">
                <EyeOff className="w-4 h-4 text-stone-400" />
                <span className="text-sm font-semibold text-stone-300">RAW VIEW</span>
              </div>

              {/* Problem indicators */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-900/80 rounded-lg">
                  <AlertTriangle className="w-3.5 h-3.5 text-stone-500" />
                  <span className="text-xs text-stone-400">No footfall data</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-900/80 rounded-lg">
                  <AlertTriangle className="w-3.5 h-3.5 text-stone-500" />
                  <span className="text-xs text-stone-400">Unknown hot zones</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-stone-900/80 rounded-lg">
                  <AlertTriangle className="w-3.5 h-3.5 text-stone-500" />
                  <span className="text-xs text-stone-400">Blind inventory</span>
                </div>
              </div>
            </div>

            {/* AFTER - AI Enhanced View */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              {/* Animated grid */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(rgba(255,136,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,136,0,0.3) 1px, transparent 1px)',
                  backgroundSize: '40px 40px'
                }} />
              </div>

              {/* Store layout with AI overlays */}
              <div className="absolute inset-0 p-8">
                {/* Row 1 with AI tags */}
                <div className="flex gap-6 mb-6">
                  <div className="w-32 h-20 bg-accent/20 border-2 border-accent/60 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">12</span>
                    </div>
                  </div>
                  <div className="w-40 h-24 bg-accent/30 border-2 border-accent rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-[10px] font-bold text-primary">28</span>
                    </div>
                  </div>
                  <div className="w-28 h-18 bg-accent/15 border-2 border-accent/40 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent/70 rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">5</span>
                    </div>
                  </div>
                  <div className="w-36 h-22 bg-accent/25 border-2 border-accent/70 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">19</span>
                    </div>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="flex gap-6 mb-6 ml-12">
                  <div className="w-44 h-28 bg-accent/35 border-2 border-accent rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-[10px] font-bold text-primary">34</span>
                    </div>
                  </div>
                  <div className="w-32 h-20 bg-accent/20 border-2 border-accent/50 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent/60 rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">8</span>
                    </div>
                  </div>
                  <div className="w-48 h-24 bg-accent/25 border-2 border-accent/70 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">22</span>
                    </div>
                  </div>
                </div>
                {/* Row 3 */}
                <div className="flex gap-6 ml-4">
                  <div className="w-36 h-24 bg-accent/20 border-2 border-accent/50 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent/70 rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">11</span>
                    </div>
                  </div>
                  <div className="w-40 h-20 bg-accent/30 border-2 border-accent rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">26</span>
                    </div>
                  </div>
                  <div className="w-32 h-28 bg-accent/15 border-2 border-accent/40 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent/60 rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">7</span>
                    </div>
                  </div>
                  <div className="w-44 h-22 bg-accent/25 border-2 border-accent/60 rounded-lg relative">
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-bold text-primary">18</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Heatmap overlays */}
              <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-accent/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-accent/25 rounded-full blur-2xl" />

              {/* After Label */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-accent border border-accent-foreground/20 rounded-lg">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">AI ENHANCED</span>
              </div>

              {/* Stats Panel */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg border border-primary-foreground/10">
                  <Users className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-[10px] text-primary-foreground/60">Active Visitors</p>
                    <p className="text-sm font-bold text-primary-foreground">47</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg border border-primary-foreground/10">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-[10px] text-primary-foreground/60">Conversion</p>
                    <p className="text-sm font-bold text-primary-foreground">+12%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-lg border border-primary-foreground/10">
                  <Package className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-[10px] text-primary-foreground/60">SKU Accuracy</p>
                    <p className="text-sm font-bold text-primary-foreground">94%</p>
                  </div>
                </div>
              </div>

              {/* Bottom insights */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/90 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-primary">12 Hot Zones</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/90 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-primary">Real-time Tracking</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/90 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-primary">AI Insights</span>
                </div>
              </div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20"
              style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
            >
              {/* Handle knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-accent">
                <div className="flex gap-1">
                  <div className="w-0.5 h-5 bg-accent rounded-full" />
                  <div className="w-0.5 h-5 bg-accent rounded-full" />
                  <div className="w-0.5 h-5 bg-accent rounded-full" />
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
