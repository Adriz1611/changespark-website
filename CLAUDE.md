# CLAUDE.md — ChangeSpark Website

Codebase reference for Claude Code. Read this before making changes.

---

## Stack & Routing

- **Framework:** Next.js 15, App Router (`src/app/`)
- **Language:** JavaScript/JSX — no TypeScript
- **Styling:** Tailwind CSS 3.4 — use utility classes, no custom CSS unless necessary
- **Path alias:** `@/*` maps to `./src/*` (configured in `jsconfig.json`)
- **Routing:** File-based via App Router. Each `page.js` inside `src/app/` is a route. Dynamic segments use `[param]` folder names.

---

## Key Files

| File | Purpose |
|---|---|
| `src/app/layout.js` | Root layout — wraps every page with `<Nav>`, `<Footer>`, `<Whatsapp>`, Vercel analytics |
| `src/components/Nav.js` | Navbar — `navItems` array controls links; `handleDonateClick` routes to external Razorpay URL |
| `src/components/Footer.js` | Footer with social links and developer credits |
| `next.config.mjs` | Image domains allowlist for `next/image` — add new external image hosts here |
| `tailwind.config.js` | Tailwind config |
| `src/app/globals.css` | Global CSS (minimal — prefer Tailwind) |

---

## Supabase

Two clients — use the right one for context:

- `src/utils/supabase/server.js` — server components and route handlers (cookie-based auth)
- `src/utils/supabase/client.js` — client components only

Environment variables required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

---

## Pages & Routes

| Route | File |
|---|---|
| `/` | `src/app/page.js` |
| `/projects` | `src/app/projects/page.js` |
| `/projects/greengyan` | `src/app/projects/greengyan/page.js` |
| `/projects/natunpata` | `src/app/projects/natunpata/page.js` |
| `/projects/pranati` | `src/app/projects/pranati/page.js` |
| `/team` | `src/app/team/page.js` |
| `/green-walkathon-2026` | `src/app/green-walkathon-2026/page.js` |
| `/join-us` | `src/app/join-us/page.js` |
| `/contact-us` | `src/app/contact-us/page.js` |

**Removed pages (do not recreate):**
- `/donate` — removed; donations go to `https://rzp.io/rzp/changespark-donate`
- `/blog` — removed entirely; `src/app/blog/` and `src/components/pages/blog.js` deleted

---

## Navbar

`src/components/Nav.js`

- `navItems` array (line ~9) — add/remove nav links here
- `handleDonateClick` — opens `https://rzp.io/rzp/changespark-donate` in the same tab
- Both desktop and mobile menus are rendered in this single file
- Navbar auto-hides on scroll down, reappears on scroll up
- Background becomes opaque white after 20px of scroll

---

## Fonts

Loaded in `src/app/layout.js` via `next/font/google`:
- Inika, Tauri, Poppins, Rubik, Playfair Display

CSS variables set: `--font-inika`, `--font-tauri`, `--font-poppins`, `--font-rubik`, `--font-playfair`

Tailwind font utilities: `font-heading`, `font-paragraph` etc. (see `tailwind.config.js` for mappings)

---

## External Image Domains

If adding images from a new external domain, add it to the `images.remotePatterns` array in `next.config.mjs`. Current allowed hosts:
- `goklwwrtrwguuuezbodj.supabase.co`
- `eexvwdvzaibdautasttz.supabase.co`
- `www.material-tailwind.com`
- `placehold.co`

---

## Dev Commands

```bash
npm run dev      # Development server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint
```
