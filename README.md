# Jass ATM

Marketing site for Jass ATM Sales & Service (Jacksonville, FL).

## Stack

- **Vite** + **React 18** SPA (React Router)
- **TypeScript** `^7.0.2`
- **Chakra UI** v2
- Hosted on **Netlify** (static `dist/` + Netlify Forms for contact)

## Scripts

```bash
npm install
npm run dev        # local Vite server
npm run typecheck  # tsc --noEmit
npm run build      # typecheck + production build → dist/
npm run preview    # preview production build
```

## Environment

Copy `.env.example` to `.env` (or set in Netlify):

| Variable | Where | Purpose |
|---|---|---|
| `VITE_GA_MEASUREMENT_ID` | Client | GA4 measurement ID |

Contact submissions use **Netlify Forms** (`name="contact"`). No SMTP / Gmail secrets are stored in the app. Configure form email notifications in the Netlify UI (e.g. to `sales@jassatm.com`).

## Netlify

`netlify.toml` sets:

- Build: `npm run build` → publish `dist`
- SPA fallback: `/* → /index.html` (200) so `/atms` deep links work
- Cache headers for hashed assets and static images

A hidden `<form name="contact">` in `index.html` lets Netlify’s build bot detect the form for SPA AJAX posts.
