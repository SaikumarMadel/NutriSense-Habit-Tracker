# NutriSense — Development Memory Log

> This file tracks every bug found, fix applied, and key decision made during development.
> **Last Updated**: 2026-04-07 v1.5

---

## Bug Tracker

| # | File | Issue | Status |
|---|------|-------|--------|
| 1 | `animations.css:24` | `slideUp` keyframe had duplicate `transform` on `to {}` — second overwrites first | ✅ Fixed v1.1 |
| 2 | `tracker.js:29,42` | Called `Suggestions.checkNudges()` which doesn't exist — changed to `getNudges()` | ✅ Fixed v1.1 |
| 3 | `style.css` | Missing utility classes `mb-1`, `mb-2`, `py-2`, `.logo`, `.sr-only`; no `focus-visible` styles | ✅ Fixed v1.1 |
| 4 | `charts.js:109-110` | `Charts.init()` auto-fires on every page but `google` object only exists on `insights.html` — crashes silently | ✅ Fixed v1.2 |
| 5 | `index.html:228` | Function named `constMacros()` — misleading name, renamed to `updateMacros()` | ✅ Fixed v1.3 |
| 6 | `index.html:278` | `location.reload()` on water tap — heavy, replaced with in-place DOM update via `renderWater()` | ✅ Fixed v1.3 |
| 7 | `planner.html:192-194` | `logPlannedMeal()` was a stub calling `alert()` — now calls `Tracker.logMeal()` via `Planner.getMealById()` | ✅ Fixed v1.3 |
| 8 | All HTML | Missing `<meta name="description">` tags on every page | ✅ Fixed v1.3–v1.5 |
| 9 | All HTML | Missing `aria-label` on icon-only buttons (back, refresh, water glasses, delete) | ✅ Fixed v1.3–v1.5 |
| 10 | All HTML | Missing `role="alert"` on nudge cards, `aria-live="polite"` on dynamic regions | ✅ Fixed v1.3 |
| 11 | All HTML | No `<link rel="manifest">` in `<head>` | ✅ Fixed v1.3–v1.5 |
| 12 | `tracker.html` | Macro inputs (`protein`, `carbs`, `fat`) missing `id` and `<label for>` associations | ✅ Fixed v1.4 |
| 13 | `planner.js` | Only 40 meals — expanded to 54 with Indian, Mediterranean, and more Keto options | ✅ Fixed v1.2 |
| 14 | Project | No Service Worker (`sw.js`) for offline PWA — created with cache-first + network-first strategies | ✅ Fixed v1.2 |
| 15 | Project | No unit test file (`test.js`) — created 15 pure-JS tests | ✅ Fixed v1.5 |
| 16 | `app.js` | `alert()` calls used everywhere — replaced with `App.toast()` notification system | ✅ Fixed v1.2 |
| 17 | `tracker.html:156` | `logs.reverse()` mutates original array in storage — fixed with `[...logs].reverse()` | ✅ Fixed v1.4 |
| 18 | `onboarding.html` | Gender radio group not wrapped in `<fieldset>/<legend>` — added for screen readers | ✅ Fixed v1.3 |
| 19 | `scanner.html` | Product logging used unsafe inline `onclick` with JSON in `data-*` attribute — refactored to JS event listeners | ✅ Fixed v1.4 |
| 20 | All HTML | No Google Analytics 4 snippet — added `G-XXXXXXXXXX` placeholder to all 6 pages | ✅ Fixed v1.5 |
| 21 | `insights.html` | Resize handler fires too often — added debounce with `clearTimeout` | ✅ Fixed v1.5 |
| 22 | `charts.js` | Macro donut chart showed nothing when no meals logged — added empty-state placeholder | ✅ Fixed v1.2 |
| 23 | `charts.js` | Water chart had no goal reference line — added dashed 8-glass goal line | ✅ Fixed v1.2 |

---

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| localStorage only (no backend) | Keeps project under 1MB, zero-dependency, instant offline |
| Mifflin-St Jeor Equation | Industry standard for BMR; more accurate than Harris-Benedict |
| 54 hardcoded meals | Covers Balanced, Vegan, Vegetarian, Keto + Indian, Mediterranean cuisines |
| Google Services (4 total) | Fonts + Material Icons + Charts + Analytics = 4 distinct Google services |
| GA4 placeholder `G-XXXXXXXXXX` | User replaces with real Measurement ID before deployment |
| `App.toast()` over `alert()` | Non-blocking, styled, accessible notification system |
| Service Worker (sw.js) | Cache-first for shell, network-first for API, stale-while-revalidate for fonts |
| Stitch MCP Server | Documented for future AI-powered UI generation (requires API key setup) |

