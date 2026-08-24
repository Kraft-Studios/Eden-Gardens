import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { OrganicDivider } from "@/components/site/OrganicDivider";
import { DoorstepCollage } from "@/components/site/DoorstepCollage";
import { OverlappingCircles } from "@/components/site/OverlappingCircles";
import { OverlappingArches } from "@/components/site/OverlappingArches";
import { GardenVisual } from "@/components/site/GardenVisual";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTilt } from "@/hooks/use-tilt";

type Props = {
  eyebrow?: string;
  heading: string;
  body?: string;
  extra?: string;
  content?: ReactNode;

  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageSize?: "full" | "compact";
  imageFit?: "cover" | "contain";
  /** CSS object-position value — used to crop a specific region into frame. */
  imagePosition?: string;
  visualSpacing?: "default" | "top" | "none";

  reverse?: boolean;

  cta?: {
    label: string;
    to: string;
  };

  tone?: "green" | "cream";

  /** Uses the ivypresto-display/Cormorant Garamond heading font + the
   *  #209d50 accent colour (About / Service Areas pages), instead of the
   *  site's default Fraunces display font + tone-based foreground/cream. */
  refinedHeading?: boolean;

  /** Keeps the site's default Fraunces display font but colours the
   *  heading text-accent-green (#209d50) instead of the tone-based
   *  foreground/cream colour. */
  greenHeading?: boolean;

  /** Keeps the site's default Fraunces display font but colours the
   *  heading the deeper --heading-foreground green instead of the
   *  muted text-foreground colour (light/cream sections only). */
  darkHeading?: boolean;

  /** Uses the Paytone One heading / Bellota Text body fonts that match
   *  gardenofedenberries.com, instead of the site's default Fraunces
   *  display font + Inter body font. */
  nurseryFont?: boolean;

  /** Bottom-edge divider fill colour (the next section's colour). */
  dividerTo?: string;
  /** Bottom-edge divider shape. */
  dividerVariant?: "blob" | "wave";
  /** Top-edge divider fill colour (the previous section's colour). */
  dividerTopFill?: string;
  /** Top-edge divider shape. */
  dividerTopVariant?: "blob" | "wave";

  visual?: "garden" | "image" | "doorstep-collage" | "circles" | "arches";

  /** Used when `visual` is "circles" or "arches" — the back-layer large photo. */
  circleLargeImage?: string;
  circleLargeAlt?: string;
  /** Used when `visual` is "circles" or "arches" — the front-layer small bordered photo. */
  circleSmallImage?: string;
  circleSmallAlt?: string;

  /** Drops the visual side entirely and centers the text block full-width. */
  centered?: boolean;
};

