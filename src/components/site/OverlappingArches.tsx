type Props = {
  largeImage: string;
  largeAlt: string;
  smallImage: string;
  smallAlt: string;
};

/**
 * Two overlapping arch-shaped photo frames — a large close-up shot behind,
 * flush to the top of the container, with a smaller bordered arch
 * overlapping its bottom-right. Sized in percentages of a fixed-aspect-ratio
 * (640 / 690) container so the pairing scales fluidly.
 */
export function OverlappingArches({ largeImage, largeAlt, smallImage, smallAlt }: Props) {
  return (
    <div className="overlapping-arches">
      <div className="overlapping-arches-large">
        <img
          src={largeImage}
          alt={largeAlt}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="overlapping-arches-small">
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
