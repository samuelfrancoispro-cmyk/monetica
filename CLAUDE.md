# Monetica

> PIX de l'éducation financière FR. 100% gratuit, gamifié, UI éditoriale premium. Cible : partenariat Éducation nationale + investisseurs.

## TL;DR (lire à chaque session)

- **Public** : lycéens/collégiens/étudiants FR (13-25). Comptes créés par établissement (modèle PIX). Profs = admin de classe.
- **Stack** : Next.js 16 · React 19 · TypeScript strict · Tailwind v4 · GSAP 3 + @gsap/react · Lenis · Motion · Lucide React. Supabase prévu.
- **Design figé** : "Journal Financier éditorial" — navy `#0F172A` + doré `#D4AF37`. Fraunces + Geist. NE PAS changer.
- **Non-négociable** : 100% gratuit · RGPD mineurs · RGAA AA · MVP présentable investisseurs · anti-template-AI (viser Awwwards/Linear, pas Vercel default).
- **Méthode** : petites briques validées une par une. `npm run build` après chaque brique. Jamais 20 fichiers d'un coup.
- **Dev server** : `npm run dev` → **http://localhost:3001** (port 3000 occupé).
- **Samuel** : débutant autodidacte — vulgariser chaque concept (1 analogie + 1 exemple), 1 objectif par session.

## Architecture

```
monetica 2/
├── CLAUDE.md               ← ce fichier (lu chaque session)
├── PRD.md                  ← vision produit complète
├── ARCHITECTURE.md         ← modèle de données + décisions techniques
├── docs/
│   ├── brand.md            ← design system, ton, logo, inspirations
│   ├── gamification.md     ← niveaux, monnaie, avatar, entreprise 3D, classements
│   ├── pedagogy.md         ← format leçon, domaines, règle experts-only
│   ├── mvp.md              ← périmètre démo investisseurs
│   ├── stack.md            ← stack actuelle + libs à ajouter par brique
│   ├── compliance.md       ← RGPD, EdNat, a11y
│   └── roadmap.md          ← 5 phases détaillées + état actuel
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← Fraunces + Geist + metadata
│   │   ├── globals.css     ← tokens CSS (--gold, --navy-*, --cream) + keyframes
│   │   └── page.tsx        ← dashboard principal
│   └── components/
│       ├── ui/             ← MonenticaLogo · Ticker · Topbar
│       └── dashboard/      ← Masthead · LeadCard · DefiCard · SparkCard
│                              LessonsSection · PodiumCard · IndexRail
└── docs/logoSVGPNG/        ← logo officiel (€ doré + toque navy)
```

## Conventions code

- TypeScript strict, jamais `any` non justifié.
- RSC par défaut, `"use client"` uniquement si nécessaire (hooks GSAP, state).
- Tailwind utility-first — tokens CSS pour les couleurs brand (`var(--gold)`, `var(--navy)`).
- `useGSAP` de `@gsap/react` pour toutes les animations GSAP (cleanup automatique).
- Commits : conventional (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `style:`).
- `prefers-reduced-motion` honoré sur toutes les animations.

## Règles Claude (critique)

1. **Petites briques validées**. Proposer avant d'implémenter toute décision structurante.
2. **Anti-template-AI** : à chaque composant, vérifier "template Vercel générique ? → repenser". Cible : Awwwards/Linear/Apple.
3. **Design figé** : ne jamais modifier la palette navy+doré ni la typo Fraunces sans demande explicite.
4. **`npm run build` avant de valider** une brique terminée.
5. **Expliquer pour débutant** : chaque nouveau concept = 1 analogie concrète + 1 exemple de code.
6. **1 objectif par session** — recadrer si Samuel éparpille.
7. **Contenu pédagogique** : jamais rédigé sans marquage "placeholder explicite".
8. **Supabase** : n'en parler qu'à la phase 4 (après GSAP + Lenis terminés et validés).
9. **Pas de nouveaux packages** sans nécessité absolue et sans accord explicite.
10. **Sécurité PII élève** : données mineurs protégées, RLS Supabase dès la phase 4.

## Lazy loading des docs (économie tokens)

Ne charger un doc que si la tâche l'exige :

| Tâche | Doc à lire |
|---|---|
| UI, couleurs, typo, animations | `docs/brand.md` |
| Niveaux, XP, monnaie, avatar, 3D | `docs/gamification.md` |
| Leçons, quiz, contenu éco | `docs/pedagogy.md` |
| Auth, base de données, API | `docs/stack.md` + `docs/compliance.md` |
| Roadmap, périmètre, priorités | `docs/roadmap.md` + `docs/mvp.md` |

## État actuel (2026-04-22)

- Phase 1 ✅ — Dashboard statique complet, build propre, port 3001.
- **Phase 2 en cours** — GSAP ScrollTrigger reveals (`useGSAP` + fade+translateY par section).
- Phase 3 → Lenis smooth scroll.
- Phase 4 → Supabase auth + base de données.
- Phase 5 → Contenu éducatif réel.

*Fichier vivant — mettre à jour "État actuel" à chaque brique validée.*
