import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import moanermachine from "@/assets/moanermachine.png";
import truck from "@/assets/truck.png";
import grass from "@/assets/grass.png";
import ours from "@/assets/ours.jpg";

const heroSlides = [moanermachine, truck, grass, ours];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 11000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[90dvh] items-end overflow-hidden"
      style={{ backgroundColor: "var(--green-deep)" }}
    >
      {heroSlides.map((slide, index) => (
        <img
          key={slide}
          src={slide}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1200}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          className={`photo-bright hero-slide absolute inset-0 h-full w-full object-cover object-center-[25%]${
            index === activeSlide ? " hero-slide-active" : ""
          }`}
        />
      ))}

      {/* A soft scrim behind the text only — the rest of the photo stays
          bright and untouched. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,color-mix(in_oklab,var(--green-deep)_80%,transparent)_0%,transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,color-mix(in_oklab,var(--green-deep)_48%,transparent)_0%,transparent_52%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pb-16 pt-32 lg:px-10 lg:pb-24 lg:pt-40">
        <div className="max-w-2xl">
          <p
            className="eyebrow rise text-cream/70"
            style={{ textShadow: "0 2px 12px rgba(4, 10, 6, 0.5)" }}
          >
            Complete Garden Care
          </p>
          <h1
            className="display-xl rise mt-4 text-cream"
            style={{ animationDelay: "130ms", textShadow: "0 2px 20px rgba(4, 10, 6, 0.5)" }}
          >
            Your garden,
            <br />
            <span className="font-serif font-medium italic">well cared for.</span>
          </h1>
          <p
            className="prose-body rise mt-5 max-w-xl text-body-dark"
            style={{ animationDelay: "260ms", textShadow: "0 1px 10px rgba(4, 10, 6, 0.5)" }}
          >
            Professional lawn and garden maintenance for homes and outdoor spaces. Reliable service,
            careful workmanship and a clean finish every time.
          </p>
          <div className="rise mt-7 flex flex-wrap gap-4" style={{ animationDelay: "390ms" }}>
            <Link
              to="/contact"
              viewTransition
              className="btn-motion btn-pill px-7 py-3.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              Get a Quote
            </Link>
            <Link
              to="/services"
              viewTransition
              className="btn-motion btn-pill px-7 py-3.5 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
