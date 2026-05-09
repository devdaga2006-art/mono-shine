import { Building2, Handshake, Target, Users } from "lucide-react";
import { COMPANY } from "@/lib/company";

const About = () => {
  const years = new Date().getFullYear() - COMPANY.since;
  const stats = [
    { value: `${years}+`, label: "Years in Business", icon: Target },
    { value: "1000+", label: "Happy Clients", icon: Users },
    { value: "2", label: "Warehouses", icon: Building2 },
    { value: "2", label: "Office Locations", icon: Handshake },
  ];

  return (
    <section id="about" className="section-pad bg-background reveal">
      <div className="container-prose">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-5">
            <div className="text-sm font-semibold text-primary uppercase tracking-wider">
              About Mono Polymers
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Three decades of trust in plastic raw materials.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Founded in {COMPANY.since}, Mono Polymers has grown into one of the
              region's dependable dealers of plastic raw materials. From our Vasai
              base, we serve manufacturers, traders and suppliers with the
              polymers they need — on time, every time.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Our business is built on consistency, fair pricing and lasting
              relationships. Whether you need bulk PP, HDPE, LDPE, PVC, ABS, PS
              or PET, we keep your line running.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Genuine Material", "Bulk Supply", "On-time Delivery", "Pan-India"].map(
                (t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="lift group bg-card border border-border rounded-3xl p-6 shadow-[var(--shadow-card)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30"
              >
                <s.icon className="h-6 w-6 text-primary mb-3" />
                <div className="font-display font-bold text-3xl md:text-4xl text-foreground">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