export function EditorialSection({
  eyebrow,
  heading,
  body,
  extra,
  content,
  image,
  imageAlt = "",
  imageWidth = 1408,
  imageHeight = 1008,
  imageSize = "full",
  imageFit = "cover",
  imagePosition = "center",
  visualSpacing = "default",
  reverse = false,
  cta,
  tone = "cream",
  refinedHeading = false,
  greenHeading = false,
  darkHeading = false,
  dividerTo,
  dividerVariant = "blob",
  dividerTopFill,
  dividerTopVariant = "blob",
  visual = "image",
  centered = false,
  nurseryFont = false,
  circleLargeImage,
  circleLargeAlt = "",
  circleSmallImage,
  circleSmallAlt = "",
}: Props) {
  const green = tone === "green";

  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const tiltRef = useTilt<HTMLDivElement>(6);

  const imageReveal = reverse ? "reveal-right" : "reveal-left";
  const textReveal = reverse ? "reveal-left" : "reveal-right";

  const useGardenVisual = visual === "garden";
  const useDoorstepCollage = visual === "doorstep-collage";
  const useCircles = visual === "circles";
  const useArches = visual === "arches";
  const compactVisualSpacing =
    visualSpacing === "top"
      ? "lg:flex lg:items-center lg:pt-8"
      : visualSpacing === "none"
        ? "lg:flex lg:items-center"
        : "lg:flex lg:items-center lg:py-8";

  return (
    <section className={`relative z-30 overflow-hidden ${green ? "bg-green-deep" : "bg-cream"}`}>
      {dividerTopFill && (
        <OrganicDivider fill={dividerTopFill} size="sm" edge="top" variant={dividerTopVariant} />
      )}
      <div
        ref={ref}
        className={`relative z-10 mx-auto max-w-[1600px] items-stretch ${
          centered ? "" : "grid lg:grid-cols-2"
        } ${dividerTopFill ? "pt-8 sm:pt-10 lg:pt-14" : ""} ${
          dividerTo ? "pb-8 sm:pb-10 lg:pb-14" : ""
        }`}
      >
        {/* =========================================================
            VISUAL SIDE
            ========================================================= */}

        {!centered && (
          <div
            className={`relative ${imageReveal}${visible ? " reveal-visible" : ""} ${
              reverse ? "lg:order-2" : ""
            } ${imageSize === "compact" ? compactVisualSpacing : ""} ${
              useArches || useCircles ? "pt-8 sm:pt-10 lg:pt-14" : ""
            }`}
          >
            {useGardenVisual ? (
              /*
               * The garden visual stays in place while the text
               * scrolls beside it on desktop.
               */
              <div className="lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)]">
                <GardenVisual />
              </div>
            ) : useDoorstepCollage ? (
              <DoorstepCollage />
            ) : useCircles && circleLargeImage && circleSmallImage ? (
              <OverlappingCircles
                largeImage={circleLargeImage}
                largeAlt={circleLargeAlt}
                smallImage={circleSmallImage}
                smallAlt={circleSmallAlt}
              />
            ) : useArches && circleLargeImage && circleSmallImage ? (
              <OverlappingArches
                largeImage={circleLargeImage}
                largeAlt={circleLargeAlt}
                smallImage={circleSmallImage}
                smallAlt={circleSmallAlt}
              />
            ) : (
              <div
                ref={tiltRef}
                className={`tilt-el depth-shadow-lg group m-3 overflow-hidden rounded-2xl sm:m-4 lg:m-5 ${
                  imageSize === "compact"
                    ? "h-64 sm:h-80 lg:h-[24rem]"
                    : "h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] lg:h-[calc(100%-2.5rem)]"
                }`}
              >
                {image && (
                  <img
                    src={image}
                    alt={imageAlt}
                    width={imageWidth}
                    height={imageHeight}
                    loading="lazy"
                    style={imageFit === "contain" ? undefined : { objectPosition: imagePosition }}
                    className={`photo-editorial cinematic-focus w-full ${imageFit === "contain" ? "object-contain object-right-top" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.03]${
                      visible ? " cinematic-focus-visible" : ""
                    } ${
                      imageSize === "compact" ? "h-full" : "h-64 sm:h-80 lg:h-full lg:min-h-[24rem]"
                    }`}
                  />
                )}
              </div>
            )}
          </div>
        )}

        {/* =========================================================
            TEXT SIDE
            ========================================================= */}

        <div
          className={`flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-16 ${
            imageSize === "compact" ? "lg:py-10" : "lg:py-14"
          } ${textReveal}${visible ? " reveal-visible" : ""} ${
            centered ? "items-center text-center" : reverse ? "lg:order-1" : ""
          }`}
          style={{
            transitionDelay: visible ? "150ms" : "0ms",
          }}
        >
          <div className={centered ? "max-w-2xl" : "max-w-xl"}>
            {eyebrow && (
              <p className={`eyebrow ${green ? "text-cream/70" : "text-primary"}`}>{eyebrow}</p>
            )}

            <h2
              className={
                nurseryFont
                  ? `heading-nursery mt-4 text-3xl sm:text-4xl lg:text-5xl ${green ? "text-cream" : "text-foreground"}`
                  : refinedHeading
                    ? "service-refined-heading mt-4 text-3xl tracking-tight text-accent-green sm:text-4xl lg:text-5xl"
                    : `display-lg mt-4 ${greenHeading ? "text-accent-green" : green ? "text-cream" : darkHeading ? "text-[var(--heading-foreground)]" : "text-foreground"}`
              }
            >
              {heading}
            </h2>

            {content ? (
              <div className={`mt-5 ${green ? "text-body-dark" : "text-body-light"}`}>
                {content}
              </div>
            ) : (
              body && (
                <p
                  className={`${nurseryFont ? "body-nursery" : "prose-body"} mt-5 ${green ? "text-body-dark" : "text-body-light"}`}
                >
                  {body}
                </p>
              )
            )}

            {extra && (
              <p className={`prose-body mt-4 ${green ? "text-body-dark" : "text-body-light"}`}>
                {extra}
              </p>
            )}

            {cta && (
              <Link
                to={cta.to}
                className={`btn-motion mt-7 inline-block rounded-md px-7 py-3.5 text-sm font-bold uppercase tracking-[0.12em] transition-colors ${
                  green
                    ? "bg-accent text-accent-foreground hover:bg-accent/85"
                    : "bg-primary text-primary-foreground hover:bg-green-deep"
                }`}
              >
                {cta.label}
              </Link>
            )}
          </div>
        </div>
      </div>

      {dividerTo && <OrganicDivider fill={dividerTo} size="sm" variant={dividerVariant} />}
    </section>
  );
}
