import type { ReactNode } from "react";
import { SERVICE_AREAS } from "@/content/site";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import outside from "@/assets/outside.jpg";
import gardenmaintainance from "@/assets/gardenmaintainance.jpg";
import soil from "@/assets/soil.jpg";

type TextPanelProps = {
  heading: string;
  body: string;
  list?: readonly string[];
};

function TextPanel({ heading, body, list }: TextPanelProps) {
  const { ref, visible } = useScrollReveal<HTMLUListElement>();

  return (
    <div className="flex h-full items-center bg-white px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
      <div className="max-w-md">
        <h2 className="heading-nursery text-3xl text-foreground sm:text-4xl">{heading}</h2>
        <p className="body-nursery mt-5 text-body-light">{body}</p>

        {list && (
          <ul ref={ref} className="service-areas-list mt-8" aria-label="Areas we serve">
            {list.map((area, i) => (
              <li
                key={area}
                className={`service-area-item${visible ? " service-area-item-visible" : ""}`}
                style={{ transitionDelay: visible ? `${i * 85}ms` : "0ms" }}
              >
                <span className="text-base font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="heading-nursery text-lg text-foreground sm:text-xl">{area}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function ImagePanel({ image, alt }: { image: string; alt: string }) {
  return (
    <img
      src={image}
      alt={alt}
      loading="lazy"
      className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[512px]"
    />
  );
}

function SplitRow({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="split-row">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

export function ServiceAreas() {
  return (
    <section className="home-page relative z-30 bg-white">
      <SplitRow
        left={
          <TextPanel
            heading="Service Areas"
            body="We provide reliable lawn and garden care across the South Coast, helping homes and outdoor spaces stay neat, healthy and beautifully maintained."
            list={SERVICE_AREAS}
          />
        }
        right={<ImagePanel image={outside} alt="A landscaped streetside garden bed with mulch, stone pillars and a pebble walkway" />}
      />

      <SplitRow
        left={<ImagePanel image={gardenmaintainance} alt="Ongoing garden maintenance work" />}
        right={
          <TextPanel
            heading="Local Knowledge and Reliable Service"
            body="Being locally based means we understand the South Coast's climate, gardens and seasonal conditions. We tailor our lawn and garden care to suit each property, delivering dependable results throughout the year."
          />
        }
      />

      <SplitRow
        left={
          <TextPanel
            heading="Caring for Gardens Across the South Coast"
            body="Our services are available throughout the South Coast, providing consistent lawn and garden care for residential properties, holiday homes and outdoor spaces. Whether you need regular maintenance or help keeping your garden looking its best, our team delivers practical, dependable care tailored to the needs of each property."
          />
        }
        right={<ImagePanel image={soil} alt="Freshly prepared soil ready for a new lawn" />}
      />
    </section>
  );
}
