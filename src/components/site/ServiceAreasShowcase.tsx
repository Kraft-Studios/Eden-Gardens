import { Link } from "@tanstack/react-router";
import { SERVICE_AREAS_LINE } from "@/content/site";
import springgarden1 from "@/assets/springgarden1.jpg";
import springgarden3 from "@/assets/springgarden3.jpg";

export function ServiceAreasShowcase() {
  return (
    <section className="relative z-30 bg-cream">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-28">
        <div>
          <p className="eyebrow text-primary">Service Areas</p>
          <h2 className="display-lg mt-4 text-foreground">Ready to take care of your garden?</h2>
          <p className="prose-body mt-5 max-w-md text-body-light">
            Providing reliable lawn and garden care across our local community, helping homeowners
            and outdoor spaces stay neat, healthy and well maintained.
          </p>
          <p className="eyebrow mt-4 text-primary/70">{SERVICE_AREAS_LINE}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" viewTransition className="btn-motion btn-pill px-7 py-3.5 text-sm">
              Get a Quote
            </Link>
            <Link
              to="/service-areas"
              viewTransition
              className="btn-motion btn-pill px-7 py-3.5 text-sm"
            >
              View Service Areas
            </Link>
          </div>
        </div>

        <div className="folded-photos">
          <img
            src={springgarden1}
            alt="A lush backyard garden with potted flowers, dining table and shaded lawn"
            width={1170}
            height={1468}
            loading="lazy"
            className="folded-photo folded-photo--left photo-editorial"
          />
          <img
            src={springgarden3}
            alt="A subtropical garden bed with palms, banana leaves and flowering plants beside a lawn"
            width={736}
            height={1311}
            loading="lazy"
            className="folded-photo folded-photo--right photo-editorial"
          />
        </div>
      </div>
    </section>
  );
}
