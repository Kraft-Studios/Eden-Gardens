import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT, NAV_LINKS, SERVICE_AREAS_LINE, SERVICES, SERVICE_AREAS } from "@/content/site";
import logo from "@/assets/logo.png";
import { WhatsAppWidget } from "@/components/site/WhatsAppWidget";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Do you offer regular garden maintenance?",
    answer:
      "Yes. Select the regular maintenance option on the form and share how often you need help. We will confirm whether the requested service fits the area and scope.",
  },
  {
    question: "Can I request a once-off garden clean-up?",
    answer:
      "Yes, where the scope and timing can be serviced. Select Once-off clean-up and include the work you need help with so we can advise the right next step.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We serve {areas} on the KwaZulu-Natal south coast. Enter your suburb in the form and we will confirm serviceability before an assessment is arranged.",
  },
  {
    question: "When will I hear back?",
    answer:
      "We confirm the next step during business hours. Please include useful detail about the garden and preferred timing so the first conversation is productive.",
  },
] as const;

export function Footer() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  return (
    <div>
      {isHomePage && (
        <>
          {/* CTA strip above footer */}
          <section className="cta-strip text-cream">
            <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
              <p className="font-bold">Ready to take care of your garden?</p>
              <Link to="/contact" viewTransition className="btn-motion btn-pill px-5 py-2 text-sm">
                Get a Quote
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* FAQ section above footer */}
          <section className="faq-section py-12">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
              <div className="max-w-[60%] text-left">
                <h2 className="faq-heading text-3xl">Frequently asked questions</h2>
              </div>

              <div className="mt-8 max-w-[60%]">
                <Accordion type="single" collapsible className="space-y-0">
                  {FAQS.map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question} className="faq-divider">
                      <AccordionTrigger className="faq-question py-6 text-lg hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="faq-answer pb-6">
                        {faq.answer.replace("{areas}", SERVICE_AREAS_LINE)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer main */}
      <footer className="site-footer text-cream">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-5 lg:px-10">
          {/* Column 1: Brand + description + contacts */}
          <div>
            <img
              src={logo}
              alt="Eden Gardens Garden Services"
              width={1402}
              height={1122}
              loading="lazy"
              className="h-14 w-auto rounded-lg"
            />
            <p className="mt-4 text-2xl font-bold uppercase tracking-[0.08em]">
              Eden <span className="brand-name">Gardens</span>
            </p>
            <p className="prose-body mt-3 max-w-md text-body-dark">Complete garden care</p>

            <ul className="mt-6 space-y-3 text-cream/90">
              <li className="flex items-start gap-3">
                <Phone size={18} />
                <div>
                  <div className="text-sm font-semibold">Sales</div>
                  <a
                    href={CONTACT.phoneHref}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} />
                <div>
                  <div className="text-sm font-semibold">Operations</div>
                  <a
                    href={CONTACT.phoneHref}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={18} />
                <div>
                  <div className="text-sm font-semibold">Email</div>
                  <a
                    href={CONTACT.emailHref}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={18} />
                <div>
                  <div className="text-sm font-semibold">Address</div>
                  <Link to="/service-areas" viewTransition className="text-sm underline">
                    South Coast, KwaZulu-Natal
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="eyebrow text-cream/70">Navigation</h3>
            <ul className="mt-3 space-y-2 text-cream/75">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} viewTransition className="transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="eyebrow text-cream/70">Services</h3>
            <ul className="mt-3 space-y-2 text-cream/75">
              {SERVICES.map((s) => (
                <li key={s.number}>{s.title}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h3 className="eyebrow text-cream/70">Service Areas</h3>
            <ul className="mt-3 space-y-2 text-cream/75">
              {SERVICE_AREAS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          {/* Column 5: Business Hours */}
          <div>
            <h3 className="eyebrow text-cream/70">Business Hours</h3>
            <dl className="mt-2 text-cream/80">
              <div className="flex justify-between items-center py-1 text-sm">
                <dt>Mon – Fri</dt>
                <dd>08:00 – 17:00</dd>
              </div>
              <div className="flex justify-between items-center py-1 text-sm">
                <dt>Saturday</dt>
                <dd>08:00 – 12:00</dd>
              </div>
              <div className="flex justify-between items-center py-1 text-sm">
                <dt>Sunday</dt>
                <dd>Closed</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="border-t border-cream/15">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 text-xs uppercase tracking-[0.12em] text-cream/60 lg:px-10">
            <span>&copy; {new Date().getFullYear()} Eden Gardens</span>
            <span>
              Secondary contact:{" "}
              <a href={CONTACT.emailHref} className="underline">
                {CONTACT.email}
              </a>
            </span>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <WhatsAppWidget />
    </div>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow text-cream/70">{title}</h2>
      <ul className="mt-3 space-y-2 text-cream/75">{children}</ul>
    </div>
  );
}
