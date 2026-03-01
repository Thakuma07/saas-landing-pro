# 🚀 SaaS Landing Page

A premium, production-ready SaaS landing page built with **Next.js 14**, **Framer Motion**, **TailwindCSS**, and **TypeScript**. Packed with rich micro-interactions, scroll-driven animations, and polished UI components designed to convert visitors into customers.

![Preview](https://github.com/user-attachments/assets/85e0357d-65a3-45a5-94fb-ead789a718e2)

---

## ✨ Live Demo

👉 [saas-landing-nextjs.vercel.app](https://saas-landing-nextjs.vercel.app/)

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Sections Overview](#-sections-overview)
- [Reusable Components](#-reusable-components)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Customization Guide](#-customization-guide)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎨 Features

### UI & Design
- **Premium glassmorphism & bento grid layouts** for a modern, editorial feel
- **Radial gradient hero** with floating 3D product images and parallax scroll effect
- **Dark & light section contrast** using seamless `WaveDivider` transitions between sections
- **DM Sans** font loaded via `next/font` for consistent, optimized typography
- **Fully responsive** — mobile-first layout with an animated slide-in mobile navigation drawer

### Animations & Interactions
- **Scroll-driven horizontal showcase** — 4-card track that scrolls horizontally as the user scrolls vertically, with a live SVG progress path and animated step dots
- **Magnetic buttons** — elements physically follow the cursor with a spring physics parallax effect
- **Ripple click effect** on all CTA buttons — Material-style ink ripple spawned at exact click position
- **3D tilt cards** — feature and pricing cards tilt in 3D on hover using CSS `perspective` transforms
- **Holographic pricing card** — the "Popular" Pro tier shimmers with a radial gradient that follows the mouse
- **ScrambleText headline** — hero heading animates through random characters before resolving to the final text on scroll-into-view
- **Custom cursor glow** — a soft radial gradient blob smoothly follows the cursor across the entire page using `requestAnimationFrame` lerp
- **Scroll progress bar** — thin fixed bar at the top of the viewport indicating reading progress
- **Back-to-top button** — fades in after scrolling down, smoothly returns the user to the top
- **Loading screen** — animated progress bar and logo mark shown for ~1.4s on first load before fading out
- **Smooth scroll** powered by **Lenis** for buttery inertial scrolling across the whole page
- **Staggered entrance animations** on the hero section using Framer Motion variants

### Content Sections
- Sticky **announcement bar** with animated arrow CTA
- **Stats counter** — animated number counters that trigger on scroll into view
- **Logo ticker** — infinite marquee of partner/integration brand logos
- **Features bento grid** — 6 features in a 3-column responsive bento layout with tilt cards and glow effects
- **Integrations web** — radial orbital diagram with SVG dashed connection lines, animated glowing data-flow dots, and real SVG brand logos (Slack, GitHub, Figma, Notion, Zoom, Jira)
- **Product showcase** — scrolling screenshot gallery with depth
- **Pricing tiers** — Free / Pro / Business with a live team-size slider that dynamically recalculates total cost
- **Testimonials** — social proof cards with user avatars and ratings
- **FAQ** — accordion-style collapsible questions with animated expand/collapse
- **Call to Action** — full-width section with primary and secondary CTAs
- **Footer** with social links and navigation columns

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | `^14.2` | React framework with SSR, App Router, image optimization |
| [React](https://react.dev/) | `^18` | UI library |
| [TypeScript](https://www.typescriptlang.org/) | `^5` | Type safety |
| [Framer Motion](https://www.framer.com/motion/) | `^11.2` | Declarative animations, scroll transforms, spring physics |
| [TailwindCSS](https://tailwindcss.com/) | `^3.4` | Utility-first styling |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | `^2.4` | Safe class merging for conditional Tailwind classes |
| [Lenis](https://lenis.darkroom.engineering/) | `^1.3` | Smooth inertial scroll |
| [@svgr/webpack](https://react-svgr.com/) | `^8.1` | Import SVG files directly as React components |

---

## 📁 Project Structure

```
saas-landing-nextjs-main/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — fonts, global providers, persistent UI
│   │   ├── page.tsx            # Home page — section composition
│   │   ├── globals.css         # Global styles, custom animations, CSS variables
│   │   └── favicon.ico
│   ├── sections/               # Full-width page sections (one per scroll area)
│   │   ├── Header.tsx          # Sticky top nav with mobile drawer
│   │   ├── Hero.tsx            # Hero with parallax 3D images & ScrambleText
│   │   ├── Stats.tsx           # Animated statistics counters
│   │   ├── LogoTicker.tsx      # Infinite logo marquee
│   │   ├── Features.tsx        # Bento grid feature cards
│   │   ├── HorizontalShowcase.tsx  # Scroll-hijacked horizontal card track
│   │   ├── Integrations.tsx    # Orbital integrations diagram
│   │   ├── ProductShowcase.tsx # Product screenshot gallery
│   │   ├── Pricing.tsx         # Pricing tiers with team-size slider
│   │   ├── Testimonials.tsx    # Social proof cards
│   │   ├── FAQ.tsx             # Accordion FAQ
│   │   ├── CallToAction.tsx    # Final CTA section
│   │   └── Footer.tsx          # Site footer
│   ├── components/             # Reusable UI primitives
│   │   ├── MagneticButton.tsx  # Cursor-following magnetic wrapper
│   │   ├── RippleButton.tsx    # Click ripple effect button
│   │   ├── TiltCard.tsx        # 3D perspective tilt container
│   │   ├── ScrambleText.tsx    # Randomized character reveal animation
│   │   ├── CursorGlow.tsx      # Custom trailing cursor glow orb
│   │   ├── LoadingScreen.tsx   # Full-screen progress loader
│   │   ├── SmoothScroll.tsx    # Lenis scroll initializer
│   │   ├── ScrollProgress.tsx  # Top reading-progress bar
│   │   ├── BackToTop.tsx       # Scroll-to-top floating button
│   │   └── WaveDivider.tsx     # SVG wave transitions between sections
│   └── assets/                 # Static images & SVG icons
├── next.config.mjs             # Next.js config (SVGR webpack rule)
├── tailwind.config.ts          # Tailwind theme extensions
├── tsconfig.json
└── package.json
```

---

## 🧩 Sections Overview

### `Header`
Sticky header with an animated announcement bar (bouncing arrow), logo, desktop navigation with animated underline hover effect, and a slide-in mobile drawer using `AnimatePresence`. Navigation links: About, Features, Customers, Updates, Help.

### `Hero`
Full-bleed radial gradient section with:
- Staggered Framer Motion entrance animation (`containerVariants` / `itemVariants`)
- **ScrambleText** on the main `<h1>` heading
- **MagneticButton** + **RippleButton** combo CTA
- Floating product images (`cog`, `cylinder`, `noodle`) with a parallax `translateY` driven by `useScroll`
- A morphing blob background element (`blobMorph` CSS keyframe)

### `Stats`
Dark section with 3–4 large animated number counters that count up from zero when scrolled into view.

### `LogoTicker`
Seamless infinite horizontal marquee of integration/partner logos using CSS `@keyframes` translate animation, duplicated for seamless loop.

### `Features`
Bento grid (3 columns, 2 rows) of 6 feature cards:
1. **Task Management** (large, 2-col span) — gradient glow on hover
2. **Real-time Collaboration**
3. **Advanced Analytics**
4. **AI-Powered Insights** (large, 2-col span, dark card) — animated mock code lines
5. **Smart Integrations**
6. **Enterprise Security**

All cards use the **TiltCard** component for interactive 3D perspective tilt.

### `HorizontalShowcase` *(How it Works)*
Scroll-locked section where vertical scrolling drives horizontal card movement via `useScroll` + `useTransform`. Features:
- 4 step cards: Create workspace → Invite team → Assign & track tasks → Ship & celebrate
- Animated SVG dashed path connecting step dots that draws in as you scroll
- Step indicator dots that expand/contract based on the active card

### `Integrations`
Orbital diagram with the product logo at the center and 6 integration icons placed radially (Slack, GitHub, Figma, Notion, Zoom, Jira). Each node has:
- A dashed SVG connecting line that draws in with `pathLength` animation
- An animated glowing dot that travels from the node to the center repeatedly
- `whileHover` scale & box-shadow effect per node

### `ProductShowcase`
Scrolling product screenshot section demonstrating the UI in action.

### `Pricing`
Three-tier pricing (Free / Pro / Business) with:
- **Team-size slider** (1–50 members) that dynamically multiplies each tier's per-seat price
- `AnimatePresence` number flip animation on price change
- The **Pro (Popular)** card is wrapped in a `HoloCard` with a rainbow shimmer gradient that follows the mouse cursor
- Free and Business cards use **TiltCard**
- Animated rainbow "Popular" badge using a looping gradient background

### `Testimonials`
Grid of social proof cards with user avatar, name, company, star rating, and quote text.

### `FAQ`
Accordion component where each question expands/collapses with a smooth Framer Motion height animation.

### `CallToAction`
High-emphasis section with primary and secondary CTA buttons to drive final conversions.

### `Footer`
Four-column footer with navigation links, social icons, and copyright.

---

## 🔧 Reusable Components

### `MagneticButton`
Wraps any content in a `motion.div` that physically translates in the direction of the cursor using spring physics. The inner text layer moves at half the speed for a parallax effect.

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `strength` | `number` | `20` | Maximum pixel offset the button moves |
| `className` | `string` | — | Additional classes on the outer wrapper |
| `children` | `ReactNode` | — | Content to render inside |

### `RippleButton`
A `motion.button` that spawns a CSS-animated ink ripple element at the exact click coordinates on each click.

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | — | Button classes |
| `onClick` | `() => void` | — | Optional click handler (called after ripple) |
| `whileHover` | `object` | — | Framer Motion hover animation |
| `whileTap` | `object` | — | Framer Motion tap animation |
| `transition` | `object` | — | Framer Motion transition config |

### `TiltCard`
A container div that rotates in 3D using `perspective` transforms based on mouse position within the element.

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `intensity` | `number` | `8` | Max rotation angle in degrees |
| `className` | `string` | `""` | Container classes |

### `ScrambleText`
Renders text that scrambles through random characters before settling on the final string. Triggers once when the element scrolls into view (`useInView`).

**Props:**
| Prop | Type | Default | Description |
|---|---|---|---|
| `text` | `string` | — | Final target text |
| `duration` | `number` | `1000` | Total scramble duration in ms |
| `delay` | `number` | `0` | Delay before scramble starts (ms) |

### `WaveDivider`
Renders an SVG wave path between two sections, morphing cleanly from one background color to another.

**Props:**
| Prop | Type | Description |
|---|---|---|
| `from` | `string` | Starting background hex color (above the wave) |
| `to` | `string` | Ending background hex color (below the wave) |

### `CursorGlow`
A fixed-position `div` that trails the mouse cursor with a large, soft radial-gradient orb, interpolated with lerp for smooth following behaviour (`requestAnimationFrame`).

### `LoadingScreen`
Full-screen overlay shown for ~1.4s on first page load. Displays a logo mark and an animated progress bar that eases out to 100%.

### `ScrollProgress`
A thin `motion.div` bar fixed at the top of the viewport. Its `scaleX` is driven by Framer Motion's `useScroll` so it fills in as the user scrolls down the page.

### `SmoothScroll`
Initializes Lenis smooth scroll on mount and integrates it with Framer Motion's `useAnimationFrame` loop for synchronized, inertial scrolling.

### `BackToTop`
A floating arrow button that fades in once the user scrolls past 300px and scrolls the page back to the top on click using `window.scrollTo`.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** (comes with Node)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/harshxraj/saas-landing-nextjs.git

# 2. Navigate into the project directory
cd saas-landing-nextjs

# 3. Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads automatically on file changes.

### Production Build

```bash
# Type-check and compile
npm run build

# Start the production server
npm start
```

---

## 📜 Scripts

| Script | Command | Description |
|---|---|---|
| Dev Server | `npm run dev` | Start Next.js in development mode with HMR |
| Build | `npm run build` | Create optimised production build |
| Start | `npm start` | Serve the production build |
| Lint | `npm run lint` | Run ESLint via `next lint` |
| Type Check | `npx tsc --noEmit` | Check TypeScript types without emitting files |

---

## 🎨 Customization Guide

### Colors & Brand
The primary brand color palette is defined inline in components. To restyle the brand color:
1. Search for `#183EC2` (primary blue) and `#EAEEFE` (light lavender background) across the `src/` directory and replace with your desired hex values.
2. The body background color is set in `layout.tsx` via the `bg-[#EAEEFE]` Tailwind class.

### Fonts
The project uses **DM Sans** loaded via `next/font/google` in `layout.tsx`. To change the font:
```ts
// src/app/layout.tsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
```

### Adding New Nav Links
Update the `navLinks` array in `src/sections/Header.tsx`:
```ts
const navLinks = ["About", "Features", "Customers", "Updates", "Help", "Blog"];
```

### Updating Pricing Tiers
Edit the `pricingTiers` array in `src/sections/Pricing.tsx` to add/remove tiers or update features.

### Adding New Integrations
Add entries to the `apps` array in `src/sections/Integrations.tsx`:
```ts
{ name: "Linear", color: "#5E6AD2", icon: <svg>...</svg> }
```
The orbital diagram automatically recalculates the angle and position for any number of items.

### Editing the Horizontal Showcase Steps
Update the `steps` array in `src/sections/HorizontalShowcase.tsx` to change the step titles, descriptions, colors, and emoji icons. The number of cards is fully dynamic — the scroll distance adjusts automatically.

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feat/your-feature-name`
5. Open a Pull Request

Please ensure:
- `npx tsc --noEmit` passes with zero errors
- Your code follows the existing component patterns (client components use `"use client"`, Framer Motion for animations)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Built with ❤️ using Next.js, Framer Motion & TailwindCSS
</div>
