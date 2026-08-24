# Eden Gardens

A marketing website for **Eden Gardens**, a lawn and garden maintenance business serving the KwaZulu-Natal South Coast (Shelly Beach, Ramsgate, Uvongo Beach, Southbroom and Margate). The site presents the company's services, past work and service areas, and lets visitors request a quote.

## Tech Stack

- **[React 19](https://react.dev/)** with **[TanStack Start](https://tanstack.com/start)** and **[TanStack Router](https://tanstack.com/router)** (file-based routing, SSR)
- **[Vite](https://vitejs.dev/)** — dev server and build tooling
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling
- **[Radix UI](https://www.radix-ui.com/)** primitives + [shadcn](https://ui.shadcn.com/)-style components
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** — form handling and validation
- **TypeScript**, **ESLint**, **Prettier**

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, services overview, testimonials, before/after comparison |
| `/services` | Detailed breakdown of each service offered |
| `/about` | Company story, team and values |
| `/our-work` | Project gallery |
| `/gallery` | Photo gallery |
| `/service-areas` | Areas served, with local process detail |
| `/contact` | Contact details and a quote request form |

## Getting Started

**Prerequisites:** Node.js (LTS) and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating) if you don't have it.

```sh
# Clone the repository
git clone <this-repository-url>
cd eden-gardens-pro

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will be available at the local URL printed in the terminal (defaults to `http://localhost:8080`, falling back to the next free port).

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run build:dev` | Build in development mode (useful for debugging a production build) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the codebase |
| `npm run format` | Format the codebase with Prettier |

## Project Structure

```
src/
├── routes/            # File-based routes (pages)
├── components/
│   ├── site/           # Page sections and site-specific components
│   └── ui/              # Reusable UI primitives (shadcn/Radix-based)
├── content/            # Static content and copy (services, site data)
├── hooks/              # Shared React hooks
├── assets/             # Images used across the site
└── styles.css           # Global styles and Tailwind theme
```

## Deployment

Production builds are generated with `npm run build` and served via [Nitro](https://nitro.build/). Deploy the output to any Nitro-supported target (Cloudflare, Node, Vercel, etc.) that fits your hosting setup.
