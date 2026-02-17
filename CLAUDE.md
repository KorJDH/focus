# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start local dev server (localhost:3000)
npm run build    # Static export to out/ (used for GitHub Pages deployment)
npm run lint     # ESLint via Next.js
```

No test framework is configured.

## Architecture

This is a **static promotional site** for the FOCUS bowling club. It uses Next.js App Router with `output: "export"` — meaning all pages are pre-rendered to `out/` at build time. There is no server-side runtime; everything must be statically generatable.

### Key architectural constraint

Because this is a static export, `dynamicParams = false` is required on any dynamic route, and all dynamic segments must have `generateStaticParams()`. Data fetched at build time (Notion API) becomes baked-in HTML — there are no API routes or server actions.

### Data flow

**Static content** → `lib/content.ts` exports all hardcoded site copy (club info, nav items, schedule, feature cards, image URLs). This is the single source of truth for most page content.

**Gallery images** → `lib/gallery.ts` reads `public/images/gallery/` at build time and merges filenames with metadata from `content/gallery.json` (alt text, captions). Add a file to that directory and a matching entry in the JSON to add a gallery image.

**Notices (Notion CMS)** → `lib/notion.ts` calls the Notion API at build time when `NOTION_TOKEN` + `NOTION_DATABASE_ID` env vars are present. Without them, it falls back to hardcoded mock notices in the same file. The `/notices/[slug]` route uses `generateStaticParams()` to pre-render all notice detail pages.

### Component organization

- `components/sections/` — full-page section components used in route `page.tsx` files
- `components/layout/` — `SiteHeader` and `SiteFooter`, rendered in the root layout
- `components/gallery/` — `GalleryLightbox`, a client component using Radix Dialog
- `components/ui/` — shadcn/ui primitives (Button, Badge, Card, Dialog)

### Styling

Dark-only theme defined entirely via CSS custom properties in `app/globals.css`. Tailwind is configured with CSS variable-based semantic color tokens (e.g. `bg-background`, `text-primary`). The `cn()` utility from `lib/utils.ts` (clsx + tailwind-merge) is used throughout for conditional class merging.

Two Google Fonts: `Exo_2` for headings (`--font-display`), `Noto_Sans_KR` for body text (`--font-body`).

Global utility classes defined in `globals.css`: `.section-shell` (max-width container), `.focus-ring` (focus style).

### Environment variables

Set in `.env.local` for local dev; set as GitHub Actions secrets/vars for CI deployment.

| Variable | Required | Purpose |
|---|---|---|
| `NOTION_TOKEN` | For live notices | Notion integration secret |
| `NOTION_DATABASE_ID` | For live notices | Notion DB to pull notices from |
| `NEXT_PUBLIC_APP_LINK` | Optional | Link to club app |
| `NEXT_PUBLIC_OPENCHAT_LINK` | Optional | KakaoTalk open chat URL |
| `NEXT_PUBLIC_INSTAGRAM_LINK` | Optional | Instagram profile URL |
| `NEXT_PUBLIC_INQUIRY_FORM_LINK` | Optional | Inquiry form URL |

Fallback placeholder URLs are defined in `lib/content.ts` for all `NEXT_PUBLIC_*` vars.

### Deployment

GitHub Actions workflow at `.github/workflows/deploy-pages.yml` builds and deploys to GitHub Pages on push to `main`. Secrets go in GitHub repo Settings → Secrets; `NEXT_PUBLIC_*` vars go in Settings → Variables.
