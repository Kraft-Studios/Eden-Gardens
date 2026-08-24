import { Link } from "@tanstack/react-router";
import servicesHero from "@/assets/area.png";

export function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      <img
        src={servicesHero}
        alt="Aerial view of a well-maintained garden and lawn area"
        width={1672}
        height={941}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center sm:py-36 lg:py-44">
        <h1
          className="text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl"
          style={{
            fontFamily: "'Paytone One', 'Cormorant Garamond', ui-sans-serif, sans-serif",
            fontWeight: 400,
          }}
        >
          Our Services
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-white/85 sm:text-lg">
          With our commitment to quality work, we&rsquo;ve become a trusted name in local lawn and
          garden care — practical, consistent service built around the needs of your outdoor space.
        </p>
        <Link
          to="/contact"
          viewTransition
          className="mt-9 inline-block border border-white/70 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
