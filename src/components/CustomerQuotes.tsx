import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We stopped guessing. ZapSight tells our managers what matters right now.",
    author: "Operations Director",
    company: "Regional Furniture Chain",
  },
  {
    quote:
      "The ROI was visible within the first quarter. Our floor teams finally have clarity.",
    author: "VP of Retail",
    company: "Premium Home Furnishings",
  },
  {
    quote:
      "Finally, a platform that understands furniture retail isn't like other retail.",
    author: "CEO",
    company: "Multi-Brand Furniture Group",
  },
];

export const CustomerQuotes = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            What Leaders Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Quote card */}
              <div className="relative bg-card rounded-2xl p-8 shadow-lg border border-border/50 h-full">
                {/* Quote icon */}
                <div className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Quote className="w-4 h-4 text-accent-foreground" />
                </div>

                {/* Quote text */}
                <p className="text-lg text-foreground font-medium leading-relaxed mb-6 pt-2">
                  "{testimonial.quote}"
                </p>

                {/* Attribution */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust signal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Join 50+ furniture retailers already using ZapSight
          </p>
        </motion.div>
      </div>
    </section>
  );
};
