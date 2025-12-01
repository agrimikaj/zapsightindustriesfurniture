import { useState, useRef, useEffect, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Eye, 
  EyeOff, 
  TrendingUp, 
  Users, 
  Package, 
  AlertTriangle,
  Scan,
  Layers,
  BarChart3,
  GripVertical
} from "lucide-react";

export const BeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Furniture items for the store layout
  const furnitureItems = useMemo(() => [
    { id: 1, x: 8, y: 15, w: 18, h: 12, type: "sofa", visitors: 28, trending: true, name: "3-Seater Sofa" },
    { id: 2, x: 32, y: 10, w: 14, h: 10, type: "chair", visitors: 12, lowStock: true, name: "Accent Chair" },
    { id: 3, x: 52, y: 12, w: 20, h: 14, type: "sectional", visitors: 34, trending: true, name: "L-Shape Sectional" },
    { id: 4, x: 78, y: 15, w: 12, h: 10, type: "table", visitors: 8, name: "Coffee Table" },
    { id: 5, x: 10, y: 38, w: 16, h: 14, type: "bed", visitors: 22, name: "King Bed Frame" },
    { id: 6, x: 35, y: 35, w: 22, h: 16, type: "dining", visitors: 45, trending: true, name: "Dining Set" },
    { id: 7, x: 65, y: 40, w: 15, h: 12, type: "cabinet", visitors: 15, lowStock: true, name: "Storage Cabinet" },
    { id: 8, x: 12, y: 65, w: 18, h: 12, type: "desk", visitors: 19, name: "Office Desk" },
    { id: 9, x: 38, y: 62, w: 14, h: 14, type: "armchair", visitors: 11, name: "Recliner" },
    { id: 10, x: 58, y: 68, w: 20, h: 10, type: "shelf", visitors: 7, name: "Wall Shelf" },
    { id: 11, x: 82, y: 55, w: 10, h: 18, type: "lamp", visitors: 5, name: "Floor Lamp" },
  ], []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    setShowTooltip(true);
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
      setTimeout(() => setShowTooltip(false), 1500);
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  // Calculate comparison stats based on slider position
  const beforePercentage = Math.round(100 - sliderPosition);
  const afterPercentage = Math.round(sliderPosition);

  return (
    <section ref={ref} className="hidden md:block py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-6">
            Visual Transformation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Before ZapSight → After ZapSight
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how AI transforms your furniture operations: from blind spots and guesswork to real-time, actionable intelligence.
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Instructions - Above slider */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent/50" />
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <span className="text-accent">←</span>
              Drag the slider to compare
              <span className="text-accent">→</span>
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent/50" />
          </div>

          <div
            ref={containerRef}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl border border-accent/20 select-none"
            style={{ boxShadow: "0 25px 50px -12px hsl(24 95% 53% / 0.15), 0 0 0 1px hsl(24 95% 53% / 0.1)" }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchStart={handleMouseDown}
            onTouchMove={handleTouchMove}
          >
            {/* Background Image Layer */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80')`,
              }}
            />

            {/* ============ BEFORE - Problem State ============ */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(145deg, hsl(var(--charcoal)) 0%, hsl(20 15% 15%) 50%, hsl(20 20% 8%) 100%)" }}>
              {/* Soft red tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-red-950/30" />
              
              {/* Floor grid - subtle */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }} />
              </div>

              {/* Furniture items - muted, no structure */}
              {furnitureItems.map((item) => (
                <div
                  key={item.id}
                  className="absolute rounded-lg transition-all duration-300"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    width: `${item.w}%`,
                    height: `${item.h}%`,
                    background: 'linear-gradient(135deg, rgba(60,50,80,0.6) 0%, rgba(40,30,60,0.5) 100%)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)',
                  }}
                />
              ))}

              {/* Dark patches - representing blind spots */}
              <div className="absolute top-[20%] left-[15%] w-24 h-24 bg-black/40 rounded-full blur-xl" />
              <div className="absolute bottom-[25%] right-[20%] w-32 h-28 bg-black/35 rounded-full blur-xl" />
              <div className="absolute top-[50%] left-[45%] w-20 h-20 bg-black/30 rounded-full blur-xl" />

              {/* Before Label */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-foreground/90 border border-foreground/20 rounded-xl backdrop-blur-sm">
                <EyeOff className="w-4 h-4 text-muted" />
                <span className="text-sm font-semibold text-background tracking-wide">BEFORE</span>
              </div>

              {/* Problem Labels */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 md:gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-foreground/80 border border-destructive/20 rounded-lg backdrop-blur-sm">
                  <div className="w-2 h-2 bg-destructive/60 rounded-full" />
                  <span className="text-xs font-medium text-muted">Low Visibility</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-foreground/80 border border-destructive/20 rounded-lg backdrop-blur-sm">
                  <AlertTriangle className="w-3 h-3 text-destructive/60" />
                  <span className="text-xs font-medium text-muted">Manual Guesswork</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-foreground/80 border border-destructive/20 rounded-lg backdrop-blur-sm">
                  <Package className="w-3 h-3 text-destructive/60" />
                  <span className="text-xs font-medium text-muted">No SKU Tracking</span>
                </div>
              </div>
            </div>

            {/* ============ AFTER - AI Enhanced ============ */}
            <div
              className="absolute inset-0"
              style={{ 
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                background: "linear-gradient(145deg, hsl(var(--charcoal)) 0%, hsl(20 12% 12%) 50%, hsl(var(--charcoal)) 100%)"
              }}
            >
              {/* Background Image with orange tint */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-25"
                style={{ 
                  backgroundImage: `url('https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80')`,
                }}
              />

              {/* Orange ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5" />
              
              {/* AI Grid - orange themed */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(hsl(24 95% 53% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(24 95% 53% / 0.3) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }} />
              </div>

              {/* Animated scan line */}
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* Furniture items with AI overlays */}
              {furnitureItems.map((item) => (
                <div
                  key={item.id}
                  className="absolute rounded-lg transition-all duration-300 group"
                  style={{
                    left: `${item.x}%`,
                    top: `${item.y}%`,
                    width: `${item.w}%`,
                    height: `${item.h}%`,
                  }}
                >
                  {/* Furniture block with AI glow */}
                  <div 
                    className="w-full h-full rounded-lg border-2 transition-all duration-300"
                    style={{
                      background: item.trending 
                        ? 'linear-gradient(135deg, hsl(24 95% 53% / 0.25) 0%, hsl(28 100% 60% / 0.15) 100%)'
                        : 'linear-gradient(135deg, hsl(24 95% 53% / 0.15) 0%, hsl(24 95% 53% / 0.08) 100%)',
                      borderColor: item.trending ? 'hsl(24 95% 53% / 0.7)' : 'hsl(24 95% 53% / 0.4)',
                      boxShadow: item.trending 
                        ? '0 0 20px hsl(24 95% 53% / 0.3), inset 0 1px 1px rgba(255,255,255,0.1)'
                        : '0 0 10px hsl(24 95% 53% / 0.15), inset 0 1px 1px rgba(255,255,255,0.05)',
                    }}
                  >
                    {/* Bounding box corners */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-accent" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-accent" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-accent" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-accent" />
                  </div>

                  {/* SKU Tag */}
                  <div 
                    className="absolute -top-2 -right-2 px-2 py-1 rounded-md text-[9px] font-bold tracking-wide flex items-center gap-1 bg-accent text-accent-foreground"
                    style={{
                      boxShadow: '0 2px 8px hsl(24 95% 53% / 0.4)',
                    }}
                  >
                    <span>{item.visitors}</span>
                    {item.trending && <TrendingUp className="w-2.5 h-2.5" />}
                  </div>

                  {/* Info chip for special items */}
                  {item.lowStock && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-amber-500/90 rounded text-[8px] font-semibold text-white whitespace-nowrap">
                      Low stock
                    </div>
                  )}
                  {item.trending && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-accent/90 rounded text-[8px] font-semibold text-accent-foreground whitespace-nowrap">
                      Trending item
                    </div>
                  )}
                </div>
              ))}

              {/* Heatmap overlays - orange/amber gradients */}
              <div className="absolute top-[25%] left-[35%] w-40 h-40 bg-gradient-radial from-accent/25 via-orange-500/10 to-transparent rounded-full blur-2xl animate-pulse" />
              <div className="absolute bottom-[30%] right-[25%] w-32 h-32 bg-gradient-radial from-amber-500/20 via-accent/10 to-transparent rounded-full blur-xl" />
              <div className="absolute top-[50%] left-[55%] w-28 h-28 bg-gradient-radial from-orange-500/20 to-transparent rounded-full blur-xl" />

              {/* Particle flow effect - chaos to clarity */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent/60 rounded-full"
                    initial={{ x: "-10%", y: `${20 + i * 12}%`, opacity: 0 }}
                    animate={{ 
                      x: "110%", 
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>

              {/* After Label */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-accent border border-accent/30 rounded-xl backdrop-blur-sm shadow-lg" style={{ boxShadow: "var(--shadow-glow-sm)" }}>
                <Eye className="w-4 h-4 text-accent-foreground" />
                <span className="text-sm font-semibold text-accent-foreground tracking-wide">AI POWERED</span>
              </div>

              {/* Stats Panel */}
              <div className="absolute top-4 right-4 space-y-2">
                <div className="flex items-center gap-3 px-3 py-2 bg-foreground/80 backdrop-blur-sm rounded-lg border border-accent/20">
                  <Users className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-[10px] text-muted">Active Visitors</p>
                    <p className="text-sm font-bold text-background">47</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 bg-foreground/80 backdrop-blur-sm rounded-lg border border-accent/20">
                  <BarChart3 className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-[10px] text-muted">Conversion</p>
                    <p className="text-sm font-bold text-background">+12%</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 bg-foreground/80 backdrop-blur-sm rounded-lg border border-accent/20">
                  <Scan className="w-4 h-4 text-accent" />
                  <div>
                    <p className="text-[10px] text-muted">SKU Accuracy</p>
                    <p className="text-sm font-bold text-background">94%</p>
                  </div>
                </div>
              </div>

              {/* Bottom insight labels */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 md:gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-accent rounded-lg shadow-lg" style={{ boxShadow: "var(--shadow-glow-sm)" }}>
                  <Layers className="w-3 h-3 text-accent-foreground" />
                  <span className="text-xs font-medium text-accent-foreground">SKU-tagged Inventory</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-orange-600/90 rounded-lg shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-white">Real-time Insights</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-amber-600/90 rounded-lg shadow-lg">
                  <BarChart3 className="w-3 h-3 text-white" />
                  <span className="text-xs font-medium text-white">Data-backed Visibility</span>
                </div>
              </div>
            </div>

            {/* ============ Slider Handle ============ */}
            <div
              className="absolute top-0 bottom-0 w-1 z-20"
              style={{ 
                left: `${sliderPosition}%`, 
                transform: "translateX(-50%)",
                background: "linear-gradient(180deg, hsl(24 95% 53% / 0.8) 0%, hsl(0 0% 100%) 50%, hsl(24 95% 53% / 0.8) 100%)",
                boxShadow: "var(--shadow-glow)"
              }}
            >
              {/* Handle knob */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-2xl border-4 border-accent"
                style={{ boxShadow: "var(--shadow-glow), 0 4px 20px rgba(0,0,0,0.3)" }}
              >
                <GripVertical className="w-5 h-5 text-accent" />
              </div>

              {/* Real-time Tooltip */}
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-12 z-30"
                  >
                    <div className="bg-foreground text-background px-4 py-2 rounded-xl shadow-xl whitespace-nowrap">
                      <div className="flex items-center gap-4 text-xs font-medium">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-destructive/60" />
                          <span>Before: {beforePercentage}%</span>
                        </div>
                        <div className="w-px h-4 bg-muted/30" />
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                          <span>After: {afterPercentage}%</span>
                        </div>
                      </div>
                      {/* Tooltip arrow */}
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
