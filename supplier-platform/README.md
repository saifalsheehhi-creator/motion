# منصّة البحث الذكي عن الموردين والصفقات

Landing page for the *AI Supplier Discovery & Sourcing Platform* project brief. This is a
standalone app — it is not related to the Framer Motion / `motion` library that lives in the
rest of this repository; it was placed at the repo root (outside the `packages/*` and `dev/*`
Yarn workspaces) so it has its own `node_modules` and doesn't affect the library's build.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui**-style primitives in `src/components/ui/` (hand-authored — the `shadcn` CLI's
  registry at `ui.shadcn.com` was not reachable from the build environment, so `components.json`,
  `lib/utils.ts`, the CSS-variable theme, and the primitives were written to match what the CLI
  would generate)
- **motion** (`motion/react`) for scroll reveals and the animated stat counters
- **lucide-react** for icons
- Self-hosted **Reem Kufi** (headings), **IBM Plex Sans Arabic** (body), and **IBM Plex Mono**
  (figures/ledger numbers) via `next/font/local` — see `src/app/fonts.ts`
- Full **RTL** layout (`dir="rtl"` on `<html>`, logical Tailwind utilities throughout)

## Structure

```
src/app/            layout, page, global theme tokens (globals.css), local font files
src/components/ui/  shadcn-style primitives (button, card, badge, table, separator, reveal)
                     + footer-section.tsx (the requested drop-in Footer component)
src/components/     header, hero, section heading, brand mark, animated counter
src/components/sections/  the 9 content sections (problem/solution, pricing, risk, etc.)
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Note

This is a project proposal / pitch document turned into a landing page — the pricing, revenue
model, and roadmap in this document are all illustrative and not final (see the disclaimer in
the page footer).
