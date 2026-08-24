import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { EditorialSection } from "@/components/site/EditorialSection";
import { SERVICE_AREAS } from "@/content/site";
import lawnHero from "@/assets/serviceareas.png";
import heroLawn from "@/assets/hero-lawn.jpg";
import hero1 from "@/assets/hero-1.png";
import finish from "@/assets/finish.jpg";
import weeding2 from "@/assets/weeding2.jpeg";
import weeding from "@/assets/weeding.png";

const TITLE = "Service Areas | Eden Gardens";
const DESCRIPTION =
  "Eden Gardens provides complete garden care — lawn mowing, hedge trimming, weeding and tree felling — in Shelly Beach, Ramsgate, Uvongo Beach, Southbroom and Margate.";

export const Route = createFileRoute("/service-areas")({
  component: ServiceAreasPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/service-areas" },
    ],
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
});

// Short, honest connecting lines for each existing service area — no
// invented facts about any specific suburb, just the same real service
// offering paired with the area name.
const AREA_DETAILS = [
  {
    name: "Shelly Beach",
    description: "Regular lawn mowing and garden maintenance for homes around Shelly Beach.",
  },
  {
    name: "Ramsgate",
    description: "Reliable, scheduled garden care for outdoor spaces in and around Ramsgate.",
  },
  {
    name: "Uvongo Beach",
    description: "Lawn care and general garden upkeep for homes near Uvongo Beach.",
  },
  {
    name: "Southbroom",
    description: "Consistent lawn and garden maintenance for properties in Southbroom.",
  },
  {
    name: "Margate",
    description: "Ongoing lawn mowing and garden care for homes and outdoor spaces in Margate.",
  },
] as const;

const LAWN_PROCESS = [
  {
    name: "Lawn Preparation",
    description:
      "We prepare the ground by clearing weeds, removing unwanted growth, improving the soil and creating a level surface ready for a healthy, even lawn.",
  },
  {
    name: "Lawn Installation",
    description:
      "Quality lawn is carefully laid and positioned to create a clean, consistent finish. We make sure the grass has good contact with the soil for strong root development.",
  },
  {
    name: "Lawn Establishment",
    description:
      "After installation, we provide the right watering, mowing and maintenance to help the lawn develop strong roots and become thick, healthy and established.",
  },
] as const;

function ServiceAreasPage() {
  return (
    <>
      <PageHeader
        eyebrow="Where We Work"
        heading="Local Garden Care"
        body="Reliable lawn and garden maintenance across our local community on the KwaZulu-Natal south coast."
        image={lawnHero}
        imageAlt="A freshly mown lawn in a KwaZulu-Natal south coast garden"
        tall
        noVignette
      />
      <EditorialSection
        eyebrow="On Your Doorstep"
        heading="Close To Home"
        body="Providing reliable lawn and garden care across our local community, helping homeowners and outdoor spaces stay neat, healthy and well maintained."
        extra={SERVICE_AREAS.join(" · ")}
        cta={{ label: "Contact Us", to: "/contact" }}
        visual="arches"
        circleLargeImage={weeding2}
        circleLargeAlt="Weeding work being carried out in a garden bed"
        circleSmallImage={weeding}
        circleSmallAlt="Close-up of hands weeding a garden bed"
        tone="cream"
        greenHeading
      />

      {/* Who We Serve: how we build a lawn, from bare ground to established */}
      <section className="bg-green-deep">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-cream/70">Who We Serve</p>
            <h2 className="heading-nursery mt-6 text-cream sm:text-4xl lg:text-5xl">
              Building A Lawn That Lasts
            </h2>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-3 lg:gap-10">
            {LAWN_PROCESS.map((step, i) => (
              <div key={step.name}>
                <h3
                  className="text-lg uppercase text-cream sm:text-xl"
                  style={{ fontFamily: "'Paytone One', Helvetica, Arial, Lucida, sans-serif" }}
                >
                  {i + 1}. {step.name}
                </h3>
                <p className="body-nursery mt-3 text-body-dark">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width, edge-to-edge photography strip */}
      <section className="grid grid-cols-3">
        <img
          src={heroLawn}
          alt="A freshly mown lawn"
          width={1200}
          height={2133}
          loading="lazy"
          className="h-[280px] w-full object-cover sm:h-[300px]"
        />
        <img
          src={hero1}
          alt="A well-maintained garden"
          width={736}
          height={981}
          loading="lazy"
          className="h-[280px] w-full object-cover sm:h-[300px]"
        />
        <img
          src={finish}
          alt="A crisply edged lawn showing the standard of finish Eden Gardens leaves after a visit"
          width={1408}
          height={1008}
          loading="lazy"
          className="h-[280px] w-full object-cover sm:h-[300px]"
        />
      </section>

      <ServiceAreas />
    </>
  );
}
