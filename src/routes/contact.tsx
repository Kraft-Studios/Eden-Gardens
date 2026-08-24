import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { QuoteForm } from "@/components/site/QuoteForm";
import contactHero from "@/assets/truck.png";

const TITLE = "Contact & Quotes | Eden Gardens";
const DESCRIPTION =
  "Request a quote for lawn mowing, hedge trimming, weeding, tree felling or garden maintenance from Eden Gardens. Tell us about your outdoor space and we'll come back to you.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <div className="home-page">
      <PageHeader
        eyebrow=""
        heading="Contact Us"
        image={contactHero}
        imageAlt="An Eden Gardens work truck"
        warmOverlay
        momoHeading
        tall
        stillImage
        noVignette
        noOverlay
      />
      <QuoteForm />
    </div>
  );
}
