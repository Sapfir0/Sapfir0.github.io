# Refactoring Plan — hiking-storage

Status: **IN PROGRESS** — phases P2–P4 + parts of P0/P6 are done. Updated 2026-11-17.

## ✅ Completed

### 2.6 Map behavior bugs — DONE
- Default center is no longer London (`[45, 60]`, a rough center of the covered areas; overridden by `fitBounds`).
- `GpxTracks` fits the map to the **combined bounds of all tracks** once (main page + trekking details); `GpxTrack` has an opt-in `fitToTrack` for single-track day maps.
- Polyline color is a **stable hash of the track url** (no more random colors).
- The map is hidden with CSS (`Map hidden` + `invalidateSize`) instead of unmounting — Leaflet state survives show/hide.
- GPX results are **cached per url** (`loadGpx` in `src/lib/gpx.ts`); the main-page map only starts loading when shown (`active` prop).

### 2.7 leaflet-gpx removal — DONE
- `leaflet-gpx` and `@types/leaflet-gpx` removed from `package.json`; no more UMD script injection, `window.L`, or `@ts-expect-error`.
- GPX is fetched and parsed with `@we-gold/gpxjs` (`src/lib/gpx.ts`, now the only consumer), drawn with declarative `Polyline` + `CircleMarker` (start/end).
- `computeTrackStats` computes distance/ascent/descent/elevation min-max from the GeoJSON; stats feed the day cards.
- `@types/leaflet` added as an explicit devDependency (it was only a transitive dep of the removed `@types/leaflet-gpx`).
- Note: `fitBounds` is called with **raw lat/lng points**, never with an `L.LatLngBounds` object — cross-Leaflet-instance `instanceof` failures (seen with a stale Vite deps cache) are impossible.

### 3.1 Strict TypeScript — DONE
- `strict: true` + `noUncheckedIndexedAccess: true` in `tsconfig.app.json`; all resulting errors fixed (type guards in `ActivityCard`/`getTrackLink`, guarded tag-filter values, `toLines`/`toCoordinates` normalization).

### 3.3 Analyzer plugin — DONE (removed outright)
- `vite-bundle-analyzer` removed from `vite.config.ts` (previously it held the dev/build process open on port 1234).

### 3.5 Tests — DONE
- Vitest added; `yarn test` script; CI runs it. 13 tests:
  - `src/lib/filters.test.ts` — region/tag filters, default selection;
  - `src/lib/gpx.test.ts` — `computeTrackStats` (distance, chained segments, ascent/descent split, elevation, empty track), `loadGpx` parse + per-url caching + 404 rejection (jsdom environment for `DOMParser`);
  - `src/utils/formatter.test.ts` — `formatMonthYear`.

### 3.7 Prettier in CI — DONE
- `format` / `format:check` scripts; CI runs `yarn lint`, `yarn format:check`, `yarn test`, `yarn build` before deploy.

### 4. Data model — DONE (all items)
- `accent` → `ascent` everywhere; `wikiLoc` → `externalLink`; `link` → `slug` (also the React key and the route path).
- Enums replaced with `const … as const` objects + union types (`Country`, `TagFilter`, `InternetAvailability`, `WildCamp`, `EasyPublicTransportation`) — the three-enum `Country` spread is gone.
- `region: 'Europe' | 'Asia' | 'Russia'` added to every activity; `REGIONS` filters use it directly (no country-list casts).
- `HighMountains` tag uses a `highMountains` flag (set on Arhyz + West Caucasus — the old `mountainSystem === 'Caucasus'` check silently excluded Arhyz).
- `TDay.image` (always `''`) removed; `TDay.trackLink` is required and the optional guards were dropped; empty `description: ''` fields removed from days.
- Dead-field resolution: **date, temperature and rating are now rendered on the card** (`formatMonthYear`, `°C` / range `°C`, `x/10`); `TYPE_OF_ACTIVITY_DESCRIPTION` deleted.
- Dates stored as ISO strings (`YYYY-MM-DD`).
- `trekkingData` → `activities` (`src/data/index.ts`); `run: true` moved into the trails data (no more merge hack); `as const` noise removed.
- **Extra fix found during verification:** the region filter pre-selected only Europe, so the trekking tab (all Russia) was empty by default — all regions are now selected by default (covered by a test).

