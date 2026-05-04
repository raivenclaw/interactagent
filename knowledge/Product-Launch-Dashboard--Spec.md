# Product Launch Dashboard — Spec

An internal tool for Aster & Bloom (DTC skincare brand).

## What You're Building

A dashboard where you enter new products and get everything you need for a launch: descriptions, margin calculations, and a readiness checklist. Products are saved to a database so you can manage your entire catalog.

## What It Does

- Enter a new product: name, ingredients, cost price, target audience, key benefits
- See 3 product description variants (short/story/technical) — you paste these in or generate with a skill
- Calculate margin at different price points (2x, 2.5x, 3x markup)
- Launch readiness checklist (photography, landing page, email sequence, social posts)
- Dashboard shows all products with status (draft/ready/launched)

## Data Model (Supabase Tables)

**products**
- id (uuid, primary key)
- name (text)
- ingredients (text)
- cost_price (numeric)
- sell_price (numeric)
- target_audience (text)
- key_benefits (text)
- status (text: draft/ready/launched)
- created_at (timestamp)

**descriptions**
- id (uuid, primary key)
- product_id (uuid, foreign key → products)
- variant (text: short/story/technical)
- content (text)
- created_at (timestamp)

## Pages

- `/` — Dashboard: list all products, show status badge, click to view details
- `/new` — Add Product: form with all product fields
- `/product/[id]` — Product Detail: descriptions, margin calculator, launch checklist

## Auth
Google social login via Supabase Auth. Only logged-in users can access the dashboard.

## Tech Stack
Next.js, Supabase, Tailwind CSS, deployed to Vercel.

## Design Rules
- Mobile-first responsive
- Clean, minimal UI (cream background `#EAE6DF`, dark text `#2E2A26`)
- Status badges: draft (gray), ready (yellow), launched (green)
- No external API calls besides Supabase

## Success
You can add a product, view its descriptions and margins, track launch readiness, and share the dashboard URL with your co-founder.
