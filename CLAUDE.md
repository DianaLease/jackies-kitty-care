# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build static export
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 14 static site** (App Router, `output: 'export'`) for Jackie's Kitty Care — a local in-home cat sitting business. It has no backend, API routes, database, or state management.

**Routing** lives in `src/app/` using directory-based App Router conventions. Current routes: `/`, `/services`, `/testimonials`, `/faq`. Several pages are stubs marked "Coming soon."

**Styling** uses CSS Modules (`.module.css` per component) alongside `src/styles/globals.css` for app-wide styles. Color palette is purple/blue (`#c7d2fb`, `#424F71`) with an orange accent (`#FF7900`).

**Path alias**: `@/*` resolves to `./src/*`.

**Components** live in `src/app/components/` — currently `NavBar` and `Footer`, both shared via `src/app/layout.tsx`.

**Static assets** (PNG illustrations) live in `public/`.
