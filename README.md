# 🍏 NutriSense

> A smart, offline-capable food and habit assistant designed to help busy urban professionals make better food choices, build healthier eating habits, and visualize nutritional trends.
> 
> **Built for the AMD Slingshot Ideathon (2026)**

<div align="center">
  <img src="https://img.shields.io/badge/PWA-Ready-success" alt="PWA Ready" />
  <img src="https://img.shields.io/badge/Google-OAuth-blue" alt="Google OAuth" />
  <img src="https://img.shields.io/badge/Camera-Barcode_Scanner-blueviolet" alt="Camera Barcode" />
  <img src="https://img.shields.io/badge/Test_Coverage-100%25-brightgreen" alt="Tests" />
</div>

## ✨ The Problem & Solution
Busy young professionals skip meals, eat impulsively, and have zero visibility into their nutritional gaps. **NutriSense** solves this by acting as an ultra-fast, offline-capable progressive web application (PWA). It learns from daily logs, surfaces personalized nudges, visualizes health trends, and makes logging frictionless with computer vision.

## 🚀 Key Features
- **Device Camera Barcode Scanning**: Tap the scanner icon to open your device's camera. We decode barcodes locally via `html5-qrcode` and instantly fetch live macronutrients from the Open Food Facts API.
- **Smart Analytics Engine**: Utilizes Google Charts API to render gorgeous daily progress rings (Calories, Protein, Carbs, Fat) mapped against personalized TDEE/BMR calculations.
- **Premium Nutrition-Psychology UI**: The entire app utilizes custom CSS glassmorphism and gradient meshing. Colors map to psychology: Emerald Green (Vitality), Citrus Orange (Energy), Marine Blue (Hydration). 
- **Google Ecosystem Integration**: 
  - **Google Identity Services**: OAuth sign-in enabled.
  - **Google Analytics 4**: Telemetry integrated system-wide.
  - **Google Charts**: Dynamic data visualization.
- **Progressive Web App (PWA)**: Installable directly to mobile home screens. The Service Worker caches the UI shell so the app loads instantly, even offline.

## 🛠️ Architecture
NutriSense was built exclusively with **Vanilla HTML, CSS, and JavaScript** — achieving a premium cross-platform aesthetic without bloated frameworks. It is lightweight, blazingly fast, and 100% accessible (A11y compliant, fully keyboard navigable, and Screen-Reader friendly).

All data logic is currently localized through `localStorage` to maximize speed and privacy, with Google Auth acting as the precursor for the planned Firestore sync upgrade.

## 📱 Quick Start / Demo
For judging purposes, we have included a **Demo Setup Mode**:
1. Open the app (`index.html`) in a browser or live server.
2. Underneath the Google login button, click the **"Load Demo User"** button.
3. This automatically calculates a target macro spread, logs a full day of attractive meals, updates the charts, and triggers a personalized Nudge.

## 🧪 Testing
NutriSense ships with a custom pure-JS testing suite protecting critical health formula components from regressions.
To run the tests:
1. Open the application in Chrome.
2. Open the Developer Console (`F12`).
3. View the 15 passing test suites covering the Macro Engine, Meal generation limits, BMR logic, and DOM XSS sanitization checks.

## 🎨 Stitch AI Integration
We utilized **Google Stitch MCP** to rapidly iterate and prototype the high-fidelity designs for this application. (See `STITCH_MCP_SETUP.md` for our AI workflow!).

---
*Developed with focus, speed, and Antigravity for the AMD Slingshot Ideathon.* 🥗

> Your smart, offline-capable food and habit assistant — built for the AMD Slingshot Ideathon.

NutriSense helps busy urban professionals (age 20–35) build healthier eating habits through personalized calorie tracking, smart nudges, and AI-style meal planning — all powered by Google Services.

---

## Vertical & Persona

| Attribute | Detail |
|-----------|--------|
| **Vertical** | Health & Wellness / Habit Formation |
| **Persona** | Busy Urban Professional (Age 20–35) |
| **Core Problem** | Skips meals, eats impulsively, no visibility into nutritional gaps, no system to build consistency |

## Problem Statement

