import { Boxes, Layers, Package, Truck, Headset, Search } from "lucide-react";

const POLYMERS = [
  { code: "PP", name: "Polypropylene", use: "Packaging, automotive, household goods" },
  { code: "HDPE", name: "High-Density Polyethylene", use: "Pipes, containers, crates" },
  { code: "LDPE", name: "Low-Density Polyethylene", use: "Films, bags, flexible packaging" },
  { code: "LLDPE", name: "Linear Low-Density PE", use: "Stretch films, liners, sheets" },
  { code: "PVC", name: "Polyvinyl Chloride", use: "Pipes, cables, profiles, fittings" },
  { code: "ABS", name: "Acrylonitrile Butadiene Styrene", use: "Appliances, electronics, parts" },
  { code: "PS", name: "Polystyrene", use: "Packaging, disposables, insulation" },
  { code: "PET", name: "Polyethylene Terephthalate", use: "Bottles, containers, fibres" },
];

const SERVICES = [
  { icon: Boxes, title: "Bulk Supply", desc: "Reliable bulk quantities for production-scale needs." },
  { icon: Search, title: "Custom Sourcing", desc: "Hard-to-find grades sourced through our network." },
  { icon: Truck, title: "Pan-India Logistics", desc: "On-time delivery from Vasai & Bhiwandi warehouses." },
  { icon: Headset, title: "Trade Consultation", desc: "Guidance on grades, pricing and market trends." },
];

const Services = () => {
  return (
    <section id="services" className="section-pad bg-secondary/40 reveal">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Materials & Services
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Complete range of plastic raw materials.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From commodity polymers to engineering grades — we supply what your line runs on.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {POLYMERS.map((p) => (
            <article
              key={p.code}
              className="lift group bg-card border border-border rounded-3xl p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-lg)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary-soft text-primary grid place-items-center font-display font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {p.code}
                </div>
                <Layers className="h-4 w-4 text-muted-foreground ml-auto" />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground mb-1.5">
                {p.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.use}</p>
            </article>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="lift bg-primary text-primary-foreground rounded-3xl p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]"
            >
              <s.icon className="h-6 w-6 mb-3 opacity-90" />
              <h3 className="font-display font-semibold text-base mb-1.5 text-primary-foreground">
                {s.title}
              </h3>
              <p className="text-sm text-primary-foreground/85 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Package className="h-4 w-4 text-primary" />
          Don't see your grade? <a href="#contact" className="text-primary font-semibold hover:underline">Ask us — we'll source it.</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
