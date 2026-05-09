import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { COMPANY, phoneHref } from "@/lib/company";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-prose flex h-16 md:h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="h-9 w-9 rounded-md bg-primary text-primary-foreground grid place-items-center font-display font-bold text-lg shadow-[var(--shadow-md)]">
            M
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-base md:text-lg text-foreground">
              {COMPANY.name}
            </div>
            <div className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase">
              Since {COMPANY.since}
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 transition-all duration-200 ease-out hover:text-primary hover:-translate-y-0.5"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a href={phoneHref(COMPANY.primaryPhone)}>
            <Button variant="outline" size="sm" className="gap-2 transition-all duration-200 ease-out hover:-translate-y-0.5 shadow-sm">
              <Phone className="h-4 w-4" />
              {COMPANY.primaryPhone}
            </Button>
          </a>
          <a href="#contact">
            <Button size="sm" className="bg-primary hover:bg-[hsl(var(--primary-hover))] transition-all duration-200 ease-out hover:-translate-y-0.5">
              Get a Quote
            </Button>
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] sm:w-[360px]">
            <div className="flex flex-col gap-1 mt-8">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-primary rounded-md transition-colors"
                >
                  {n.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-4">
                <Button className="w-full bg-primary hover:bg-[hsl(var(--primary-hover))]">
                  Get a Quote
                </Button>
              </a>
              <a href={phoneHref(COMPANY.primaryPhone)} className="mt-2">
                <Button variant="outline" className="w-full gap-2">
                  <Phone className="h-4 w-4" /> Call {COMPANY.primaryPhone}
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
