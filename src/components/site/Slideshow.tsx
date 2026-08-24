import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type SlideshowSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export function Slideshow({
  slides,
  intervalMs = 6000,
}: {
  slides: SlideshowSlide[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, intervalMs, slides.length]);

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % slides.length) + slides.length) % slides.length);
    },
    [slides.length],
  );

  if (slides.length === 0) return null;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-64 w-full sm:h-80 lg:h-[24rem]">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={slide.width}
            height={slide.height}
            loading={i === 0 ? "eager" : "lazy"}
            className={`photo-editorial absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          />
        ))}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color-mix(in_oklab,var(--green-deep)_65%,transparent)] to-transparent"
        />
        {slides[index]?.caption && (
          <p className="eyebrow absolute bottom-5 left-6 text-cream/90">{slides[index].caption}</p>
        )}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => goTo(index - 1)}
            className="btn-motion absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-cream/90 p-2 text-primary opacity-0 shadow-md transition-opacity focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => goTo(index + 1)}
            className="btn-motion absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-cream/90 p-2 text-primary opacity-0 shadow-md transition-opacity focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>

          <div
            className="absolute inset-x-0 bottom-4 flex justify-center gap-2"
            role="tablist"
            aria-label="Slides"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1} of ${slides.length}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-cream" : "w-1.5 bg-cream/50 hover:bg-cream/75"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
