import { Star } from "lucide-react";
import { OrganicDivider } from "@/components/site/OrganicDivider";
import { TESTIMONIALS, type Testimonial } from "@/content/testimonials";

function TestimonialCard({ quote, name, location }: Testimonial) {
  return (
    <figure className="w-[22rem] shrink-0 rounded-2xl bg-[var(--footer-bg)] p-8 shadow-[0_18px_45px_-25px_rgba(0,0,0,0.35)]">
      <div className="flex gap-1" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} fill="#d9a441" stroke="#d9a441" />
        ))}
      </div>
      <blockquote className="prose-body mt-4 text-cream">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="mt-6">
        <p className="font-display font-bold text-cream">{name}</p>
        {location && <p className="eyebrow mt-1 text-cream/70">{location}</p>}
      </figcaption>
    </figure>
  );
}

function TestimonialRow({
  testimonials,
  direction,
  durationSeconds,
}: {
  testimonials: Testimonial[];
  direction: "left" | "right";
  durationSeconds: number;
}) {
  // Two copies back-to-back, animated exactly -50%, so the loop is seamless.
  const track = [...testimonials, ...testimonials];

  return (
    <div className="testimonial-marquee" aria-label="Client testimonials">
      <div
        className={`testimonial-track flex w-max items-start gap-6 px-6 lg:px-10 ${
          direction === "right" ? "testimonial-track--reverse" : ""
        }`}
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        {track.map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.name}-${i}`} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  const rowUp = TESTIMONIALS.slice(0, 8);
  const rowDown = TESTIMONIALS.slice(8, 15);

  return (
    <section className="relative z-30 overflow-hidden bg-[var(--footer-bg)]">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 lg:px-10 lg:pt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-cream/70">Testimonials</p>
          <h2 className="display-lg mt-4 text-cream">See What Our Clients Are Saying</h2>
          <p className="prose-body mx-auto mt-5 max-w-xl text-cream/80">
            Discover the experiences of our satisfied clients. Read their testimonials to see how
            Eden Gardens has transformed their spaces, exceeding their expectations.
          </p>
        </div>
      </div>

      <div className="mt-14 space-y-6 pb-24 lg:pb-32">
        <TestimonialRow testimonials={rowUp} direction="right" durationSeconds={46} />
        <TestimonialRow testimonials={rowDown} direction="left" durationSeconds={40} />
      </div>
      <OrganicDivider fill="var(--footer-bg)" size="sm" variant="wave" />
    </section>
  );
}
