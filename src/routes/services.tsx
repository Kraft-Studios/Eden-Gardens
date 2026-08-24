import { createFileRoute, Link } from "@tanstack/react-router";
import { ServicesHero } from "@/components/site/ServicesHero";
import { ServicesDetailed } from "@/components/site/ServicesDetailed";

const TITLE = "Services | Eden Gardens Complete Garden Care";
const DESCRIPTION =
  "Lawn mowing, hedge trimming, weeding, tree felling and general garden maintenance from Eden Gardens — reliable, careful garden care for homes and outdoor spaces.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesDetailed />

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center sm:py-24">
          <h2 className="service-refined-heading text-3xl tracking-tight text-accent-green sm:text-4xl">
            Ready To Get Started?
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-neutral-600">
            Contact us or request a quote for your outdoor space.
          </p>
          <Link
            to="/contact"
            viewTransition
            className="mt-8 inline-block bg-foreground px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-primary"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
