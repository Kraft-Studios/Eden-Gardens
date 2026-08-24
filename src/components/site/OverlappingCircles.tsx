type Props = {
  largeImage: string;
  largeAlt: string;
  smallImage: string;
  smallAlt: string;
};

/**
 * Two overlapping circular photo frames — a large landscape shot behind,
 * a smaller bordered circle overlapping its bottom-right. Sized in
 * percentages of the fixed-aspect-ratio container so the whole pairing
 * scales fluidly instead of relying on the fixed px values of the design
 * spec directly.
 */
export function OverlappingCircles({ largeImage, largeAlt, smallImage, smallAlt }: Props) {
  return (
    <div className="overlapping-circles">
      <div className="overlapping-circles-large">
        <img
          src={largeImage}
          alt={largeAlt}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="overlapping-circles-small">
        <img
          src={smallImage}
          alt={smallAlt}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
