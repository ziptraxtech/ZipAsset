# ZipAsset

ZipAsset is a responsive web experience for Zipbolt Innovations' clean-energy and electric-mobility investment platform. It presents asset-backed EV infrastructure opportunities, lets visitors explore modeled return scenarios, and provides a contact form for investment and partnership enquiries.

> **Important:** Return, APY, risk, TVL, and investment figures shown in the UI are illustrative content currently stored in the frontend. They are not connected to a live investment, KYC, payment, asset-management, or portfolio system.

## What is included

- EV charging marketplace with individual charger opportunity pages
- Investment calculator with amount, APY, lock-period, and projected-return previews
- Dedicated investment-segment views for battery storage, EV fast charging, and EV passenger fleets
- Investor deck, About, FAQ, and contact pages
- Optional Clerk-powered sign-in/sign-up controls
- Express contact endpoint that validates submissions and emails them through SMTP
- Static legal pages for terms, privacy, risk disclosure, KYC/AML, and investor eligibility
- Vercel Analytics integration

## Technology

| Area | Stack |
| --- | --- |
| Frontend | React, Vite, Tailwind CSS |
| Authentication | Clerk (optional) |
| Analytics | Vercel Analytics |
| Contact API | Express, Nodemailer, CORS |
| Runtime | Node.js with ECMAScript modules |

## Prerequisites

- Node.js 18 or later
- npm
- An SMTP account if you want contact-form delivery
- A Clerk publishable key if you want authentication controls enabled

## Local setup

Install the frontend dependencies:

```bash
npm install
```

Install the contact-server dependencies:

```bash
npm install --prefix server
```

Create a `.env.local` file at the repository root for optional Clerk support:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
```

Without this variable, the site still renders; sign-in and sign-up controls are hidden and a browser-console warning explains that Clerk is disabled.

Create `server/.env` for SMTP delivery:

```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your-smtp-username
EMAIL_PASS=your-smtp-password-or-app-password
RECIPIENT=info@example.com
```

`EMAIL_USER` and `EMAIL_PASS` are required for successful delivery. `SMTP_HOST` defaults to `smtp.gmail.com`, `SMTP_PORT` defaults to `587`, and `RECIPIENT` defaults to `info@zip-bolt.com`.

## Run locally

Start the frontend:

```bash
npm run dev
```

In another terminal, start the contact server:

```bash
npm run server:dev
```

The Vite app normally runs at `http://localhost:5173` and the API at `http://localhost:3001`.

### Local contact-form routing

The frontend sends form submissions to the relative URL `/api/contact`. In production, route that path to the Express server (or serve both from one origin). For local development, configure a Vite proxy or use a same-origin reverse proxy; otherwise a browser served by Vite on port 5173 will request its own `/api/contact` path instead of port 3001.

Example Vite proxy configuration:

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:3001",
    },
  },
});
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production frontend build in `dist/`. |
| `npm run preview` | Preview the built frontend locally. |
| `npm run server` | Start the Express contact server. |
| `npm run server:dev` | Start the Express server in watch mode. |

No automated test command is currently configured.

## Pages and hash routes

The application uses hash-based client-side navigation, so it does not require server-side SPA rewrite rules for these routes.

| Route | Purpose |
| --- | --- |
| `#/` or `#top` | Home page, marketplace, calculator, and process overview |
| `#charger/:segmentId` | Charger opportunity detail page |
| `#segments` | Investment segment showcase |
| `#battery-storage` | Battery energy storage segment and plans |
| `#ev-charging` | EV DC fast-charging segment and plans |
| `#ev-passenger-fleets` | Passenger-fleet segment and plans |
| `#investordeck` | Presentation-style investor deck |
| `#aboutus` | Company and platform overview |
| `#faq` | Expandable FAQ page |
| `#contact` | Contact form |

Static legal documents are available under `public/legal/` and are published at `/legal/<document>.html`.

## Project structure

```text
src/
  assets/       Brand, certification, charger, and segment imagery
  components/   Page and reusable React components
  config/       Optional Clerk configuration
  data/         Marketplace, segment, and presentation content
  utils/        Display-formatting helpers
  App.jsx       Hash routing and home-page composition
server/
  index.js      Express API and Nodemailer contact delivery
public/
  legal/        Static legal-policy pages
```

## Content and configuration

- Update opportunity data, modeled yields, risk labels, and calculator bounds in `src/data/content.js`.
- Update the standalone segment plans in `BatteryStoragePage.jsx`, `EvChargingPage.jsx`, and `EvPassengerFleetsPage.jsx`.
- Configure Clerk through `VITE_CLERK_PUBLISHABLE_KEY`; do not place private Clerk keys in frontend environment variables.
- Configure outgoing email only through `server/.env`, which is ignored by Git.

## Production deployment

Build the frontend with:

```bash
npm run build
```

Deploy the generated `dist/` directory to your static host and deploy the Express service where it can receive `/api/contact` requests. Configure your host or reverse proxy to forward `/api/*` to the Express service. Set frontend and server environment variables in the appropriate deployment environment rather than committing them.

## Legal and risk notice

This repository contains a presentation and enquiry workflow, not a complete investment transaction platform. Before presenting live opportunities or accepting funds, obtain appropriate legal, regulatory, KYC/AML, payment, investor-suitability, security, and operational approvals.

## Company

ZipAsset is presented as a product of **Zipbolt Innovations Private Limited**, Gurugram, India. Contact: [info@zip-bolt.com](mailto:info@zip-bolt.com).