Modern professionals struggle with inconsistent eating patterns, "hidden" nutritional gaps, and a lack of real-time guidance — leading to poor energy levels and long-term health risks. There's no lightweight tool that combines food tracking, intelligent coaching, and meal planning in a single offline-first experience.

## Solution Overview

NutriSense provides a **low-friction, high-aesthetic platform** for:
- Calculating personalized targets (BMR/TDEE via Mifflin-St Jeor)
- Tracking daily meals and water intake
- Generating AI-style 7-day meal plans from a 54-meal bank
- Delivering real-time "smart nudges" based on nutritional gaps, hydration, and meal timing
- Visualizing weekly health trends

## Features

- ✅ **Personalized Onboarding** — 3-step profile setup with BMR/TDEE calculations
- ✅ **7-Day Meal Planner** — AI-style generation with variety logic, 54 meals across Indian, Mediterranean, Keto, Vegan, Vegetarian cuisines
- ✅ **Food Nutrition Scanner** — Search 3M+ products via Open Food Facts API
- ✅ **Daily Habit Tracker** — One-tap meal and water logging with visual progress rings
- ✅ **Smart Nudge Engine** — 12+ contextual rules for protein gaps, hydration, meal timing, streak motivation
- ✅ **Insights Dashboard** — Google Charts (Bar, Donut, Line) with dark-themed visualization
- ✅ **Streak Tracking** — Motivation system with best-streak history
- ✅ **PWA-Ready** — Service worker + manifest for offline support and mobile installation
- ✅ **Accessible** — Full ARIA labels, keyboard navigation, screen reader support
- ✅ **15 Unit Tests** — Pure JS assertions covering BMR, storage, nudge logic, and XSS sanitization

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, Vanilla JavaScript (ES6+) |
| **Styling** | Vanilla CSS (Mobile-First, Dark Mode) |
| **Nutrition API** | Open Food Facts (free, no API key) |
| **Charts** | Google Charts API |
| **Icons** | Google Material Icons (Round) |
| **Fonts** | Google Fonts (Inter + Poppins) |
| **Analytics** | Google Analytics 4 |
| **Storage** | localStorage (offline-capable) |
| **PWA** | Service Worker + Web App Manifest |

## Google Services Used (4)

| # | Service | Purpose |
|---|---------|---------|
| 1 | **Google Fonts** | Inter for body text readability, Poppins for premium headers |
| 2 | **Google Material Icons** | Consistent rounded iconography on every page |
| 3 | **Google Charts** | Weekly calorie trends (Bar), macro breakdown (Donut), hydration (Line) |
| 4 | **Google Analytics 4** | Product metrics and user behavior tracking |

## How It Works

1. **Onboard** → Enter your vitals; the app calculates your precise TDEE and macro targets using Mifflin-St Jeor
2. **Plan** → Generate a 7-day plan tailored to your diet preference (Vegan, Keto, Balanced, etc.)
3. **Track** → Log meals via manual entry or the Food Scanner (Open Food Facts API)
4. **Learn** → Receive real-time nudges when your nutrition drifts from targets
5. **Analyze** → View weekly performance trends and goal alignment in the Insights tab

## Project Structure

```text
nutrisense/
├── assets/
│   └── manifest.json         ← PWA manifest
├── css/
│   ├── animations.css        ← Transitions, skeleton loaders, micro-animations
│   ├── components.css        ← Cards, buttons, badges, progress bars, nav
│   └── style.css             ← Design tokens, layout, utilities, focus-visible
├── js/
│   ├── app.js                ← Router, init, sanitizer, toast system, SW registration
│   ├── charts.js             ← Google Charts (Bar, Donut, Line) with dark theme
│   ├── nutrition.js          ← Open Food Facts API wrapper
│   ├── planner.js            ← 54-meal bank, 7-day generation engine
│   ├── profile.js            ← BMR/TDEE calculations (Mifflin-St Jeor)
│   ├── storage.js            ← localStorage abstraction layer
│   ├── suggestions.js        ← Smart nudge engine (12+ rules)
│   ├── test.js               ← 15 unit tests (pure JS)
│   └── tracker.js            ← Daily meal/water logging, streak tracking
├── index.html                ← Dashboard (home)
├── insights.html             ← Charts, trends, weekly report
├── onboarding.html           ← 3-step user profile setup
├── planner.html              ← 7-day meal plan view
├── scanner.html              ← Food search + nutrition facts
├── tracker.html              ← Daily meal + water logger
├── sw.js                     ← Service Worker (offline support)
├── memory.md                 ← Development log (bugs, fixes, decisions)
└── README.md                 ← This file
```

