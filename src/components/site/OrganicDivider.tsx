type OrganicDividerProps = {
  /** CSS colour value (e.g. "var(--cream)") of the section being introduced. */
  fill: string;
  /** "lg" for the hero's broad, prominent curve; "sm" for restrained transitions. */
  size?: "lg" | "sm";
  /** Mirrors the curve horizontally for variety between uses. */
  flip?: boolean;
  /** Places the curve at the top or bottom edge of its parent section. */
  edge?: "top" | "bottom";
  /** "blob" is a single soft asymmetric curve; "wave" is a repeating, rhythmic wave. */
  variant?: "blob" | "wave";
};

const VIEWBOX: Record<"lg" | "sm", string> = {
  lg: "0 0 1440 160",
  sm: "0 0 1440 80",
};

// "Blob" — a single soft, asymmetric organic curve.
const BLOB_PATH: Record<"lg" | "sm", string> = {
  lg: "M0,32 C 460,118 980,-18 1440,58 L1440,160 L0,160 Z",
  sm: "M0,14 C 460,54 980,-6 1440,26 L1440,80 L0,80 Z",
};

// "Wave" — a gentler, repeating multi-crest wave.
const WAVE_PATH: Record<"lg" | "sm", string> = {
  lg: "M0,80 C 180,20 360,20 540,80 C 720,140 900,140 1080,80 C 1260,20 1350,20 1440,60 L1440,160 L0,160 Z",
  sm: "M0,40 C 180,10 360,10 540,40 C 720,70 900,70 1080,40 C 1260,10 1350,10 1440,30 L1440,80 L0,80 Z",
};

const HEIGHT_CLASS: Record<"lg" | "sm", string> = {
  lg: "h-14 sm:h-20 lg:h-28",
  sm: "h-8 sm:h-10 lg:h-14",
};

export function OrganicDivider({
  fill,
  size = "lg",
  flip = false,
  edge = "bottom",
  variant = "blob",
}: OrganicDividerProps) {
  const path = variant === "wave" ? WAVE_PATH[size] : BLOB_PATH[size];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 ${edge === "top" ? "top-0" : "bottom-0"} z-0 overflow-hidden leading-[0] ${HEIGHT_CLASS[size]}`}
    >
      <svg
        viewBox={VIEWBOX[size]}
        preserveAspectRatio="none"
        className={`h-full w-full ${flip ? "-scale-x-100" : ""} ${edge === "top" ? "-scale-y-100" : ""}`}
      >
        <path d={path} style={{ fill }} />
      </svg>
    </div>
  );
}
