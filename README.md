# ZipAsset

ZipAsset is a responsive web experience for Ziptrax Cleantech Private Limited's clean-energy and electric-mobility platform. It presents EV charging products and infrastructure opportunities, and provides contact forms for sales and partnership enquiries.

> **Important:** Return, APY, risk, TVL, and investment figures shown in the UI are illustrative content currently stored in the frontend. They are not connected to a live investment, KYC, payment, asset-management, or portfolio system.

## What is included

- EV charging marketplace with individual charger opportunity pages
- Investment calculator with amount, APY, lock-period, and projected-return previews
- Dedicated investment-segment views for battery storage, EV fast charging, and EV passenger fleets
- Investor deck, About, FAQ, and contact pages
- Optional Clerk-powered sign-in/sign-up controls
- Contact form that prepares a complete email draft in the visitor's default email app
- Optional Express contact endpoint for integrations that submit enquiries through the API
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
- An SMTP account if you want to use the optional contact API
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

The shared contact handler also requires Nodemailer at the repository root for Vercel Functions:

```bash
npm install
```

Create a `.env.local` file at the repository root for optional Clerk support:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key
```

Without this variable, the site still renders; sign-in and sign-up controls are hidden and a browser-console warning explains that Clerk is disabled.

To use the optional SMTP-backed contact API, create `server/.env`. The contact server loads this file automatically:

```env
PORT=3001
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your-smtp-username
EMAIL_PASS=your-smtp-password-or-app-password
```

The website's contact form opens an email draft addressed to `sales@ziptrax.in`; the visitor must send it from their email app. For the optional API, `EMAIL_USER` and `EMAIL_PASS` are required for delivery. `SMTP_HOST` defaults to `smtp.gmail.com`, and `SMTP_PORT` defaults to `587`.
For Vercel, add `SMTP_HOST`, `SMTP_PORT`, `EMAIL_USER`, and `EMAIL_PASS` under **Project Settings → Environment Variables** for each deployment environment. Never add SMTP credentials to frontend (`VITE_`) variables or commit them.

## Run locally

Start the frontend:

```bash
npm run dev
```

In another terminal, start the contact server:

```bash
npm run server:dev
```

The Vite app normally runs at `http://localhost:5173`. The optional API runs at `http://localhost:3001`.

### Local contact-form routing

The website form uses a `mailto:` link and does not require the API server. The optional `/api/contact` endpoint is available separately: locally, run `npm run dev` and `npm run server:dev` in separate terminals; on Vercel, `api/contact.js` exposes the shared handler as a serverless function.

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

Deploy the generated `dist/` directory to your static host. The website contact form uses the visitor's email app; deploy the optional Express service or Vercel function only if API-based enquiry delivery is needed. Set server environment variables in the appropriate deployment environment rather than committing them.

## Legal and risk notice

This repository contains a presentation and enquiry workflow, not a complete investment transaction platform. Before presenting live opportunities or accepting funds, obtain appropriate legal, regulatory, KYC/AML, payment, investor-suitability, security, and operational approvals.

## Company

ZipAsset is presented as a product of **Ziptrax Cleantech Private Limited**, New Delhi, India (CIN: U74999DL2016PTC309316). Address: H No. 24, Gujar Gali, Mohalla, Chandan Hola, Chhatarpur, New Delhi, Delhi 110074. Contact: [sales@ziptrax.in](mailto:sales@ziptrax.in).
