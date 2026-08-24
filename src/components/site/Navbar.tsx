import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/content/site";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`nav-enter sticky top-0 z-50 border-b text-foreground backdrop-blur-md transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-black/10 bg-white/95 shadow-[0_8px_30px_-14px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-black/5 bg-white/85"
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 transition-[padding] duration-300 lg:px-10 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <Link
          to="/"
          viewTransition
          className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Eden Gardens Garden Services"
            width={1402}
            height={1122}
            className="h-10 w-auto rounded-lg lg:h-11"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              viewTransition
              className="nav-alt-font relative pb-1 text-sm uppercase tracking-[0.03em] text-foreground/80 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[var(--footer-bg)] after:transition-all after:duration-300 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent [&.active]:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            viewTransition
            className="btn-motion rounded-md bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] text-accent-foreground transition-colors hover:bg-accent/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Get a Quote
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to="/contact"
            viewTransition
            className="btn-motion rounded-md bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-accent-foreground"
            onClick={() => setOpen(false)}
          >
            Quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-md border border-foreground/20 p-2 transition-colors hover:border-accent hover:text-accent"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-black/10 bg-white lg:hidden">
          <ul className="mx-auto max-w-[1400px] px-6 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className="border-b border-black/10 last:border-0">
                <Link
                  to={link.to}
                  viewTransition
                  onClick={() => setOpen(false)}
                  className="nav-alt-font relative block py-4 text-base uppercase tracking-[0.06em] text-foreground/85 after:absolute after:bottom-2 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-[var(--footer-bg)] after:transition-all after:duration-300 hover:text-foreground [&.active]:after:w-10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
