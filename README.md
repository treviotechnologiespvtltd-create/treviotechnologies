# Trevio OS — Trevio Technologies Website

A premium, cinematic marketing site for Trevio Technologies Private Limited,
built on the exact stack from the project brief.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theme, no config file needed)
- **Framer Motion** — page/section entrance choreography
- **React Three Fiber + Three.js** — animated particle network in the hero
- **Lenis** — smooth inertial scrolling
- **next-themes** — System / Light / Dark mode, remembers preference
- **React Hook Form + Zod** — validated contact form
- **Lucide React** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
```

Deploys as-is to **Vercel** with zero configuration (`vercel deploy`).

## What's built

**Phase 1 — Foundation**
- Boot loader — OS-style boot sequence on first visit (session-based, skippable), respects `prefers-reduced-motion`
- Navbar — glassmorphic, scroll-aware, mobile menu, theme switcher, sticky CTA
- Footer, custom cursor, theme system (System/Light/Dark)

**Phase 2**
- Hero — full-screen animated 3D particle network (mouse-reactive, React Three Fiber) with staggered headline reveal
- Services — bento-style grid, AI services glow purple, software services glow blue
- About — founding-team structure and studio positioning
- Timeline ("How We Work") — 5-stage process with GSAP ScrollTrigger reveal + scroll-scrubbed progress line

**Phase 3**
- Portfolio — editorial list-style project rows
- Case Studies — problem / solution / impact deep-dives for 2 flagship projects
- Technology Stack — infinite marquee
- Industries — 8-sector grid

**Phase 4**
- Pricing — 3-tier cards (Starter / Growth / Enterprise)
- Project Estimator — 3-question wizard → tier + range recommendation → booking CTA
- Contact — validated form (name, email, budget, message) with success state
- FAQ — accessible accordion (`aria-expanded`, `aria-controls`)
- Newsletter — validated email capture

**Branding & polish (latest pass)**
- Real logo wired into Navbar, Footer, boot loader, favicon, OG/Twitter image, and JSON-LD
- Eyebrow labels switched from the `// comment` style to a plain uppercase label with a dot indicator
- Services expanded from 6 to 9 disciplines; Why Trevio expanded from 4 to 6 points
- Hero gained a trust-badge row (NDA on request, fixed-scope pricing, etc.) — all process claims, not fabricated client claims
- Testimonials carousel added — **placeholder quotes only**, clearly marked in the code; replace before launch
- Floating WhatsApp button, back-to-top button, and mobile sticky call/quote bar — **update the placeholder phone number** in `components/ui/floating-widgets.tsx`

**Phase 5**
- SEO — dynamic metadata, OpenGraph/Twitter cards, `robots.ts`, `sitemap.ts`, `manifest.ts`, Organization JSON-LD schema
- Accessibility — skip-to-content link, `aria-*` on interactive widgets, `prefers-reduced-motion` respected everywhere motion is used, visible focus states
- Performance — 3D scene client-only via `next/dynamic`, font optimization via `next/font`, static generation on every route
- Legal pages — `/privacy` and `/terms` (generic templates — **replace with counsel-reviewed copy before launch**)
- Deployment — zero-config on Vercel (see below)

## Design tokens

Defined in `app/globals.css` under `:root` / `.light`:

| Token | Dark | Light | Use |
|---|---|---|---|
| `--void` | `#05070d` | `#f5f7fc` | page background |
| `--royal` | `#3b5bff` | `#2544e0` | primary brand blue |
| `--cyan` | `#4fe0ff` | `#0891b2` | accent / links |
| `--ink` | `#eef2ff` | `#0a0f1f` | primary text |
| `--muted` | `#8592b4` | `#55607d` | secondary text |

Fonts: **Space Grotesk** (display/headlines), **Inter** (body), **JetBrains Mono** (eyebrows, boot sequence, code-flavored labels) — loaded via `next/font/google`, so they need network access on first `npm run build`.

## Not built (out of the original brief's scope, flagged for a future pass)

- Testimonials (needs real client quotes — placeholder testimonials weren't included on purpose)
- Blog / Careers pages
- CMS wiring (Notion/Sanity/Contentful) for Portfolio + Blog
- Real analytics integration (GA / Clarity / Plausible — install and drop in your IDs)
- Live calendar booking on "Book Consultation" (currently anchors to the Estimator/Contact flow)
- Multi-language support (English/Hindi/Gujarati)

## Before you launch

- Replace `/privacy` and `/terms` content with counsel-reviewed copy
- Swap placeholder email/phone in the Contact and Footer sections for real ones
- Replace the placeholder quotes in `components/sections/testimonials.tsx` with real client feedback — don't ship the bracketed placeholders
- Update `WHATSAPP_NUMBER` and `PHONE_NUMBER` in `components/ui/floating-widgets.tsx`
- Wire the Contact and Newsletter forms to a real email provider (Resend/EmailJS) — they currently simulate submission client-side
- Update `metadataBase` and JSON-LD in `app/layout.tsx` if the final domain differs from `trevio.tech`
- No fabricated "Trusted by" client-logo strip was added on purpose — add one once you have real client logos to show

## Structure

```
app/
  page.tsx          home page — assembles all sections
  layout.tsx         fonts, metadata, JSON-LD, theme + scroll providers
  privacy/, terms/    legal pages
  robots.ts, sitemap.ts, manifest.ts
components/
  layout/            navbar, footer, boot-loader, legal-shell
  sections/           hero, services, why-trevio, about, timeline,
                       tech-stack, industries, portfolio, case-studies,
                       pricing, estimator, faq, newsletter, contact
  three/              R3F particle network
  ui/                 theme-switcher, custom-cursor
  providers/          theme-provider, smooth-scroll-provider
lib/                 utils (cn helper)
```
