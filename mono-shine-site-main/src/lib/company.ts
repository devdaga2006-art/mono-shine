export const COMPANY = {
  name: "Mono Polymers",
  tagline: "Dealers in Plastic Raw Materials",
  since: 1996,
  email: "monopolymers@yahoo.com",
  address: "Dewan Ind. Est. No. 6, Gala No. 8, Navghar, Vasai (E) - 401210",
  offices: ["Vasai", "Ram Mandir"],
  warehouses: ["Vasai", "Bhiwandi"],
  contacts: [
    { name: "Manoj K. Daga", phone: "9322060428" },
    { name: "Jitendra K. Daga", phone: "9322519925" },
  ],
  whatsapp: "9326287420",
  primaryPhone: "9322060428",
} as const;

export const phoneHref = (n: string) => `tel:+91${n}`;
export const waHref = (n: string, msg?: string) =>
  `https://wa.me/91${n}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;
