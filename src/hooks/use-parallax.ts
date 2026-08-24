import { useEffect, useRef } from "react";

/**
 * Applies a tiny scroll-linked translateY to the returned ref, imperatively
 * (no re-renders). `speed` is a small multiplier (e.g. 0.02–0.06) — larger
 * values move faster. Only runs while the element is near the viewport, and
 * is a no-op under prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement>(speed: number) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active = false;
    let ticking = false;

    const update = () => {
      ticking = false;
      if (!active || !node) return;
      const rect = node.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      node.style.transform = `translateY(${offset.toFixed(2)}px)`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        active = entries[0]?.isIntersecting ?? false;
        if (active) onScroll();
      },
      { rootMargin: "25% 0px" },
    );
    observer.observe(node);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [speed]);

  return ref;
}
