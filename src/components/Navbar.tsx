import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import zapsightLogo from "@/assets/zapsight-logo.png";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="https://zapsight.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src={zapsightLogo}
              alt="ZapSight Logo"
              className="w-10 h-10 object-contain"
            />
            <span className={`font-display font-bold text-xl transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              ZapSight
            </span>
          </a>

          {/* CTA Button */}
          <a href="https://zapsight.com/contact" target="_blank" rel="noopener noreferrer">
            <Button variant="nav-cta" size="sm">
              Book a Demo
            </Button>
          </a>
        </nav>
      </div>
    </motion.header>
  );
};
