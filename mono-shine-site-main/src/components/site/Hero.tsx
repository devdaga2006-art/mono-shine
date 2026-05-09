import { ArrowRight, Phone, ShieldCheck, Truck, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY, phoneHref } from "@/lib/company";
import heroImg from "@/assets/hero-pellets.jpg";

const Hero = () => {
  const years = new Date().getFullYear() - COMPANY.since;
  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden reveal hero-bg"
    >
      {/* subtle red glow */}
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 h-[320px] w-[320px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container-prose relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft border border-primary/20 px-3 py-1.5 text-xs md:text-sm font-medium text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              Trusted Since {COMPANY.since} • {years}+ Years
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Trusted Plastic Raw{" "}
              <span className="text-primary">Materials Partner</span> Since{" "}
              {COMPANY.since}
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Dealer in quality polymers — PP, HDPE, LDPE, PVC, ABS, PS, PET — serving
              manufacturers, traders and suppliers across India with consistent supply
              and competitive pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contact">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-[hsl(var(--primary-hover))] gap-2 shadow-[var(--shadow-lg)] transition-all duration-300 ease-out hover:-translate-y-0.5"
                >
                  Request a Quote <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href={phoneHref(COMPANY.primaryPhone)}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border border-border transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/70 hover:bg-accent">
                  <Phone className="h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-border">
              {[
                { icon: ShieldCheck, label: `${years}+ Years`, sub: "Of Trust" },
                { icon: Warehouse, label: "2 Warehouses", sub: "Vasai · Bhiwandi" },
                { icon: Truck, label: "Pan-India", sub: "Reliable Supply" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <s.icon className="h-5 w-5 text-primary" />
                  <div className="font-display font-semibold text-sm sm:text-base text-foreground">
                    {s.label}
                  </div>
                  <div className="text-xs text-muted-foreground">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[5/4] rounded-[2rem] overflow-hidden border border-border shadow-[var(--shadow-lg)] bg-secondary transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] group">
              <img
                src={heroImg}
                alt="High-quality plastic polymer pellets supplied by Mono Polymers"
                width={1280}
                height={1024}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-transparent to-transparent" />
            </div>
            {/* floating badge */}
            <div className="absolute -bottom-5 -left-5 sm:-left-8 bg-background border border-border rounded-xl shadow-[var(--shadow-lg)] p-4 flex items-center gap-3 max-w-[260px]">
              <div className="h-10 w-10 rounded-full bg-primary-soft grid place-items-center">
                <ShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-semibold text-sm">Quality Assured</div>
                <div className="text-xs text-muted-foreground">Genuine grade material</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