---

## GCP Strategy (Future Upgrades)

| Service | Impact | Effort | Status |
|---------|--------|--------|--------|
| Google Analytics 4 | Counts as Google Service; tracks real usage | ✅ Zero | ✅ Added |
| Firebase Auth + Firestore | Cross-device sync, Google Sign-In | Medium (~30 lines) | 📋 Documented |
| Vertex AI / Gemini API | Replace hardcoded nudges with AI-generated coaching | Medium (API call) | 📋 Documented |
| Stitch MCP Server | AI-powered UI design generation | Setup required | 📋 Documented |

---

## Change Log

### v1.0 — Initial Build
- 18 files created following the exact build order
- All CSS tokens, components, animations
- All JS modules: storage, profile, planner, tracker, nutrition, suggestions, charts, app
- All HTML pages: onboarding, dashboard, planner, scanner, tracker, insights
- manifest.json and README.md

### v1.1 — First Bug Fixes
- Fixed `animations.css` slideUp keyframe duplicate transform
- Fixed `tracker.js` dead reference to `Suggestions.checkNudges()`
- Added missing CSS utilities: `mb-1`, `mb-2`, `py-2`, `.logo`, `.sr-only`, `focus-visible`
- Added `--accent-red` CSS variable

### v1.2 — Core Upgrades
- **charts.js**: Complete rewrite — removed unsafe auto-init, added `isReady()` guard, color-coded calorie bars, goal reference line on water chart, empty-state donut
- **planner.js**: Expanded meal bank from 40 → 54 meals (Indian, Mediterranean, Keto), added `getMealById()` helper, fixed calorie sort mutation
- **sw.js**: Created service worker — cache-first for shell, network-first for Open Food Facts API, stale-while-revalidate for Google Fonts
- **app.js**: Added `registerSW()`, `App.toast()` notification system

### v1.3 — Dashboard & Onboarding ARIA Overhaul
- **index.html**: Renamed `constMacros` → `updateMacros`, replaced `location.reload()` with `renderWater()` DOM update, added `role="progressbar"` on calorie ring, `role="alert"` on nudges, `aria-live="polite"` on greeting/nudge/water, keyboard-accessible water glasses, `<button>` for settings icon
- **onboarding.html**: Added `<fieldset>/<legend>` for radio groups, `aria-label` on step sections, step-indicator progressbar ARIA, emoji icons on allergy cards, input range validation, toast instead of alert
- **planner.html**: Fixed `logPlannedMeal()` stub → calls `Tracker.logMeal()`, added `role="tablist/tab/tabpanel"`, keyboard navigation on day buttons, `aria-label` on back/refresh buttons

### v1.4 — Scanner & Tracker ARIA Overhaul
- **scanner.html**: Added `sr-only` label for search input, refactored product logging from unsafe inline onclick to JS event listeners, lazy-loading images, better offline error UI
- **tracker.html**: Fixed missing `id` and `<label for>` on protein/carbs/fat inputs, fixed `logs.reverse()` mutation with spread copy, added `aria-label` on delete buttons, `aria-live` on logs list

### v1.5 — Insights, GA4, Tests (Current)
- **insights.html**: Added 2 more stat cards (Best Streak, Meals Logged), debounced resize handler, `role="img"` on chart containers, proper `Charts.init()` call
- **GA4**: Added Google Analytics 4 snippet (`G-XXXXXXXXXX` placeholder) to all 6 HTML pages
- **manifest link**: Added `<link rel="manifest">` + `<meta name="theme-color">` to all pages
- **test.js**: 15 unit tests covering BMR, TDEE, macros, storage, meal bank, nudge engine, XSS sanitization
- **README.md**: Full rewrite with setup instructions, test guide, GCP upgrade path, project structure

### v1.6 — Stitch MCP Server Integration
- **`.gemini/settings.json`**: Created MCP config for Stitch proxy (API key placeholder)
- **`STITCH_MCP_SETUP.md`**: Full setup guide — API key generation, init wizard, CLI commands, MCP tools reference, troubleshooting
- **`memory.md`**: Updated all 23 bugs to ✅, complete changelog through v1.6
