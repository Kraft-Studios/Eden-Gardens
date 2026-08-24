import { Link } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import tools from "@/assets/tools.png";

export function VisualIntro() {
  return (
    <section
      className="relative z-30 flex min-h-[600px] items-center justify-center overflow-hidden bg-white bg-cover bg-center sm:min-h-[720px]"
      style={{ backgroundImage: `url(${tools})` }}
    >
      <div
        className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-6 py-16 text-center"
        style={{ textShadow: "0 2px 16px rgba(255, 255, 255, 0.85), 0 1px 4px rgba(255, 255, 255, 0.9)" }}
      >
        <p className="eyebrow text-primary">Eden Gardens</p>

        <h2 className="what-we-do mt-4">What We Do</h2>

        <div className="mt-5 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-10 bg-primary/50" />
          <Leaf className="h-4 w-4 text-primary" />
          <span className="h-px w-10 bg-primary/50" />
        </div>

        <p className="prose-body mx-auto mt-6 max-w-2xl text-body-light">
          From regular lawn mowing to detailed garden maintenance, Eden Gardens
          helps keep outdoor spaces neat, healthy and well cared for. We provide
          reliable, practical garden services with attention to the details that
          make a real difference.
        </p>

        <Link
          to="/services"
          className="btn-motion btn-pill mt-8 px-7 py-3.5 text-sm shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Explore Our Services
        </Link>
      </div>
    </section>
  );
}
