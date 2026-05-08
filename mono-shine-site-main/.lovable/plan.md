# Mono Polymers — Company Website

A clean, conversion-focused single-page site (with smooth-scroll sections) in **Deep Crimson + White** with **Sora/Manrope** typography. Mobile-first, fast, SEO-ready.

## Design Direction

- **Primary:** Deep Crimson `#991b1b` on white `#ffffff`
- **Accents:** soft gray `#f3f4f6` surfaces, `#4b5563` body text, subtle red hairlines
- **Type:** Sora (headings, tight tracking) + Manrope (body)
- **Feel:** industrial B2B, generous whitespace, square-ish cards (radius 8px), subtle shadows, smooth hover lifts, no gimmicks

## Page Sections (single page, anchor nav)

1. **Sticky Header** — Logo "Mono Polymers" + "Since 1996" tag, nav (Home / About / Services / Testimonials / Contact), red "Get a Quote" button on desktop. Hamburger drawer on mobile.

2. **Hero**
   - Headline: "Trusted Plastic Raw Materials Partner Since 1996"
   - Sub: dealer in quality polymers serving manufacturers, traders & suppliers across India
   - CTAs: "Request a Quote" (primary red) + "Call Now" (outline)
   - Trust strip: "30+ Years • 2 Warehouses • Pan-India Supply"
   - Right side: clean product/industrial visual

3. **About** — "Since 1996" story, focus on trust, consistency, relationships. Stat tiles: 30+ Years, 1000+ Clients, 2 Warehouses, 2 Offices.

4. **Services / Materials** — grid of polymer cards:
   PP, HDPE, LDPE, LLDPE, PVC, ABS, PS, PET — each with one-line description and typical applications. Plus service cards: Bulk Supply, Custom Sourcing, Pan-India Logistics, Trade Consultation.

5. **Why Choose Us** — 4 icon points: Quality assured, On-time delivery, Competitive pricing, Long-term partnerships.

6. **Testimonials** — 3 placeholder cards (manufacturer / trader / supplier voices) with name + company; easy to swap real ones later.

7. **Contact**
   - Left: validated form (Name, Company, Phone, Email, Material of interest, Message) using zod + react-hook-form. On submit → opens prefilled WhatsApp message to 9326287420 (no backend needed).
   - Right: contact details (both numbers click-to-call, email mailto, full Vasai address, offices & warehouses list, embedded Google Map of the address).

8. **Footer** — company blurb, quick links, all contact details, offices & warehouses, copyright.

## Floating / Sticky CTAs

- **Floating WhatsApp** bottom-right (green circle, WhatsApp icon) → `https://wa.me/919326287420`
- **Sticky "Call Now"** bottom-left on mobile, also as header button on desktop → `tel:+919322060428`
- Both visible on every scroll position; spaced so they don't overlap.

## Responsive Behavior

- Mobile: single column, hamburger nav, sticky bottom Call bar full-width, FAB WhatsApp above it.
- Tablet: 2-col service grid.
- Desktop (≥1024px): 4-col service grid, split hero, side-by-side contact.

## SEO & Performance

- Proper `<title>`, meta description, Open Graph tags in `index.html` ("Mono Polymers — Plastic Raw Materials Dealer Since 1996, Vasai")
- Semantic HTML5 (`<header> <main> <section> <footer>`), single H1, descriptive H2s
- JSON-LD `LocalBusiness` schema with address, phone, founding date
- `robots.txt` allow all, canonical link
- Lazy-loaded images, system fonts fallback, no heavy libraries

## Technical Notes

- Update `src/index.css` design tokens: `--primary: 0 72% 35%` (Deep Crimson), `--background: 0 0% 100%`, gray accents; load Sora + Manrope via Google Fonts in `index.html`; map in `tailwind.config.ts`.
- Replace `src/pages/Index.tsx` with composed sections; create `src/components/site/` for `Header`, `Hero`, `About`, `Services`, `WhyUs`, `Testimonials`, `Contact`, `Footer`, `FloatingWhatsApp`, `StickyCallBar`.
- Form: `react-hook-form` + `zod` (already available via shadcn `form.tsx`); on submit build WhatsApp deep link with `encodeURIComponent`. No data stored, no backend.
- Smooth scroll via `scroll-behavior: smooth` and anchor IDs.
- Use shadcn `Button`, `Card`, `Input`, `Textarea`, `Sheet` (mobile nav), `Toaster` for form feedback.
- Icons from `lucide-react` (already installed).
- All colors via HSL tokens — no hardcoded hex in components.

## Out of Scope (can add later)

- Real product photography (placeholders for now)
- CMS / blog
- Backend form storage (WhatsApp handoff covers it)
- Multi-language