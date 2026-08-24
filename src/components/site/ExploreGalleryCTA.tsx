import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroLawn from "@/assets/hero-lawn.jpg";

export function ExploreGalleryCTA() {
  return (
    <div className="relative mt-14 overflow-hidden lg:mt-16">
      <img
        src={heroLawn}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1200}
        loading="lazy"
        className="photo-warm absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--green-deep) 50%, transparent) 0%, color-mix(in oklab, var(--green-deep) 68%, transparent) 100%)",
        }}
      />
      <div className="relative flex flex-col items-center px-6 py-10 text-center sm:py-12 lg:py-14">
        <p className="eyebrow text-cream/70">Portfolio</p>
        <h3 className="display-md mt-2 max-w-2xl text-cream">Explore Gallery</h3>
        <p className="prose-body mt-2 max-w-lg text-body-dark">
          Step inside our full collection of lawns, hedges, beds and clean-ups — the work behind
          every well-kept garden.
        </p>
        <Link
          to="/gallery"
          viewTransition
          className="btn-motion btn-pill group mt-5 px-8 py-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          View Full Gallery
          <ArrowRight
            size={18}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}
