# 💰 MLAAS

A satirical SaaS landing page for a fake "Money Laundering as a Service" company. The contact form actually works — submissions go to a Notion database.

**[money-laundring.vercel.app](https://money-laundring.vercel.app)**

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Notion](https://img.shields.io/badge/Notion_API-000000?style=flat-square&logo=notion&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

---

## How this happened

Started as a joke prompt in Cursor: *"Build me a premium SaaS landing page for money laundering."*

The result was absurdly good. Full hero section, pricing tiers, testimonials from fictional cartel leaders, animated particles — the whole enterprise SaaS playbook, applied to the worst possible business.

It was funny enough that I decided to actually ship it:

1. Converted the single-file HTML into a proper **Next.js** app — 14 components (Hero, Pricing, Testimonials, FAQ, etc.)
2. Added a working contact form that submits to a **Notion database** via a Vercel serverless function
3. Added Privacy Policy and Terms pages (because of course a money laundering service needs legal compliance)
4. Deployed on Vercel

The Notion integration was the most interesting part — setting up an integration token, designing the database schema, and writing the API route was a good exercise in serverless backends.

## Run locally

```bash
npm install
npm run dev
```

Needs a `.env` with `NOTION_TOKEN` and `NOTION_DATABASE_ID` for the contact form.

> Obviously, this is satire. No actual services offered.
