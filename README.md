# ChangeSpark Foundation — Official Website

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Supabase-PostgreSQL-3ecf8e?logo=supabase" alt="Supabase" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel" alt="Vercel" />
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" alt="Status" />
</p>

The official website of **ChangeSpark Foundation** — a non-profit working at the intersection of education, environment, and community empowerment. This repository contains the full source code for [changespark.in](https://changespark.in).

---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## About

ChangeSpark Foundation drives grassroots change through focused projects like **GreenGyan** (environmental education), **NatunPata** (literacy), and **Pranati** (community welfare). The website serves as the public face of the foundation — showcasing projects, the team, events, and providing a direct donation pathway via Razorpay.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) — App Router |
| Styling | [Tailwind CSS 3.4](https://tailwindcss.com/) |
| UI Components | [Flowbite React](https://flowbite-react.com/), [Lucide React](https://lucide.dev/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Database & Auth | [Supabase](https://supabase.com/) (PostgreSQL + Storage) |
| Analytics | Vercel Analytics + Speed Insights |
| Fonts | Poppins, Rubik, Playfair Display, Inika, Tauri (via Google Fonts) |
| Language | JavaScript (JSX) — no TypeScript |
| Deployment | [Vercel](https://vercel.com/) |

---

## Project Structure

```
changespark-website/
├── public/                        # Static assets (images, icons)
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── layout.js              # Root layout (Nav, Footer, Analytics)
│   │   ├── page.js                # Home page
│   │   ├── contact-us/page.js     # Contact page
│   │   ├── green-walkathon-2026/  # Event landing page
│   │   ├── join-us/page.js        # Volunteer signup page
│   │   ├── projects/              # Projects overview + individual project pages
│   │   │   ├── page.js
│   │   │   ├── greengyan/page.js
│   │   │   ├── natunpata/page.js
│   │   │   └── pranati/page.js
│   │   └── team/page.js           # Team page
│   ├── components/
│   │   ├── Nav.js                 # Navbar (desktop + mobile)
│   │   ├── Footer.js              # Footer with social links
│   │   ├── CoreValuesSection.js   # Mission & values display
│   │   ├── Testimonials.js        # Success stories carousel
│   │   └── ui/
│   │       ├── button.jsx
│   │       ├── whatsApp.jsx       # Floating WhatsApp widget
│   │       └── copytoclipboard.jsx
│   ├── utils/
│   │   └── supabase/
│   │       ├── client.js          # Browser-side Supabase client
│   │       ├── server.js          # Server-side Supabase client (cookie-based)
│   │       └── middleware.js      # Auth middleware
│   └── app/globals.css            # Global styles
├── next.config.mjs                # Next.js config (image domains, etc.)
├── tailwind.config.js
├── jsconfig.json                  # Path alias: @/* → ./src/*
└── package.json
```

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — hero, about, core values, testimonials |
| `/projects` | All active projects |
| `/projects/greengyan` | GreenGyan project detail |
| `/projects/natunpata` | NatunPata project detail |
| `/projects/pranati` | Pranati project detail |
| `/team` | Meet the team |
| `/green-walkathon-2026` | Green Walkathon 2026 event page |
| `/join-us` | Volunteer registration |
| `/contact-us` | Contact information & social links |

> Donations are handled externally via Razorpay: [rzp.io/rzp/changespark-donate](https://rzp.io/rzp/changespark-donate)

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn
- A Supabase project (for database features)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/changespark-website.git
cd changespark-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your Supabase credentials (see Environment Variables section)

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server (with Turbopack)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Environment Variables

Create a `.env.local` file in the root of the project with the following:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

These are used for connecting to the Supabase backend (database queries and storage). Both variables are prefixed with `NEXT_PUBLIC_` as they are accessed client-side as well as server-side.

> Never commit `.env.local` to version control.

---

## Deployment

The site is deployed on **Vercel** and auto-deploys on every push to the main branch.

- **Production URL:** [changespark.in](https://changespark.in)
- **Vercel Dashboard:** Managed under the Vercel account linked to this repository

Vercel Analytics and Speed Insights are enabled in `src/app/layout.js`.

Allowed image domains (configured in `next.config.mjs`):
- `goklwwrtrwguuuezbodj.supabase.co`
- `eexvwdvzaibdautasttz.supabase.co`
- `www.material-tailwind.com`
- `placehold.co`

---

## Contributing

This project is maintained by the ChangeSpark Foundation development team.

**Core developers:**
[Adrij](https://www.linkedin.com/in/adrijbhadra/) •
[Sanjit](https://www.linkedin.com/in/sanjit-mathur-346209320/) •
[Sarthak](https://www.linkedin.com/in/sarthak-rajput-744848328/) •
[Monodeep](https://www.linkedin.com/in/monodeepdas/) •
[Priyanshu](https://www.linkedin.com/in/priyanshu-debnath/)

If you're a foundation member contributing to this repo:

1. Create a feature branch off `main` (`git checkout -b feature/your-feature`)
2. Make your changes and test locally with `npm run dev`
3. Open a pull request with a clear description of the change

---

*Built with purpose by the ChangeSpark Foundation team.*