### 5. Structure & components — DONE (all items)
- New layout: `src/pages/{HomePage,TrekkingDetails,NotFound}.tsx`, `src/router.tsx`, `src/lib/{constants,types,filters,gpx}.ts`, `src/hooks/use-activity-filters.ts`, `src/pages/HomePage.css` (was `App.css`). Old files removed (`App.tsx`, `const.ts`, `types.ts`, `main-router.tsx`, `trekking-details.tsx`, `services/`, `chips.tsx`).
- `TagChip` replaces the duplicated `TentChip`/`RunChip`; `activity-paramater.tsx` → `activity-parameter.tsx`; `activity-icons.tsx` cleaned (empty `sx`, helper names); dead `useRef` removed from the card.
- `Map` accepts `zoom`/`height`/`hidden`; commented-out `TYPE_OF_ACTIVITY_DESCRIPTION` block deleted; tab labels via `ACTIVITY_TAB_LABELS` (no more raw keys); **empty state** added; filter state extracted to `useActivityFilters`.
- Routing: slugs normalized (relative, single source in data), `path="*"` → `NotFound` page (previously a blank page).

---

## ⏳ Remaining

### 2.1 GitHub Pages base path — OPEN (top priority)
- `vite.config.ts` still has `base: '/'`, `package.json` still has `homepage: "https://Sapfir0.github.io"`, but the site deploys to the `/hiking-storage/…` project path (see the `postbuild.mjs` 404 fallback). Trekking detail pages 404 on refresh in prod.
- Fix: set `base` to `/hiking-storage/` (via env), update `homepage`. `main.tsx` already uses `basename={import.meta.env.BASE_URL}`, and slugs are now clean relative values, so this should be a one-line config change.

### 2.2 Internal navigation via MUI `<Link>` — OPEN
- `ActivityCard` still uses an anchor `href={activity.slug || activity.externalLink}` for internal routes → full page reload.
- Fix: an `ActivityLink` that renders a react-router `Link` for known internal slugs and MUI `Link target="_blank"` for external ones.

### 2.3 CI deploys on push to any branch — OPEN
- `.github/workflows/gh-pages.yaml` still has `on: [push]` (lint/format/test/build steps were added, but any feature branch can overwrite gh-pages). Restrict to `push: branches: [main]`.

### 2.4 `yarn.lock` is git-ignored — OPEN
- `.gitignore` still lists `yarn.lock` → CI builds are non-reproducible. Un-ignore, commit it, add a `packageManager` field (corepack).

### 2.5 Data bugs — OPEN
- `khibiny.ts`: day-3 Garmin link `20232327324` is a copy-paste of day-2's.
- `khibiny.ts`: name "Russian **arctic** adventure" for Khibiny — content check.
- `arhyz.ts` description is Russian while the UI is English (product decision).

### 3.2 `erasableSyntaxOnly` — OPEN (cheap now)
- Still `false` in `tsconfig.app.json`. With all enums gone, try enabling it; fix anything that resists.

### 3.4 Duplicate deploy mechanisms — OPEN
- `predeploy`/`deploy` npm scripts + `gh-pages` devDependency duplicate the CI `JamesIves` action. Keep the CI action; drop the scripts and dependency.

### 6. Assets & performance — OPEN
- `public/` is ~36 MB (39 GPX + images) in git history: optimize JPEGs (some 700 KB+ for 250 px cards), consider Git LFS or a CDN for GPX.
- `React.lazy` for the map subtree (Leaflet is heavy); `<link rel="preconnect">` to `tile.openstreetmap.org` in `index.html`.
- (GPX caching and lazy "load only when visible" are already done in P2.)

### 7. Phases — updated status

| Phase | Status |
|-------|--------|
| P0 hygiene & safety | partial — 3.1 ✅, 3.3 ✅; 2.3, 2.4 open |
| P1 production correctness | **open** — 2.1, 2.2 (+ 2.5 data bugs) |
| P2 GPX/Map rework | ✅ done |
| P3 data model | ✅ done |
| P4 components & structure | ✅ done |
| P5 assets & perf | open |
| P6 tests | ✅ core done (filters, gpx, formatter, CI integration); can grow (slug routing, HomePage render) |

### 8. Out of scope — decisions
- Language of descriptions (Russian vs English) — still open.
- Dedicated `water` activity type instead of `THiking` — still open.
- ~~Rating/temperature display~~ — resolved: both are shown on the card.
