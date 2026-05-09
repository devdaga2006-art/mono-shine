import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Mono Polymers has been our go-to dealer for HDPE and PP for over a decade. Consistent quality, fair pricing, and they always deliver on time.",
    name: "Production Manager",
    company: "Plastic Manufacturing Co., Mumbai",
  },
  {
    quote:
      "Reliable supply makes all the difference in trading. The Daga family runs a transparent, professional operation we can count on.",
    name: "Trader",
    company: "Polymer Trading House, Surat",
  },
  {
    quote:
      "Whenever we needed a specific grade urgently, they sourced it. That's a partner, not just a supplier.",
    name: "Procurement Head",
    company: "Industrial Goods Pvt. Ltd., Pune",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-pad bg-secondary/40 reveal">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            What our partners say.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="lift bg-card border border-border rounded-3xl p-6 md:p-7 shadow-[var(--shadow-card)] flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
            >
              <Quote className="h-7 w-7 text-primary/30 mb-4" />
              <blockquote className="text-foreground/90 leading-relaxed flex-1">
                "{t.quote}"
              </blockquote>
              <div className="flex gap-0.5 mt-5 mb-3 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <figcaption className="border-t border-border pt-4">
                <div className="font-display font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