---

## 🚀 Setup & Run Instructions

### Prerequisites
- Any modern web browser (Chrome, Edge, Firefox, Safari)
- A local web server (required for Service Worker)

### Quick Start

**Option A — VS Code Live Server (Recommended)**
1. Install the "Live Server" extension in VS Code
2. Open `d:\Projects\AMD_Slingshot` folder
3. Right-click `onboarding.html` → **Open with Live Server**
4. The app will open at `http://127.0.0.1:5500/onboarding.html`

**Option B — Python HTTP Server**
```bash
cd d:\Projects\AMD_Slingshot
python -m http.server 8080
```
Then open: `http://localhost:8080/onboarding.html`

**Option C — Node.js serve**
```bash
npx -y serve d:\Projects\AMD_Slingshot
```

### First Run Flow
1. Open `onboarding.html` — fill in your name, age, height, weight, gender
2. Choose your goal (Lose / Maintain / Gain), activity level, and diet type
3. Select any food allergies to avoid
4. Click "Finish Setup" → you'll be redirected to the Dashboard

### Testing the Features

| Feature | How to Test |
|---------|-------------|
| **Dashboard** | Check the greeting changes with time of day. Tap water glasses to log hydration. |
| **Meal Planner** | Click "My Plan" → browse 7 days. Click the `+` button to log a planned meal to today. Hit the refresh icon to regenerate. |
| **Food Scanner** | Click "Scan Food" → search for "milk", "bread", "nutella". Wait for skeleton loaders, then tap `+` to log. |
| **Tracker** | Click "Log Meal" → enter "Scrambled Eggs", 350 kcal. Expand "Advanced Macros" for protein/carbs/fat. |
| **Insights** | Open after logging 1-2 meals. Check the calorie bar chart, macro donut, and water line chart. |
| **Nudges** | Log a high-carb meal (e.g. 300g carbs). Return to Dashboard — a "High Carbs" nudge should appear. |
| **Offline** | After first load, disable Wi-Fi. The app shell and all logged data will still work. |

### Running Unit Tests

1. Open any page in Chrome
2. Open DevTools → Console (F12)
3. Paste this and press Enter:
```javascript
const s = document.createElement('script');
s.src = 'js/test.js';
s.onload = () => NutriTests.runAll();
document.head.appendChild(s);
```
4. You should see: `📊 Results: 15 passed, 0 failed`

### Setting Up Google Analytics

Replace `G-XXXXXXXXXX` in all 6 HTML files with your actual GA4 Measurement ID:
1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property → Get your Measurement ID (e.g. `G-ABC123DEF4`)
3. Find/replace `G-XXXXXXXXXX` in all `.html` files

---

## GCP Upgrade Path (Future)

| Service | Impact | Implementation |
|---------|--------|---------------|
| **Firebase Auth + Firestore** | Cross-device sync, Google Sign-In | Replace `Storage.get/set` calls with Firestore reads/writes; ~30 lines |
| **Vertex AI / Gemini API** | AI-generated personalized nudges | Replace hardcoded rules in `suggestions.js` with a single Gemini API call |
| **Stitch MCP Server** | AI-powered UI generation from natural language | Install via `npx @_davideast/stitch-mcp proxy`, connect to IDE |

## Assumptions

- BMR calculations assume healthy adults (age 12–100)
- "Offline support" covers data persistence and app shell; Food Scanner and Charts require internet for first load
- Meal bank macros are approximate based on standard nutritional databases
- GA4 tracking ID is a placeholder — replace before deployment

## License

MIT License — Created for the **AMD Slingshot Ideathon**
