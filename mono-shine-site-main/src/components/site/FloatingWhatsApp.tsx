import { COMPANY, waHref } from "@/lib/company";

const FloatingWhatsApp = () => {
  return (
    <a
      href={waHref(COMPANY.whatsapp, "Hi Mono Polymers, I'd like a quote.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-20 md:bottom-6 z-50 h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground grid place-items-center shadow-[var(--shadow-lg)] hover:scale-110 transition-transform animate-[pulse_2.5s_ease-in-out_infinite]"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M19.11 17.21c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.19.29-.74.93-.91 1.12-.17.19-.34.21-.62.07-.29-.15-1.21-.45-2.31-1.42-.85-.76-1.43-1.69-1.6-1.98-.17-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.09-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.14-.23-.56-.47-.49-.65-.5l-.55-.01c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.39 0 1.41 1.02 2.77 1.16 2.96.14.19 2 3.05 4.85 4.28.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.02 5.33C10.13 5.33 5.34 10.12 5.34 16c0 1.88.49 3.72 1.43 5.33L5.33 26.67l5.49-1.44A10.62 10.62 0 0 0 16.02 26.7c5.89 0 10.68-4.79 10.68-10.67S21.91 5.33 16.02 5.33zm0 19.55a8.86 8.86 0 0 1-4.51-1.23l-.32-.19-3.26.85.87-3.18-.21-.33A8.84 8.84 0 0 1 7.16 16c0-4.89 3.97-8.86 8.86-8.86 4.89 0 8.86 3.97 8.86 8.86s-3.97 8.88-8.86 8.88z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
