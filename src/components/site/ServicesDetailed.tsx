import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SERVICE_DETAILS, type ServiceDetail } from "@/content/services-detail";

function ServiceDetailRow({
  service,
  reverse,
  index,
}: {
  service: ServiceDetail;
  reverse: boolean;
  index: number;
}) {
  const { ref, visible } = useScrollReveal<HTMLElement>();
  const textFirst = service.textFirst ?? reverse;
  const featured = service.featured ?? false;
  const refinedTypography = service.refinedTypography ?? false;
  const footerTone = service.footerTone ?? false;
  const darkSection = featured || footerTone;
  const threeColumns = Boolean(service.thirdImage);
  // "Plain" rows (light bg, single image column) bleed their image out to
  // the page edge with a small gap; the richer dark/three-image rows keep
  // their existing contained layout.
  const isPlainRow = !darkSection && !threeColumns && !service.contained;
  const imageOnRight = textFirst ? true : reverse;
  const primaryImage = {
    src: service.image,
    alt: service.imageAlt,
    width: service.imageWidth,
    height: service.imageHeight,
    position: service.imagePosition,
  };
  const images = service.secondaryImage ? [primaryImage, service.secondaryImage] : [primaryImage];
  const rowLayout = threeColumns
    ? "lg:grid-cols-3 lg:items-center lg:gap-10"
    : service.textFirst
      ? "sm:grid-cols-2 sm:items-center sm:gap-6"
      : "lg:grid-cols-2 lg:items-center lg:gap-16";
  const imageOrder = textFirst ? "sm:order-2" : reverse ? "lg:order-2" : "";
  const textOrder = textFirst ? "sm:order-1" : reverse ? "lg:order-1" : "";
  const imageEdgeClass = isPlainRow
    ? imageOnRight
      ? "sm:pr-4 lg:pr-6 xl:pr-10"
      : "sm:pl-4 lg:pl-6 xl:pl-10"
    : "";
  // Primary headings are always the accent green, regardless of background;
  // subheadings instead follow plain black-on-light / white-on-dark contrast.
  const headingAccent = "text-accent-green";
  const subheadingContrast = darkSection ? "text-cream" : "text-foreground";

  return (
    <article
      ref={ref}
      className={`reveal${visible ? " reveal-visible" : ""} ${featured || footerTone ? "bg-[var(--footer-bg)]" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`grid gap-10 py-14 sm:py-16 ${rowLayout} lg:py-20 ${darkSection || threeColumns || service.contained ? "mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-10" : ""}`}
      >
        <div
          className={`grid w-full justify-self-start grid-cols-1 gap-3 ${imageOrder} ${imageEdgeClass}`}
        >
          {images.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              style={{ objectPosition: image.position ?? "center" }}
              className={`${service.imageAspectClass ?? "aspect-[4/3]"} w-full object-cover`}
            />
          ))}
        </div>
        <div className={`${textOrder} ${isPlainRow ? "px-6 sm:px-10 lg:px-16" : ""}`}>
          <h2
            className={
              featured
                ? `service-refined-heading text-4xl tracking-tight ${headingAccent} sm:text-5xl`
                : `service-refined-heading text-3xl tracking-tight ${headingAccent} sm:text-4xl`
            }
            style={{ fontWeight: 700 }}
          >
            {service.title}
          </h2>
          {service.subtitle && (
            <p className={`service-refined-heading mt-2 text-xl sm:text-2xl ${subheadingContrast}`}>
              {service.subtitle}
            </p>
          )}
          {service.intro ? (
            <div
              className={`mt-5 space-y-4 text-base leading-relaxed ${darkSection ? "service-refined-copy text-white" : refinedTypography ? "service-refined-copy text-foreground" : "font-sans text-neutral-600"}`}
            >
              {service.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <p
              className={`mt-4 text-base leading-relaxed ${darkSection ? "service-refined-copy text-white" : refinedTypography ? "service-refined-copy text-foreground" : "font-sans text-neutral-600"}`}
            >
              {service.paragraph}
            </p>
          )}
          {service.includes && (
            <div className="mt-8 border-t border-white/20 pt-7">
              <h3 className={`service-refined-heading text-2xl sm:text-3xl ${subheadingContrast}`}>
                {service.includesHeading ?? "What’s Included"}
              </h3>
              {service.supporting && (
                <div
                  className={`mt-4 space-y-4 text-base leading-relaxed ${darkSection ? "service-refined-copy text-white" : "service-refined-copy text-foreground"}`}
                >
                  {service.supporting.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
              {service.includesLead !== false && (
                <p
                  className={`mt-5 text-sm uppercase tracking-[0.1em] ${darkSection ? "service-refined-copy text-white" : "service-refined-copy text-foreground"}`}
                >
                  {service.includesLead ?? `Our ${service.title} Service Includes:`}
                </p>
              )}
              <ul
                className={`mt-4 space-y-3 text-base leading-relaxed ${darkSection ? "service-refined-copy text-white" : "service-refined-copy text-foreground"}`}
              >
                {service.includes.map((item) => (
                  <li key={item.label} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                    <span>
                      <strong>{item.label}</strong> — {item.description}
                    </span>
                  </li>
                ))}
              </ul>
              {service.closing && (
                <p
                  className={`mt-6 text-base leading-relaxed ${darkSection ? "service-refined-copy text-white" : "service-refined-copy text-foreground"}`}
                >
                  {service.closing}
                </p>
              )}
            </div>
          )}
        </div>
        {service.thirdImage && (
          <img
            src={service.thirdImage.src}
            alt={service.thirdImage.alt}
            width={service.thirdImage.width}
            height={service.thirdImage.height}
            loading="lazy"
            style={{ objectPosition: service.thirdImage.position ?? "center" }}
            className="aspect-[4/3] w-full object-cover"
          />
        )}
      </div>
    </article>
  );
}

export function ServicesDetailed() {
  return (
    <section className="bg-white">
      {/* Dark/three-image rows contain their own max-w-[1400px] wrapper
          internally; plain rows are intentionally full-bleed so their
          image can reach the true page edge — so this outer level no
          longer needs (or should apply) a width constraint of its own. */}
      {SERVICE_DETAILS.map((service, index) => (
        <ServiceDetailRow
          key={service.number}
          service={service}
          reverse={index % 2 === 1}
          index={index}
        />
      ))}
    </section>
  );
}
