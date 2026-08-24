import out from "@/assets/out.jpg";
import garden from "@/assets/garden.jpg";
import work3 from "@/assets/work-3.jpg";
import maintainance from "@/assets/maintainance.jpg";
import { ExploreGalleryCTA } from "@/components/site/ExploreGalleryCTA";
import { OrganicDivider } from "@/components/site/OrganicDivider";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type WorkFigureProps = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  figureClassName: string;
  imgHeightClassName: string;
  index: number;
};

function WorkFigure({
  src,
  alt,
  caption,
  width,
  height,
  figureClassName,
  imgHeightClassName,
  index,
}: WorkFigureProps) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <figure
      ref={ref}
      className={`reveal${visible ? " reveal-visible" : ""} ${figureClassName}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className={`photo-editorial cinematic-focus w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]${
            visible ? " cinematic-focus-visible" : ""
          } ${imgHeightClassName}`}
        />
      </div>
      <figcaption className="eyebrow mt-4 text-primary">{caption}</figcaption>
    </figure>
  );
}

export function OurWork() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative z-30 overflow-hidden bg-cream">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-14 pt-8 lg:px-10 lg:pb-20 lg:pt-14">
        <div ref={ref} className={`max-w-2xl reveal${visible ? " reveal-visible" : ""}`}>
          <p className="eyebrow text-primary">Our Work</p>
          <h2 className="display-lg mt-4 text-foreground">Gardens we look after</h2>
          <p className="prose-body mt-4 text-body-light">
            A look at the everyday work behind a well-kept outdoor space: mown lawns, trimmed
            hedges, tidy beds and gardens left clean at the end of every visit.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <WorkFigure
            src={out}
            alt="A landscaped South African townhouse garden entrance at dusk"
            caption="Outdoor spaces"
            width={576}
            height={1024}
            figureClassName="lg:col-span-5 lg:row-span-2"
            imgHeightClassName="h-64 lg:h-[28rem]"
            index={0}
          />

          <WorkFigure
            src={garden}
            alt="A rock garden with succulents and aloe beside a South African home"
            caption="Garden beds"
            width={1024}
            height={576}
            figureClassName="lg:col-span-7"
            imgHeightClassName="h-56 lg:h-[13rem]"
            index={1}
          />

          <WorkFigure
            src={work3}
            alt="Tidy garden bed with fresh mulch and clipped shrubs"
            caption="Garden maintenance"
            width={1200}
            height={1200}
            figureClassName="lg:col-span-3"
            imgHeightClassName="h-52 lg:h-[13rem]"
            index={2}
          />

          <WorkFigure
            src={maintainance}
            alt="A landscaped hillside garden bed with rocks and succulents"
            caption="Landscaped beds"
            width={1024}
            height={576}
            figureClassName="lg:col-span-4"
            imgHeightClassName="h-52 lg:h-[13rem]"
            index={3}
          />
        </div>

        <ExploreGalleryCTA />
      </div>
      <OrganicDivider fill="var(--cream)" size="sm" flip variant="blob" />
    </section>
  );
}
