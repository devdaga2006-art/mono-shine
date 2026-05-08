import { BadgeCheck, Clock, IndianRupee, Repeat } from "lucide-react";

const REASONS = [
  { icon: BadgeCheck, title: "Quality Assured", desc: "Genuine, consistent grade material from trusted sources." },
  { icon: Clock, title: "On-Time Delivery", desc: "Strong logistics network from Vasai & Bhiwandi." },
  { icon: IndianRupee, title: "Competitive Pricing", desc: "Fair, transparent rates aligned with the market." },
  { icon: Repeat, title: "Long-Term Partnerships", desc: "30+ years of repeat business says it all." },
];

const WhyUs = () => {
  return (
    <section className="section-pad bg-background">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why Choose Us
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Built on trust. Backed by experience.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {REASONS.map((r) => (
            <div key={r.title} className="lift bg-card border border-border rounded-xl p-6 text-center shadow-[var(--shadow-card)]">
              <div className="h-12 w-12 mx-auto rounded-full bg-primary-soft grid place-items-center mb-4">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-base mb-1.5">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
