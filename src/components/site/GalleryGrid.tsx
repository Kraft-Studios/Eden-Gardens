import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import type { GalleryImage } from "@/content/gallery";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/content/gallery";

const FILTERS = ["All", ...GALLERY_CATEGORIES] as const;
const PER_PAGE = 12;

function GalleryItem({ image }: { image: GalleryImage }) {
  const { ref, visible } = useScrollReveal<HTMLElement>();

  return (
    <figure
      ref={ref}
      className={`reveal group relative mb-5 break-inside-avoid overflow-hidden bg-cream-dim${visible ? " reveal-visible" : ""}`}
    >
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        className={`photo-editorial cinematic-focus h-auto w-full object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-105${
          visible ? " cinematic-focus-visible" : ""
        }`}
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4 pt-10">
        <p className="font-display font-bold text-cream">{image.caption}</p>
        <p className="eyebrow mt-1 text-cream/70">{image.category}</p>
      </figcaption>
    </figure>
  );
}

function GalleryPagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Gallery pages" className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        aria-label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="btn-motion flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronLeft size={16} aria-hidden="true" />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          type="button"
          aria-current={p === page ? "page" : undefined}
          aria-label={`Page ${p}`}
          onClick={() => onChange(p)}
          className={`btn-motion flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors ${
            p === page
              ? "bg-primary text-primary-foreground"
              : "border border-primary/30 text-primary hover:bg-primary/10"
          }`}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        aria-label="Next page"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="btn-motion flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:pointer-events-none disabled:opacity-30"
      >
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </nav>
  );
}

export function GalleryGrid({ images = GALLERY_IMAGES }: { images?: GalleryImage[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]>("All");
  const [page, setPage] = useState(1);

  const filteredImages =
    activeFilter === "All" ? images : images.filter((image) => image.category === activeFilter);

  const totalPages = Math.max(1, Math.ceil(filteredImages.length / PER_PAGE));
  const pageImages = filteredImages.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1400px] px-6 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-12">
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.12em] transition-colors filter-pill ${
                activeFilter === filter ? "filter-pill--active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-4">
          {pageImages.map((image) => (
            <GalleryItem key={image.id} image={image} />
          ))}
        </div>

        <GalleryPagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </section>
  );
}
