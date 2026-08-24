import { useEffect, useRef } from "react";

/**
 * Pointer-driven 3D tilt. Rotates the returned ref's element toward the
 * cursor (perspective + rotateX/rotateY + a tiny lift-scale), imperatively
 * so it doesn't trigger re-renders. `strength` is the max rotation in
 * degrees. No-op on touch devices and under prefers-reduced-motion — pair
 * the ref'd element with the `.tilt-el` utility in styles.css for the
 * transition/perspective setup.
 */
export function useTilt<T extends HTMLElement>(strength = 8) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    let frame = 0;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.transform = `perspective(1400px) rotateX(${(-py * strength).toFixed(2)}deg) rotateY(${(px * strength).toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      node.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    node.addEventListener("pointermove", onMove);
    node.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", onMove);
      node.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return ref;
}
