type Props = {
  eyebrow: string;
  heading: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  /** Uses the ivypresto-display/Cormorant Garamond heading font + the
   *  #209d50 accent colour (Service Areas page), instead of the site's
   *  default Fraunces display font in plain cream. */
  refinedHeading?: boolean;
  /** Uses a lighter, warmer gradient overlay for the hero image (Contact page). */
  warmOverlay?: boolean;
  /** Matches the taller hero height used on the Services page. */
  tall?: boolean;
  /** Disables the cinematic vignette overlay on the hero image (Service Areas page). */
  noVignette?: boolean;
  /** Disables the tint/gradient overlay entirely, showing the hero image at full clarity. */
  noOverlay?: boolean;
  /** Disables the slow Ken Burns zoom/pan on the hero image, keeping it still (Contact page). */
  stillImage?: boolean;
  /** Uses the Momo Trust Display font and a centered layout, matching the
   *  hero heading on scissortailokc.com/contact/ (Contact page). */
  momoHeading?: boolean;
  /** Optional pill button rendered under the body text — e.g. an anchor
   *  link scrolling down to a form section (Contact page). */
  cta?: { label: string; href: string };
};

export function PageHeader({
  eyebrow,
  heading,
  body,
  image,
  imageAlt = "",
  imagePosition = "center",
  refinedHeading = false,
  warmOverlay = false,
  tall = false,
  noVignette = false,
  noOverlay = false,
  stillImage = false,
  momoHeading = false,
  cta,
}: Props) {
  const headingClass = momoHeading
    ? "contact-hero-heading mt-4 text-4xl tracking-tight text-cream sm:text-5xl lg:text-7xl"
    : refinedHeading
      ? "service-refined-heading mt-4 text-4xl tracking-tight text-accent-green sm:text-5xl lg:text-6xl"
      : "mt-4 text-4xl tracking-tight text-cream font-sans sm:text-5xl lg:text-6xl";

  if (image) {
    return (
      <section className="relative isolate overflow-hidden bg-green-deep">
        <img
          src={image}
          alt={imageAlt}
          width={1920}
          height={1200}
          style={{ objectPosition: imagePosition }}
          className={`photo-warm${stillImage ? "" : " hero-kenburns"} absolute inset-0 h-full w-full object-cover`}
        />
        {!noOverlay && (
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: warmOverlay
                ? "linear-gradient(180deg, rgba(33, 62, 39, 0.25) 0%, rgba(33, 62, 39, 0.55) 50%, rgba(33, 62, 39, 0.7) 100%)"
                : "linear-gradient(180deg, color-mix(in oklab, var(--green-deep) 35%, transparent) 0%, color-mix(in oklab, var(--green-deep) 82%, transparent) 100%)",
            }}
          />
        )}
        {!noVignette && <div aria-hidden="true" className="cinematic-vignette absolute inset-0" />}
        <div
          className={
            tall
              ? "relative mx-auto max-w-[1400px] px-6 py-28 sm:py-36 lg:min-h-[36rem] lg:px-10 lg:py-44"
              : "relative mx-auto max-w-[1400px] px-6 py-16 lg:min-h-[20rem] lg:px-10 lg:py-24"
          }
        >
          <div className={momoHeading ? "mx-auto max-w-2xl text-center rise" : "max-w-3xl rise"}>
            <p className="eyebrow text-cream/80 font-sans">{eyebrow}</p>
            <h1 className={headingClass}>{heading}</h1>
            {body && (
              <p
                className={
                  momoHeading
                    ? "prose-body mx-auto mt-5 max-w-xl text-body-dark/90 font-sans"
                    : "prose-body mt-5 max-w-xl text-body-dark/90 font-sans"
                }
              >
                {body}
              </p>
            )}
            {cta && (
              <a
                href={cta.href}
                className="btn-motion mt-8 inline-flex items-center justify-center rounded-full bg-[var(--footer-bg)] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-cream shadow-lg transition-all hover:bg-[var(--footer-bg)]/90 hover:shadow-xl"
              >
                {cta.label}
              </a>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="max-w-3xl rise">
          <p className="eyebrow text-accent font-sans">{eyebrow}</p>
          <h1 className={headingClass}>{heading}</h1>
          {body && <p className="prose-body mt-5 max-w-xl text-body-dark font-sans">{body}</p>}
        </div>
      </div>
    </section>
  );
}
