import { Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import care from "@/assets/flower3.png";

export function QuoteCTA() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative z-30 overflow-hidden text-primary-foreground">
      <img
        src={care}
        alt=""
        aria-hidden="true"
        width={1500}
        height={1100}
        loading="lazy"
        className="photo-warm absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--green-deep) 60%, transparent) 0%, color-mix(in oklab, var(--green-deep) 82%, transparent) 100%)",
        }}
      />
      <div
        ref={ref}
        className="relative mx-auto max-w-[1400px] px-6 py-16 text-center lg:px-10 lg:py-20"
      >
        <h2
          className={`display-lg reveal mx-auto max-w-3xl text-cream${visible ? " reveal-visible" : ""}`}
        >
          Ready to take care of your garden?
        </h2>
        <p
          className={`prose-body reveal mx-auto mt-5 max-w-xl text-body-dark${visible ? " reveal-visible" : ""}`}
          style={{ transitionDelay: visible ? "130ms" : "0ms" }}
        >
          Tell us what your garden needs and let&rsquo;s find the right maintenance service for your
          outdoor space.
        </p>
        <div
          className={`reveal mt-7 flex flex-wrap justify-center gap-4${visible ? " reveal-visible" : ""}`}
          style={{ transitionDelay: visible ? "260ms" : "0ms" }}
        >
          <Link
            to="/contact"
            viewTransition
            className="btn-motion rounded-md bg-accent px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-accent-foreground transition-colors hover:bg-accent/85"
          >
            Get a Quote
          </Link>
          <Link
            to="/contact"
            viewTransition
            className="btn-motion rounded-md border-2 border-cream px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-cream transition-colors hover:border-accent hover:text-accent"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
