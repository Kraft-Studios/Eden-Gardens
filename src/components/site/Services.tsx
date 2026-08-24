import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SERVICES } from "@/content/site";

function ServiceCard({ service, index }: { service: (typeof SERVICES)[number]; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`service-hover reveal${visible ? " reveal-visible" : ""} h-full border-t border-border pt-6`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <p className="service-number text-sm font-bold tracking-wide text-primary/70">
        {service.number}
      </p>
      <h3 className="display-md mt-3 min-h-[2.4em] text-foreground">
        <span className="service-title">{service.title}</span>
      </h3>
      <span className="service-line mt-3 block h-px w-10 bg-accent" aria-hidden="true" />
      <p className="prose-body mt-4 text-body-light">{service.description}</p>
    </article>
  );
}

export function Services({
  heading = "What We Do",
  showHeading = true,
}: {
  heading?: string;
  showHeading?: boolean;
}) {
  return (
    // z-40 (above VisualIntro's sticky z-20) so this section's own opaque
    // white background acts as a sliding "sheet" that masks the stationary
    // garden-tool layer as it scrolls up over it.
    <section id="services" className="relative z-40 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10 lg:py-16">
        {showHeading && (
          <>
            <p className="eyebrow text-primary">Our Services</p>
            <h2 className="display-lg mt-4 max-w-2xl text-foreground">{heading}</h2>
          </>
        )}

        <div
          className={`grid items-stretch gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5 ${showHeading ? "mt-10" : ""}`}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
