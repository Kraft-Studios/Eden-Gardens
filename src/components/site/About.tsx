import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import ourcars from "@/assets/ourcars.jpg";

export function About() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative z-30 overflow-hidden bg-[var(--heading-foreground-dark)]">
      <div
        ref={ref}
        className="relative z-10 mx-auto grid max-w-[1400px] items-center gap-10 px-6 pb-14 pt-8 lg:grid-cols-[1.1fr_1fr] lg:px-10 lg:pb-20 lg:pt-14"
      >
        <div className={`reveal-left${visible ? " reveal-visible" : ""}`}>
          <p className="eyebrow text-cream/70">About Eden Gardens</p>
          <h2 className="display-lg mt-4 max-w-xl text-cream">
            A garden care team you can rely on
          </h2>
          <p className="prose-body mt-5 max-w-xl text-body-dark">
            Eden Gardens looks after outdoor spaces with care, consistency and attention to detail.
            We arrive when we say we will, we work through a garden properly, and we leave it clean.
          </p>
          <p className="prose-body mt-4 max-w-xl text-body-dark">
            Most of what we do is ordinary, regular work — mowing, edging, trimming, tidying. Doing
            that work well, visit after visit, is what keeps a garden looking cared for. That is the
            standard we hold ourselves to, whether it is a small home lawn or a larger outdoor area.
          </p>
        </div>
        <div
          className={`group overflow-hidden reveal-right${visible ? " reveal-visible" : ""}`}
          style={{ transitionDelay: visible ? "150ms" : "0ms" }}
        >
          <img
            src={ourcars}
            alt="The Eden Gardens branded company vehicle parked on-site, loaded with garden tools"
            width={2048}
            height={923}
            loading="lazy"
            className={`photo-editorial cinematic-focus aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]${
              visible ? " cinematic-focus-visible" : ""
            }`}
          />
        </div>
      </div>
    </section>
  );
}
