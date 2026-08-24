import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { OrganicDivider } from "@/components/site/OrganicDivider";
import { SwipeablePhotoStack } from "@/components/site/SwipeablePhotoStack";
import us from "@/assets/us.png";
import careVisit from "@/assets/care-visit.jpg";
import hedgeTrim from "@/assets/hedgetrim1jpg.jpg";
import ourCars from "@/assets/ourcars.jpg";

const peoplePhotos = [
  {
    src: us,
    alt: "An Eden Gardens team member trimming a hedge beside the company's branded vehicle",
  },
  { src: careVisit, alt: "Gloved hands trimming a green hedge with garden shears" },
  { src: hedgeTrim, alt: "A team member trimming a hedge with power shears" },
  { src: ourCars, alt: "An Eden Gardens branded vehicle parked on site" },
];

/**
 * "The People" + "Our Approach" — merged into one section so their photos
 * can share a single visual: four team photos in a draggable stack
 * (`SwipeablePhotoStack`) the visitor can swipe or click through, echoing
 * the "scattered pile of photographs" feel of the brand's people/vehicles.
 */
export function PeopleApproach() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative z-30 overflow-hidden bg-[var(--heading-foreground-dark)]">
      <div
        ref={ref}
        className="relative z-10 mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24"
      >
        {/* TEXT SIDE — both narratives stacked in one column */}
        <div className={`order-2 reveal-left lg:order-1${visible ? " reveal-visible" : ""}`}>
          <div className="max-w-xl">
            <p className="eyebrow text-cream/70">The People</p>
            <h2 className="display-lg mt-4 text-cream">A Small, Local Team</h2>
            <p className="prose-body mt-5 text-body-dark">
              Eden Gardens is a small, local operation — not a call centre. The same team arrives in
              the same branded vehicle, gets to know your garden, and comes back to look after it
              properly, visit after visit.
            </p>
          </div>

          <div className="mt-10 max-w-xl border-t border-cream/15 pt-8">
            <p className="eyebrow text-cream/70">Our Approach</p>
            <h2 className="display-lg mt-4 text-cream">Care In Every Visit</h2>
            <p className="prose-body mt-5 text-body-dark">
              Every visit is approached with care and attention to detail. We focus on consistent
              maintenance, clean finishes and practical garden care that keeps your outdoor space
              looking neat and well looked after.
            </p>
          </div>
        </div>

        {/* VISUAL SIDE — the swipeable photo stack */}
        <div
          className={`order-1 reveal-right lg:order-2${visible ? " reveal-visible" : ""}`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          <SwipeablePhotoStack images={peoplePhotos} />
        </div>
      </div>
      <OrganicDivider fill="var(--cream)" size="sm" variant="blob" />
    </section>
  );
}
