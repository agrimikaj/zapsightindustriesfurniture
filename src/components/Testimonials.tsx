import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ZapSight's AI-powered floor analytics transformed how we understand customer behavior across our stores. The real-time insights have driven measurable improvements in both sales performance and customer experience.",
    company: "Ashley Furniture",
    logoAlt: "Ashley Furniture logo",
  },
  {
    quote:
      "The precision of ZapSight's traffic intelligence gave us clarity we never had before — from peak-hour staffing to layout optimization, every decision is now backed by data.",
    company: "1915 South",
    logoAlt: "1915 South logo",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-16 pb-24 overflow-hidden bg-charcoal">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/[0.03] rounded-full blur-[120px]" />

      <div className="max-w-[960px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>

              <blockquote className="text-sm font-medium leading-relaxed text-white/90 mb-6 tracking-tight">
                "{t.quote}"
              </blockquote>

              <p className="text-sm text-muted-foreground font-medium">
                {t.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
