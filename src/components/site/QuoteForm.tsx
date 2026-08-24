import { useState } from "react";
import { toast } from "sonner";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  User,
  Sprout,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { CONTACT, SERVICE_AREAS, SERVICE_AREAS_LINE, SERVICE_OPTIONS } from "@/content/site";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { WhatsAppGlyph } from "@/components/site/WhatsAppWidget";

const fieldClass =
  "peer mt-2 w-full rounded-xl border border-[var(--green-deep)] bg-white px-4 py-3.5 pl-11 font-sans text-[15px] text-black shadow-sm outline-none transition-all duration-200 placeholder:text-black/50 focus-visible:border-accent focus-visible:ring-4 focus-visible:ring-accent/15";

const fieldIconClass =
  "pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40 transition-colors duration-200 peer-focus-visible:text-accent";

const labelClass = "eyebrow text-black font-sans";

const fieldLabelClass =
  "font-sans text-xs font-normal uppercase tracking-[0.22em] text-black";

interface InfoBlockProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

function InfoBlock({ icon, label, children }: InfoBlockProps) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
        <span className="text-accent" aria-hidden="true">
          {icon}
        </span>
        {label}
      </h3>
      <div className="mt-2 text-sm leading-relaxed text-body-light">{children}</div>
    </div>
  );
}

export function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="message-us" className="bg-white scroll-mt-24">
      <div
        ref={ref}
        className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-6 py-16 lg:gap-16 lg:px-10 lg:py-24 lg:grid-cols-[1fr_1.2fr]"
      >
        {/* Left Column - Intro copy, sitting directly on the page */}
        <div className={`reveal-left${visible ? " reveal-visible" : ""}`}>
          <p className={labelClass}>Get a Quote</p>
          <h2 className="display-lg mt-4 text-foreground">Send us a message</h2>
          <p className="prose-body mt-5 max-w-md text-body-light">
            Complete the form below and we&rsquo;ll come back to you with a quote for your outdoor
            space.
          </p>

          <a
            href="https://wa.me/27726904123"
            target="_blank"
            rel="noreferrer"
            className="btn-motion mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--whatsapp)] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all hover:bg-[var(--whatsapp)]/90"
          >
            <WhatsAppGlyph size={18} />
            Message on WhatsApp
          </a>

          {/* Contact Details */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <InfoBlock icon={<Phone size={18} />} label="Phone Number">
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-accent">
                {CONTACT.phone}
              </a>
            </InfoBlock>

            <InfoBlock icon={<Mail size={18} />} label="Email">
              <a href={CONTACT.emailHref} className="transition-colors hover:text-accent">
                {CONTACT.email}
              </a>
            </InfoBlock>

            <InfoBlock icon={<Clock size={18} />} label="Hours">
              Mon – Fri : 08:00 – 17:00
              <br />
              Saturday : 08:00 – 12:00
              <br />
              Sunday : Closed
            </InfoBlock>

            <InfoBlock icon={<Facebook size={18} />} label="Facebook">
              <a
                href="https://www.facebook.com/edengardenservices2/"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                Eden Garden Services
              </a>
            </InfoBlock>
          </div>

          <div className="mt-10">
            <InfoBlock icon={<MapPin size={18} />} label="Service Areas">
              {SERVICE_AREAS_LINE}
            </InfoBlock>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-primary/10 shadow-[0_24px_70px_-32px_rgba(23,37,27,0.25)]">
            <iframe
              src="https://www.google.com/maps?q=South+Coast,+KwaZulu-Natal,+South+Africa&output=embed"
              width="100%"
              height="280"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eden Gardens service area map"
            />
          </div>
        </div>

        {/* Right Column - Form, the one card on the page */}
        <div
          className={`relative overflow-hidden rounded-2xl border border-[var(--green-deep)] bg-white text-black p-6 shadow-[0_30px_80px_-36px_rgba(23,37,27,0.28)] sm:p-8 lg:rounded-[2rem] lg:p-10 reveal-right${visible ? " reveal-visible" : ""}`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-accent/80" />
          <form
            id="quote-form-mobile"
            className="grid gap-7 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitting(true);
              const form = e.currentTarget;
              window.setTimeout(() => {
                setSubmitting(false);
                form.reset();
                toast.success("Thank you — we'll be in touch about your garden.");
              }, 400);
            }}
          >
            <div>
              <label htmlFor="name" className={fieldLabelClass}>
                Name
              </label>
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  required
                  className={fieldClass}
                  placeholder="Your name"
                />
                <User size={16} className={fieldIconClass} aria-hidden="true" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={fieldLabelClass}>
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="you@example.co.za"
                />
                <Mail size={16} className={fieldIconClass} aria-hidden="true" />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className={fieldLabelClass}>
                Phone
              </label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"
                  className={fieldClass}
                  placeholder="Contact number"
                />
                <Phone size={16} className={fieldIconClass} aria-hidden="true" />
              </div>
            </div>

            <div>
              <label htmlFor="service" className={fieldLabelClass}>
                Service required
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={`${fieldClass} appearance-none pr-10`}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <Sprout size={16} className={fieldIconClass} aria-hidden="true" />
                <ChevronDown
                  size={16}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-primary/35"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="area" className={fieldLabelClass}>
                Area
              </label>
              <div className="relative">
                <input
                  id="area"
                  name="area"
                  className={fieldClass}
                  placeholder="Suburb or town"
                  list="eg-areas"
                />
                <MapPin size={16} className={fieldIconClass} aria-hidden="true" />
              </div>
              <datalist id="eg-areas">
                {SERVICE_AREAS.map((a) => (
                  <option key={a} value={a} />
                ))}
              </datalist>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className={fieldLabelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`${fieldClass} resize-none pl-4`}
                placeholder="Tell us about your lawn or garden"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="btn-motion w-full rounded-full bg-[var(--footer-bg)] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-cream shadow-lg transition-all hover:bg-[var(--footer-bg)]/90 hover:shadow-xl disabled:opacity-60 md:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  {submitting ? "Sending…" : "Get a Quote"}
                  {!submitting && <ChevronRight size={16} />}
                </span>
              </button>
              <p className="prose-body mt-4 text-center text-xs text-body-light/70 md:text-left">
                We&rsquo;ll get back to you as soon as we can.
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile Sticky Button */}
      <div className="lg:hidden">
        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-primary/10 bg-white/95 p-4 backdrop-blur-sm">
          <button
            type="submit"
            form="quote-form-mobile"
            disabled={submitting}
            className="btn-motion w-full rounded-full bg-[var(--footer-bg)] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-cream shadow-lg transition-all hover:bg-[var(--footer-bg)]/90 disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Get a Quote"}
          </button>
        </div>
      </div>
    </section>
  );
}
