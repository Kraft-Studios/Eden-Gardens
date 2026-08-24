import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { OrganicDivider } from "@/components/site/OrganicDivider";

export function PullQuote({
  eyebrow,
  quote,
  dividerTo,
  dividerVariant = "blob",
  dividerTopFill,
  dividerTopVariant = "blob",
}: {
  eyebrow?: string;
  quote: string;
  /** Bottom-edge divider fill colour (the next section's colour). */
  dividerTo?: string;
  /** Bottom-edge divider shape. */
  dividerVariant?: "blob" | "wave";
  /** Top-edge divider fill colour (the previous section's colour). */
  dividerTopFill?: string;
  /** Top-edge divider shape. */
  dividerTopVariant?: "blob" | "wave";
}) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative z-30 overflow-hidden bg-green-deep">
      {dividerTopFill && (
        <OrganicDivider fill={dividerTopFill} size="sm" edge="top" variant={dividerTopVariant} />
      )}
      <div
        ref={ref}
        className={`relative z-10 reveal mx-auto max-w-3xl px-6 py-14 text-center lg:py-20${
          visible ? " reveal-visible" : ""
        } ${dividerTopFill ? "pt-10 sm:pt-12 lg:pt-16" : ""} ${
          dividerTo ? "pb-10 sm:pb-12 lg:pb-16" : ""
        }`}
      >
        {eyebrow && <p className="eyebrow text-cream/70">{eyebrow}</p>}
        <p className="font-serif mt-4 text-2xl italic leading-snug text-cream sm:text-3xl lg:text-4xl">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
      {dividerTo && <OrganicDivider fill={dividerTo} size="sm" variant={dividerVariant} />}
    </section>
  );
}
