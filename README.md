# Romu Tiwari — Portfolio

Personal portfolio site for Romu Tiwari, DevOps-turned-Agentic AI Engineer.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-themes](https://github.com/pacocoursey/next-themes) — dark/light toggle
- [lucide-react](https://lucide.dev/) — icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
```

Outputs a production build to `.next/`.

## Sections

- **Hero** — name, role, stats, CTAs
- **About** — bio + terminal code window
- **Projects** — Opentrace, APN Classifier, Zendesk Agent
- **Experience** — CloudKeeper, Publicis Sapient, Torry Harris, Cognizant
- **Skills** — 7 categories: AI/ML, Backend, Frontend, Databases, Cloud, DevOps, Docs
- **Certifications** — GCP ACE, CKA, HashiCorp Terraform
- **Blogs** — 3 posts on agentic AI and RAG
- **Contact** — email, phone, LinkedIn, GitHub

## Theme

Uses CSS custom properties (`var(--bg)`, `var(--accent)`, etc.) with a `.dark` class on `<html>` for dark/light switching — no Tailwind `dark:` prefix needed.

## Deployment

Intended for AWS (S3 + CloudFront or ECS). Set `output: 'export'` in `next.config.ts` for static export before deploying to S3.