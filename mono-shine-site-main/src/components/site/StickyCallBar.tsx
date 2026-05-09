import { Phone } from "lucide-react";
import { COMPANY, phoneHref } from "@/lib/company";

const StickyCallBar = () => {
  return (
    <a
      href={phoneHref(COMPANY.primaryPhone)}
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-primary text-primary-foreground flex items-center justify-center gap-2 py-3.5 font-display font-semibold shadow-[0_-4px_20px_-4px_hsl(var(--primary)/0.4)] transition-all duration-200 ease-out hover:scale-105 active:bg-[hsl(var(--primary-hover))]"
      aria-label={`Call ${COMPANY.primaryPhone}`}
    >
      <Phone className="h-5 w-5" />
      Call Now: +91 {COMPANY.primaryPhone}
    </a>
  );
};

export default StickyCallBar;
