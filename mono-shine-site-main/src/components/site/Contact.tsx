import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, MessageCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { COMPANY, phoneHref, waHref } from "@/lib/company";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Please enter a valid phone number"),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  material: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please add a short message").max(1000),
});

type FormState = z.infer<typeof schema>;

const initial: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  material: "",
  message: "",
};

const Contact = () => {
  const [data, setData] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Partial<Record<keyof FormState, string>> = {};
      parsed.error.issues.forEach((i) => {
        const k = i.path[0] as keyof FormState;
        errs[k] = i.message;
      });
      setErrors(errs);
      toast({ title: "Please check the form", description: "Some fields need attention." });
      return;
    }
    setSubmitting(true);
    const msg = `Hello Mono Polymers,
Name: ${parsed.data.name}
${parsed.data.company ? `Company: ${parsed.data.company}\n` : ""}Phone: ${parsed.data.phone}
${parsed.data.email ? `Email: ${parsed.data.email}\n` : ""}${parsed.data.material ? `Material: ${parsed.data.material}\n` : ""}
${parsed.data.message}`;
    window.open(waHref(COMPANY.whatsapp, msg), "_blank", "noopener,noreferrer");
    toast({ title: "Opening WhatsApp", description: "We'll reply as soon as possible." });
    setData(initial);
    setSubmitting(false);
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`;

  return (
    <section id="contact" className="section-pad bg-background">
      <div className="container-prose">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider">
            Get In Touch
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Request a quote or product details.
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Tell us what you need — we'll get back to you with the best rate.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-xl p-6 md:p-8 shadow-[var(--shadow-card)] space-y-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" value={data.name} onChange={onChange("name")} maxLength={100} aria-invalid={!!errors.name} />
                {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company">Company</Label>
                <Input id="company" value={data.company} onChange={onChange("company")} maxLength={100} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone *</Label>
                <Input id="phone" type="tel" value={data.phone} onChange={onChange("phone")} maxLength={20} aria-invalid={!!errors.phone} />
                {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={data.email} onChange={onChange("email")} maxLength={255} aria-invalid={!!errors.email} />
                {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="material">Material of Interest</Label>
              <Input id="material" placeholder="e.g. PP, HDPE, PVC..." value={data.material} onChange={onChange("material")} maxLength={100} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" rows={4} value={data.message} onChange={onChange("message")} maxLength={1000} aria-invalid={!!errors.message} />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" disabled={submitting} className="bg-primary hover:bg-[hsl(var(--primary-hover))] gap-2">
                <Send className="h-4 w-4" /> Send via WhatsApp
              </Button>
              <a href={`mailto:${COMPANY.email}`} className="inline-flex">
                <Button type="button" variant="outline" className="w-full gap-2">
                  <Mail className="h-4 w-4" /> Email Us
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">By submitting, this opens WhatsApp with your message pre-filled.</p>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            <div className="bg-primary text-primary-foreground rounded-xl p-6 shadow-[var(--shadow-card)] space-y-4">
              <h3 className="font-display font-semibold text-lg">Direct Contacts</h3>
              {COMPANY.contacts.map((c) => (
                <a
                  key={c.phone}
                  href={phoneHref(c.phone)}
                  className="flex items-center gap-3 group"
                >
                  <div className="h-10 w-10 rounded-full bg-primary-foreground/15 grid place-items-center group-hover:bg-primary-foreground/25 transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs opacity-80">{c.name}</div>
                    <div className="font-display font-semibold">+91 {c.phone}</div>
                  </div>
                </a>
              ))}
              <a
                href={waHref(COMPANY.whatsapp, "Hi Mono Polymers, I'd like a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 pt-3 border-t border-primary-foreground/20"
              >
                <div className="h-10 w-10 rounded-full bg-primary-foreground/15 grid place-items-center">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs opacity-80">WhatsApp</div>
                  <div className="font-display font-semibold">+91 {COMPANY.whatsapp}</div>
                </div>
              </a>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-[var(--shadow-card)] space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <a href={`mailto:${COMPANY.email}`} className="font-medium hover:text-primary break-all">
                    {COMPANY.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground">Address</div>
                  <p className="font-medium leading-relaxed">{COMPANY.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Building2 className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground">Offices</div>
                  <p className="font-medium">{COMPANY.offices.join(" · ")}</p>
                  <div className="text-xs text-muted-foreground mt-2">Warehouses</div>
                  <p className="font-medium">{COMPANY.warehouses.join(" · ")}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border shadow-[var(--shadow-card)] aspect-video">
              <iframe
                title="Mono Polymers location"
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
