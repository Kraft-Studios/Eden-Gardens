import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type PhotoStackImage = {
  src: string;
  alt: string;
};

/**
 * Per-depth resting transform, front → back. Position 0 (the interactive
 * card) is deliberately given its own slight tilt too, so the whole thing
 * reads as a scattered pile rather than "one straight photo + a fan behind
 * it". When a card is swiped away it rejoins at the highest index, so it
 * simply inherits whatever transform already lives at that depth — no
 * per-image bookkeeping needed to keep the "back" card looking right.
 */
const STACK_TRANSFORMS = [
  { rotate: -2, x: 0, y: 0 },
  { rotate: -6, x: -22, y: 16 },
  { rotate: 3, x: 20, y: 24 },
  { rotate: 6, x: -14, y: 34 },
];

const SWIPE_THRESHOLD_RATIO = 0.3;
const EXIT_ROTATION = 22;
const TRANSITION_MS = 280;

export function SwipeablePhotoStack({
  images,
  className = "",
}: {
  images: PhotoStackImage[];
  className?: string;
}) {
  const [order, setOrder] = useState(() => images.map((_, i) => i));
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);
  const [justReset, setJustReset] = useState(false);

  const frameRef = useRef<HTMLDivElement>(null);
  const dragOrigin = useRef<{ x: number; y: number } | null>(null);
  const activePointerId = useRef<number | null>(null);
  const exitTimeoutRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  // Resync only when the number of photos changes; depending on `images` itself would reset
  // the stack (and any in-progress drag) on every render for callers passing an inline array.
  useEffect(() => {
    setOrder(images.map((_, i) => i));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  // Swiping away schedules a reorder for after the exit transition finishes. If the component
  // unmounts (route change, hot reload) before that timer fires, clear it — otherwise it calls
  // setState on an unmounted component and logs a spurious error mid-swipe.
  useEffect(
    () => () => {
      if (exitTimeoutRef.current !== null) window.clearTimeout(exitTimeoutRef.current);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    },
    [],
  );

  const advance = useCallback(
    (direction: "left" | "right") => {
      if (exitDirection) return;
      setExitDirection(direction);
      exitTimeoutRef.current = window.setTimeout(() => {
        setOrder((prev) => (prev.length ? [...prev.slice(1), prev[0]!] : prev));
        setExitDirection(null);
        setDrag({ x: 0, y: 0 });
        setJustReset(true);
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = requestAnimationFrame(() => setJustReset(false));
        });
      }, TRANSITION_MS);
    },
    [exitDirection],
  );

  const recall = useCallback(() => {
    if (exitDirection) return;
    setOrder((prev) => {
      if (!prev.length) return prev;
      const last = prev[prev.length - 1]!;
      return [last, ...prev.slice(0, -1)];
    });
  }, [exitDirection]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (exitDirection) return;
    activePointerId.current = e.pointerId;
    dragOrigin.current = { x: e.clientX, y: e.clientY };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragOrigin.current || activePointerId.current !== e.pointerId) return;
    setDrag({
      x: e.clientX - dragOrigin.current.x,
      y: e.clientY - dragOrigin.current.y,
    });
  };

  const endDrag = (e: React.PointerEvent) => {
    if (!dragOrigin.current || activePointerId.current !== e.pointerId) return;
    dragOrigin.current = null;
    activePointerId.current = null;
    setIsDragging(false);

    const width = frameRef.current?.offsetWidth ?? 320;
    if (Math.abs(drag.x) > width * SWIPE_THRESHOLD_RATIO) {
      advance(drag.x > 0 ? "right" : "left");
    } else {
      setDrag({ x: 0, y: 0 });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      advance("right");
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      recall();
    }
  };

  const frontLabel = (order.length ? images[order[0]!]?.alt : undefined) || "photo";

  return (
    <div className={`photo-stack-wrap ${className}`}>
      <div
        ref={frameRef}
        role="group"
        aria-roledescription="carousel"
        aria-label={`Photo stack, currently showing: ${frontLabel}`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="photo-stack-frame"
      >
        {order.map((imageIndex, depth) => {
          const image = images[imageIndex]!;
          const base = STACK_TRANSFORMS[depth] ?? STACK_TRANSFORMS[STACK_TRANSFORMS.length - 1]!;
          const isFront = depth === 0;
          const scale = 1 - depth * 0.035;

          let transform = `translate(${base.x}px, ${base.y}px) rotate(${base.rotate}deg) scale(${scale})`;
          let transition = "transform 320ms cubic-bezier(0.22, 1, 0.36, 1)";

          if (isFront) {
            if (exitDirection) {
              const exitX = exitDirection === "right" ? 640 : -640;
              const exitRotate = exitDirection === "right" ? EXIT_ROTATION : -EXIT_ROTATION;
              transform = `translate(${base.x + exitX}px, ${base.y + drag.y * 0.4}px) rotate(${base.rotate + exitRotate}deg) scale(${scale})`;
              transition = `transform ${TRANSITION_MS}ms cubic-bezier(0.32, 0, 0.67, 0)`;
            } else if (isDragging) {
              transform = `translate(${base.x + drag.x}px, ${base.y + drag.y}px) rotate(${base.rotate + drag.x / 18}deg) scale(${scale})`;
              transition = "none";
            } else {
              transition = "transform 280ms cubic-bezier(0.22, 1, 0.36, 1)";
            }
          } else if (justReset && depth === order.length - 1) {
            transition = "none";
          }

          return (
            <div
              key={image.src}
              className="photo-stack-card"
              aria-hidden={!isFront}
              style={{
                transform,
                transition,
                zIndex: images.length - depth,
              }}
              {...(isFront
                ? {
                    onPointerDown: handlePointerDown,
                    onPointerMove: handlePointerMove,
                    onPointerUp: endDrag,
                    onPointerCancel: endDrag,
                  }
                : {})}
            >
              <img
                src={image.src}
                alt={isFront ? image.alt : ""}
                draggable={false}
                className="photo-stack-img"
              />
              {depth > 0 && (
                <span
                  aria-hidden="true"
                  className="photo-stack-scrim"
                  style={{ opacity: depth * 0.06 }}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="photo-stack-controls">
        <button
          type="button"
          onClick={recall}
          className="photo-stack-btn"
          aria-label="Show previous photo"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="photo-stack-dots" aria-hidden="true">
          {images.map((image, i) => (
            <span
              key={image.src}
              className={`photo-stack-dot${i === order[0] ? " photo-stack-dot--active" : ""}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => advance("right")}
          className="photo-stack-btn"
          aria-label="Show next photo"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
