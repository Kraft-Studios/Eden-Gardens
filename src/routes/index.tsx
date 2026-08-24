import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { VisualIntro } from "@/components/site/VisualIntro";
import { PeopleApproach } from "@/components/site/PeopleApproach";
import { About } from "@/components/site/About";
import { OurWork } from "@/components/site/OurWork";
import { ServiceAreasShowcase } from "@/components/site/ServiceAreasShowcase";
import { Testimonials } from "@/components/site/Testimonials";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";

import lawnBefore from "@/assets/lawn.jpg";
import finishAfter from "@/assets/finish.jpg";

const TITLE = "Eden Gardens | Complete Garden Care, South Coast KZN";

const DESCRIPTION =
  "Lawn mowing, hedge trimming, weeding, tree felling and general garden maintenance from Eden Gardens. Reliable, local garden care for homes and outdoor spaces on the KwaZulu-Natal south coast.";

export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    meta: [
      {
        title: TITLE,
      },
      {
        name: "description",
        content: DESCRIPTION,
      },
      {
        property: "og:title",
        content: TITLE,
      },
      {
        property: "og:description",
        content: DESCRIPTION,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "/",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Eden Gardens",
          description: DESCRIPTION,

          areaServed: ["Shelly Beach", "Ramsgate", "Uvongo Beach", "Southbroom", "Margate"],

          address: {
            "@type": "PostalAddress",
            addressCountry: "ZA",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="home-page">
      <Hero />

      <About />

      <VisualIntro />

      {/* THE PEOPLE + OUR APPROACH — diagonal photo duo */}
      <PeopleApproach />

      {/* THE DIFFERENCE — illustrative before/after, full-bleed slider */}
      <section className="relative z-30 overflow-hidden bg-cream pb-14 pt-20 lg:pb-20 lg:pt-28">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
          <p className="eyebrow text-primary">The Difference</p>
          <h2 className="display-lg mt-4 text-foreground">What Regular Care Looks Like</h2>
          <p className="prose-body mx-auto mt-4 max-w-xl text-body-light">
            Representative examples from our own work — an overgrown site before a visit, and the
            standard of finish we leave after one. Drag to compare.
          </p>
        </div>
        <div className="mt-8">
          <BeforeAfterSlider
            before={{
              src: lawnBefore,
              alt: "An overgrown garden site before a scheduled Eden Gardens visit",
            }}
            after={{
              src: finishAfter,
              alt: "A crisply edged lawn showing the standard of finish Eden Gardens leaves after a visit",
            }}
            width={1408}
            height={1008}
          />
        </div>
      </section>

      <OurWork />

      <ServiceAreasShowcase />

      <Testimonials />
    </div>
  );
}
