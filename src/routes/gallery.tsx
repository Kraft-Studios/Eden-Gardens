import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/site/GalleryGrid";

const TITLE = "Gallery | Eden Gardens";
const DESCRIPTION =
  "Browse Eden Gardens' portfolio of lawn mowing, hedge trimming, tree felling, garden maintenance and clean-up work across local homes and outdoor spaces.";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto max-w-[1400px] px-6 pt-16 lg:px-10 lg:pt-20">
          <div className="rise flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-primary">Our Work</p>
              <h1 className="display-lg mt-4 text-foreground">The Gallery.</h1>
              <p className="prose-body max-w-sm text-body-light mt-3">
                Lawns, gardens and outdoor spaces — shown the way they deserve to be seen.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GalleryGrid />
    </>
  );
}
