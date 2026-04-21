# Stack technique — Monetica 2

## Installée et fonctionnelle (2026-04-22)

| Couche | Choix | Version |
|---|---|---|
| Framework | Next.js (App Router, RSC) | 16.2.4 |
| Langage | TypeScript strict | ^5 |
| Style | Tailwind CSS v4 | ^4 |
| Animations | GSAP + @gsap/react | 3.15 / 2.1.2 |
| Animations 2 | Motion (Framer) | ^12 |
| Smooth scroll | Lenis | ^1.3.23 |
| Icônes | Lucide React | ^1.8 |
| Runtime | React 19 + React DOM 19 | 19.2.4 |

Dev server : `npm run dev` → port **3001**.

---

## À ajouter (ordre par phase)

| Phase | Lib | Pourquoi | Quand |
|---|---|---|---|
| 3 | **Lenis** (déjà installé — brancher) | Smooth scroll GSAP-compatible | Phase 3 |
| 4 | **Supabase JS** (`@supabase/supabase-js`) | Auth + DB + Realtime + Storage | Phase 4 |
| 4 | **Zod** | Validation schémas côté serveur | Phase 4 |
| 4 | **Zustand** | State client (avatar config, UI) | Phase 4 |
| 5 | **TanStack Query** | Server state, cache, data fetching | Phase 5 |
| 5 | **Lottie-react** | Animations badges / célébrations | Phase 5 |
| 5 | **Howler.js** | Sons feedback (quiz, XP, level-up) | Phase 5 |
| MVP | **React Three Fiber** + drei + three | Simulation entreprise iso 3D | Après MVP |
| Beta | **Vitest** + **Playwright** | Tests logique gamif + E2E | Avant beta |
| Beta | **Sentry** | Monitoring erreurs prod | Avant beta |
| Beta | **PostHog** (EU/self-hosted) | Analytics RGPD | Avant beta |

---

## Hosting prévu

| Service | Usage |
|---|---|
| **Vercel** | Frontend Next.js (free tier MVP) |
| **Supabase** (Frankfurt — EU) | DB PostgreSQL + Auth + Storage + Realtime |
| Migration possible | OVH/Scaleway si partenariat État (souveraineté FR) |

---

## Variables d'environnement (phase 4)

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Fichier `.env.local` (jamais commité). Modèle dans `.env.example`.

---

## Décisions techniques figées

- **Supabase** et non Auth.js — une seule plateforme pour auth + DB + realtime + storage.
- **App Router RSC** — server components par défaut, `"use client"` minimal.
- **GSAP** et non Framer Motion pour les animations scroll (meilleur contrôle ScrollTrigger).
- **Tailwind v4** — nouvelle syntaxe, pas de `tailwind.config.js`.
