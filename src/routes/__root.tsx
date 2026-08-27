import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { IntroSplash } from "@/components/site/IntroSplash";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eden Gardens | Complete Garden Care, South Coast KZN" },
      {
        name: "description",
        content:
          "Lawn mowing, hedge trimming, weeding, tree felling and general garden maintenance from Eden Gardens. Reliable, local garden care for homes and outdoor spaces on the KwaZulu-Natal south coast.",
      },
      { property: "og:site_name", content: "Eden Gardens" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;0,700;1,500&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Manrope:wght@300;400&display=swap",
      },
      {
        // Navbar (site-wide) + home page headings/body copy/buttons —
        // matches the typography on gardenofedenberries.com (Paytone One
        // display font, Bellota Text body font, Dosis button font).
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Paytone+One&family=Bellota+Text:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Dosis:wght@500;600;700;800&display=swap",
      },
      {
        // Contact page hero heading — matches the "Contact" heading font
        // on scissortailokc.com/contact/ (Momo Trust Display).
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Momo+Trust+Display&display=swap",
      },
      {
        rel: "icon",
        href: `${import.meta.env.BASE_URL}favicon.ico`,
        type: "image/x-icon",
      },
    ],
    // NOTE — "ivypresto-display" (Services page headings) is an Adobe
    // Fonts/Typekit font, not a Google Font. It requires an Adobe Fonts
    // license/kit with that family added to it. Once you have a kit ID,
    // add it here as a script so the browser can actually load the font:
    //   scripts: [{ src: "https://use.typekit.net/<your-kit-id>.js" }]
    // (plus the standard Typekit loader snippet that calls Typekit.load()).
    // Without it, .service-refined-heading already falls back cleanly to
    // Cormorant Garamond — no broken/missing-font flash either way.
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <IntroSplash />
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
