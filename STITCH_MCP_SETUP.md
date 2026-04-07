# Stitch MCP Server — Setup Guide for NutriSense

> Use Google's Stitch AI to generate and iterate on NutriSense UI screens,
> then pull the HTML/CSS directly into your codebase via the MCP proxy.

---

## Prerequisites
- Node.js 18+
- A Google account
- A Stitch API key (from [stitch.withgoogle.com](https://stitch.withgoogle.com))

## Quick Setup

### 1. Get Your API Key
1. Go to **[stitch.withgoogle.com](https://stitch.withgoogle.com)**
2. Click **profile icon** (top-right) → **Settings**
3. Scroll to **API Keys** section
4. Click **Create Key** → Copy the key immediately

### 2. Option A — Automatic Init (Recommended)
```bash
npx @_davideast/stitch-mcp init
```
Follow the interactive wizard. It handles:
- gcloud SDK setup
- OAuth authentication
- MCP client configuration for Antigravity

### 2. Option B — Manual (API Key Only)
Set the environment variable:
```powershell
# PowerShell
$env:STITCH_API_KEY = "your-api-key-here"
```

Then the MCP config (`.gemini/settings.json`) is already created:
```json
{
  "mcpServers": {
    "stitch": {
      "command": "npx",
      "args": ["@_davideast/stitch-mcp", "proxy"],
      "env": {
        "STITCH_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

### 3. Verify Setup
```bash
npx @_davideast/stitch-mcp doctor --verbose
```

---

## How to Use with NutriSense

### Generate a Design
1. Go to [stitch.withgoogle.com](https://stitch.withgoogle.com)
2. Type a prompt like:
   - *"A dark-themed health dashboard with calorie progress ring, hydration tracker, and meal cards"*
   - *"A mobile food scanner page with search bar, skeleton loaders, and nutrition fact cards"*
3. Stitch generates high-fidelity HTML/CSS screens
4. Note the **Project ID** and **Screen IDs**

### Pull Design into Code (via Antigravity)
Once the MCP proxy is running, you can ask Antigravity:
- *"Use Stitch to get the HTML for screen ABC in project 123"*
- *"Build a site from my Stitch project 123, mapping screen ABC to / and DEF to /planner"*

### Available MCP Tools
| Tool | Purpose |
|------|---------|
| `get_screen_code` | Pull raw HTML/CSS for a specific screen |
| `get_screen_image` | Get a base64 screenshot of a screen |
| `build_site` | Map multiple screens to routes and generate a site |
| `list_projects` | List all your Stitch projects |
| `list_screens` | List screens in a project |

### CLI Commands (Direct)
```bash
# Browse all your projects
npx @_davideast/stitch-mcp view --projects

# Preview all screens locally
npx @_davideast/stitch-mcp serve -p <project-id>

# Build an Astro site from your designs
npx @_davideast/stitch-mcp site -p <project-id>

# List available MCP tools
npx @_davideast/stitch-mcp tool
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "Permission Denied" | Ensure billing is enabled on your GCP project |
| Auth URL not appearing | Look for URL starting with `https://accounts.google.com` in terminal |
| API connection fails | Run `npx @_davideast/stitch-mcp doctor --verbose` |
| Need to re-auth | `npx @_davideast/stitch-mcp logout --force` then `init` again |
