import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Leaf } from "lucide-react";
import logoWhite from "@/assets/eden-gardens-logo-white.png";
import wedding from "@/assets/wedding.jpj.jpg";

const STORAGE_KEY = "eg-intro-seen";
const EXIT_MS = 700;
const SHOW_SKIP_MS = 900;
const DISMISS_MS = 3300;
const ASSEMBLE_DELAY_MS = 60;

const COLS: number = 6;
const ROWS: number = 4;

/** Deterministic 0..1 pseudo-random, so server and client render the same
 *  scattered starting positions (no hydration mismatch on inline styles). */
function seeded(index: number, salt: number) {
  const x = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

type Tile = {
  key: string;
  left: string;
  top: string;
  backgroundPosition: string;
  scatterTransform: string;
  assembledTransform: string;
  delayMs: number;
};

const TILES: Tile[] = Array.from({ length: COLS * ROWS }, (_, index) => {
  const col = index % COLS;
  const row = Math.floor(index / COLS);

  const cx = COLS === 1 ? 0 : col / (COLS - 1) - 0.5;
  const cy = ROWS === 1 ? 0 : row / (ROWS - 1) - 0.5;
  const dist = Math.sqrt(cx * cx + cy * cy);

  const r1 = seeded(index, 1);
  const r2 = seeded(index, 2);
  const r3 = seeded(index, 3);
  const r4 = seeded(index, 4);
  const r5 = seeded(index, 5);

  const scatterX = (cx * (58 + r1 * 34)).toFixed(2);
  const scatterY = (cy * (58 + r2 * 34)).toFixed(2);
  const rotateZ = ((r3 - 0.5) * 46).toFixed(1);
  const rotateX = ((r4 - 0.5) * 40).toFixed(1);
  const rotateY = ((r5 - 0.5) * 40).toFixed(1);
  const scale = (0.55 + r1 * 0.2).toFixed(2);

  return {
    key: `${col}-${row}`,
    left: `${(col / COLS) * 100}%`,
    top: `${(row / ROWS) * 100}%`,
    backgroundPosition: `${(col / (COLS - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`,
    scatterTransform: `translate3d(${scatterX}vw, ${scatterY}vh, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
    assembledTransform: "translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)",
    delayMs: Math.round(dist * 420 + r2 * 160),
  };
});

/**
 * One-time cinematic splash played on a visitor's first paint of the site
 * each session. The hero photo is sliced into a grid of blocks that start
 * scattered in 3D space and fly together to reassemble the picture — the
 * same beat the site's own Hero opens on, so the intro hands off straight
 * into it. Rendered by default (matching on server and client) so it
 * covers the very first frame with no flash of the page underneath; a
 * client-only effect then either lets it play or skips it instantly for
 * repeat views this session and for prefers-reduced-motion.
 */
export function IntroSplash() {
  const [visible, setVisible] = useState(true);
  const [assembled, setAssembled] = useState(false);
  const [showMark, setShowMark] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const dismissed = useRef(false);

  const beginExit = useCallback(() => {
    if (dismissed.current) return;
    dismissed.current = true;
    setExiting(true);
    window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, EXIT_MS);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === "1";

    if (reducedMotion || alreadySeen) {
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem(STORAGE_KEY, "1");
    document.body.style.overflow = "hidden";

    const assembleTimer = window.setTimeout(() => setAssembled(true), ASSEMBLE_DELAY_MS);
    const markTimer = window.setTimeout(() => setShowMark(true), 1500);
    const skipTimer = window.setTimeout(() => setShowSkip(true), SHOW_SKIP_MS);
    const dismissTimer = window.setTimeout(beginExit, DISMISS_MS);

    return () => {
      window.clearTimeout(assembleTimer);
      window.clearTimeout(markTimer);
      window.clearTimeout(skipTimer);
      window.clearTimeout(dismissTimer);
      document.body.style.overflow = "";
    };
  }, [beginExit]);

  const tileStyles = useMemo(
    () =>
      TILES.map((tile) => ({
        ...tile,
        style: {
          left: tile.left,
          top: tile.top,
          width: `${100 / COLS}%`,
          height: `${100 / ROWS}%`,
          backgroundImage: `url(${wedding})`,
          backgroundSize: `${COLS * 100}% ${ROWS * 100}%`,
          backgroundPosition: tile.backgroundPosition,
          transform: assembled ? tile.assembledTransform : tile.scatterTransform,
          transitionDelay: assembled ? `${tile.delayMs}ms` : "0ms",
          opacity: assembled ? 1 : 0.92,
        } as const,
      })),
    [assembled],
  );

  if (!visible) return null;

  return (
    <div
      className={`intro-splash fixed inset-0 z-[100] overflow-hidden bg-green-deep${
        exiting ? " intro-splash-exit" : ""
      }`}
      style={{ perspective: "1800px" }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {tileStyles.map((tile) => (
          <div key={tile.key} className="intro-tile" style={tile.style} />
        ))}
      </div>

      {/* A soft scrim, only once the picture has reassembled, so the mark
          reads clearly against the photo without dulling the shatter. */}
      <div
        aria-hidden="true"
        className={`intro-scrim absolute inset-0${showMark ? " intro-scrim-visible" : ""}`}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        {showMark && (
          <>
            <img
              src={logoWhite}
              alt=""
              width={522}
              height={419}
              className="intro-logo h-16 w-auto sm:h-20"
            />
            <div className="rise mt-6 flex items-center gap-3" style={{ animationDelay: "180ms" }}>
              <span className="h-px w-10 bg-cream/30" />
              <Leaf className="h-4 w-4 text-cream/70" />
              <span className="h-px w-10 bg-cream/30" />
            </div>
            <p className="rise eyebrow mt-5 text-cream/70" style={{ animationDelay: "320ms" }}>
              Complete Garden Care
            </p>
          </>
        )}
      </div>

      {showSkip && (
        <button
          type="button"
          onClick={beginExit}
          aria-label="Skip intro animation"
          className="rise absolute bottom-8 right-8 z-20 text-xs font-bold uppercase tracking-[0.12em] text-cream/70 transition-colors hover:text-cream"
        >
          Skip Intro
        </button>
      )}
    </div>
  );
}
