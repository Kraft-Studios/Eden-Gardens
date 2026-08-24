import { useCallback, useRef, useState } from "react";

/**
 * Cinematic drag-to-compare slider. Only ever wire this up with two photos
 * that genuinely represent the same garden/project before and after work —
 * never pair unrelated photos to imply a transformation that didn't happen.
 */
export function BeforeAfterSlider({
  before,
  after,
  width,
  height,
}: {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  width: number;
  height: number;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
    if (e.key === "Home") setPosition(0);
    if (e.key === "End") setPosition(100);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[260px] w-full select-none overflow-hidden sm:h-[340px] md:h-[420px] lg:h-[520px] xl:h-[600px]"
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img
        src={after.src}
        alt={after.alt}
        width={width}
        height={height}
        className="photo-editorial absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={before.src}
          alt=""
          width={width}
          height={height}
          className="photo-editorial h-full w-full object-cover"
          draggable={false}
        />
      </div>

      <span className="glass-pill pointer-events-none absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-cream">
        Before
      </span>
      <span className="glass-pill pointer-events-none absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-cream">
        After
      </span>

      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onKeyDown={onKeyDown}
        className="absolute inset-y-0 flex w-10 -translate-x-1/2 cursor-ew-resize items-center justify-center focus-visible:outline-none"
        style={{ left: `${position}%` }}
      >
        <span aria-hidden="true" className="absolute inset-y-0 w-px bg-cream/80" />
        <span
          aria-hidden="true"
          className="btn-motion relative flex h-10 w-10 items-center justify-center rounded-full bg-cream text-primary shadow-lg"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M5 3 1 8l4 5M11 3l4 5-4 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
