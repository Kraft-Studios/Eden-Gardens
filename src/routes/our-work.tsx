import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { OurWork } from "@/components/site/OurWork";
import { EditorialSection } from "@/components/site/EditorialSection";
import doorstep from "@/assets/doorstep.jpg";
import ourWorkHero from "@/assets/greenland.png";

const TITLE = "Our Work | Eden Gardens";
const DESCRIPTION =
  "See the lawn mowing, hedge trimming, weeding, tree felling and garden maintenance work Eden Gardens carries out for local homes and outdoor spaces.";

export const Route = createFileRoute("/our-work")({
  component: OurWorkPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/our-work" },
    ],
    links: [{ rel: "canonical", href: "/our-work" }],
  }),
});

function OurWorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        heading="Gardens We Maintain"
        body="Lawns, hedges, beds and clean-ups the everyday work that keeps an outdoor space looking cared for."
        image={ourWorkHero}
        imageAlt="A neatly maintained South African garden"
        tall
        noVignette
        noOverlay
      />
      <OurWork />
      <EditorialSection
        eyebrow="Local Service"
        heading="On Your Doorstep"
        body="The Eden Gardens team provides reliable lawn and garden care for homes and outdoor spaces in our local community. From routine grass cutting to general garden maintenance, we make it easier to keep your outdoor space looking its best."
        image={doorstep}
        imageAlt="A garden worker mowing a lawn in a coastal South African garden"
        imageWidth={1208}
        imageHeight={608}
      />
    </>
  );
}
