import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY, phoneHref } from "@/lib/company";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-14 pb-24 md:pb-10">
      <div className="container-prose">
        <div className="grid md:grid-cols-4 gap-8 md:gap-10">
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-md bg-primary text-primary-foreground grid place-items-center font-display font-bold text-lg">
                M
              </div>
              <div>
                <div className="font-display font-bold text-lg">{COMPANY.name}</div>
                <div className="text-xs opacity-70 uppercase tracking-wider">Since {COMPANY.since}</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Trusted dealers in plastic raw materials — serving manufacturers,
              traders and suppliers across India.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider opacity-90">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#home" className="hover:text-primary-foreground hover:opacity-100">Home</a></li>
              <li><a href="#about" className="hover:text-primary-foreground hover:opacity-100">About</a></li>
              <li><a href="#services" className="hover:text-primary-foreground hover:opacity-100">Services</a></li>
              <li><a href="#testimonials" className="hover:text-primary-foreground hover:opacity-100">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground hover:opacity-100">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider opacity-90">Reach Us</h4>
            <ul className="space-y-3 text-sm opacity-90">
              {COMPANY.contacts.map((c) => (
                <li key={c.phone} className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-primary" />
                  <a href={phoneHref(c.phone)} className="hover:opacity-100">
                    <div className="text-xs opacity-70">{c.name}</div>
                    <div>+91 {c.phone}</div>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <a href={`mailto:${COMPANY.email}`} className="break-all">{COMPANY.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider opacity-90">Locations</h4>
            <div className="flex items-start gap-2 text-sm opacity-90">
              <MapPin className="h-4 w-4 mt-0.5 text-primary" />
              <p className="leading-relaxed">{COMPANY.address}</p>
            </div>
            <div className="mt-3 text-sm opacity-80">
              <div><span className="opacity-70">Offices:</span> {COMPANY.offices.join(", ")}</div>
              <div><span className="opacity-70">Warehouses:</span> {COMPANY.warehouses.join(", ")}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/15 mt-10 pt-6 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs opacity-70">
          <div>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
          <div>Plastic Raw Materials · Vasai · Bhiwandi · Pan-India</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
