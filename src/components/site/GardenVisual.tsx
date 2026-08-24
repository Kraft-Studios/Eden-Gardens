import spade from "@/assets/shovel.png";
import wateringCan from "@/assets/watercan.png";
import hedgeShears from "@/assets/Longhandle.png";
import gloves from "@/assets/gloves.png";
import wheelbarrow from "@/assets/wheelbarrow.png";
import rake from "@/assets/rake.png";

export function GardenVisual() {
  return (
    <div className="garden-tools-stage">
      {/* Organic decorative shapes */}
      <div className="garden-shape garden-shape-one" />
      <div className="garden-shape garden-shape-two" />
      <div className="garden-shape garden-shape-three" />
      <div className="garden-shape garden-shape-four" />

      {/* Grass shapes */}
      <div className="garden-grass garden-grass-one">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="garden-grass garden-grass-two">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Tools */}
      <img
        src={spade}
        alt=""
        aria-hidden="true"
        className="garden-tool garden-tool-spade"
      />

      <img
        src={wateringCan}
        alt=""
        aria-hidden="true"
        className="garden-tool garden-tool-watering"
      />

      <img
        src={hedgeShears}
        alt=""
        aria-hidden="true"
        className="garden-tool garden-tool-shears"
      />

      <img
        src={gloves}
        alt=""
        aria-hidden="true"
        className="garden-tool garden-tool-gloves"
      />

      <img
        src={wheelbarrow}
        alt=""
        aria-hidden="true"
        className="garden-tool garden-tool-wheelbarrow"
      />

      <img
        src={rake}
        alt=""
        aria-hidden="true"
        className="garden-tool garden-tool-rake"
      />

      {/* Small botanical accents */}
      <div className="garden-leaf garden-leaf-one" />
      <div className="garden-leaf garden-leaf-two" />
      <div className="garden-leaf garden-leaf-three" />

      {/* Soft visual label */}
      <div className="garden-visual-label">
        <span>EDEN GARDENS</span>
        <span>CARE • CRAFT • CONSISTENCY</span>
      </div>
    </div>
  );
}
