import backyard from "@/assets/backyard.jpg";
import doorstep from "@/assets/doorstep.jpg";
import finish from "@/assets/finish.jpg";
import work3 from "@/assets/work-3.jpg";

/**
 * A responsive photographic tool collage for the homepage "On Your Doorstep"
 * story. Each photo is masked into a garden-tool silhouette with a CSS
 * clip-path (objectBoundingBox), so every shape scales cleanly with its own
 * box instead of being scaled down inside a fixed SVG viewport.
 */
export function DoorstepCollage() {
  return (
    <div
      className="doorstep-collage"
      role="img"
      aria-label="Photo collage of Eden Gardens' work: a backyard lawn inside a watering-can shape, a team member mowing inside a pruning-shears shape, a lush garden bed inside a spade shape, and a neatly finished lawn edge inside a sun-hat shape."
    >
      <div
        className="doorstep-collage-piece doorstep-collage-can"
        style={{ backgroundImage: `url(${backyard})` }}
      >
        <div className="doorstep-collage-dots" />
      </div>
      <div
        className="doorstep-collage-piece doorstep-collage-shears"
        style={{ backgroundImage: `url(${doorstep})` }}
      />
      <div
        className="doorstep-collage-piece doorstep-collage-spade"
        style={{ backgroundImage: `url(${work3})` }}
      >
        <div className="doorstep-collage-dots" />
      </div>
      <div
        className="doorstep-collage-piece doorstep-collage-hat"
        style={{ backgroundImage: `url(${finish})` }}
      />

      {/* Shared clip-path definitions, referenced by the shapes above via CSS. */}
      <svg width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="doorstep-shape-can" clipPathUnits="objectBoundingBox">
            <path
              d="M0.15,0.40 L0.62,0.40 L0.66,0.95 L0.19,0.95 Z
                 M0.50,0.40 L0.95,0.12 L0.80,0.06 L0.58,0.32 Z
                 M0.88,0.06 L1.00,0.00 L1.00,0.14 L0.92,0.18 Z"
            />
          </clipPath>
          <clipPath id="doorstep-shape-shears" clipPathUnits="objectBoundingBox">
            <path
              d="M0.10,0.85 L0.42,0.50 L0.30,0.10 L0.40,0.05 L0.50,0.42 L0.60,0.05 L0.70,0.10
                 L0.58,0.50 L0.90,0.85 L0.82,0.92 L0.50,0.60 L0.18,0.92 Z
                 M0.44,0.46 L0.50,0.40 L0.56,0.46 L0.50,0.52 Z"
            />
          </clipPath>
          <clipPath id="doorstep-shape-spade" clipPathUnits="objectBoundingBox">
            <path
              d="M0.40,0.00 L0.60,0.00 L0.60,0.08 L0.40,0.08 Z
                 M0.45,0.08 L0.55,0.08 L0.57,0.58 L0.43,0.58 Z
                 M0.12,0.58 L0.88,0.58 L0.76,0.86 L0.50,1.00 L0.24,0.86 Z"
            />
          </clipPath>
          <clipPath id="doorstep-shape-hat" clipPathUnits="objectBoundingBox">
            <path
              d="M0.00,0.62 L1.00,0.62 L0.90,0.80 L0.10,0.80 Z
                 M0.28,0.62 L0.72,0.62 L0.62,0.04 L0.38,0.04 Z"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
