# Roadmap — Monetica 2

## Vision finale

Monetica = la référence FR de l'éducation financière gamifiée.
Gratuit, certifiant, partenaire de l'Éducation nationale, présentable à des investisseurs publics/privés.

---

## Phase 1 — UI Dashboard ✅ (complétée 2026-04-22)

**Objectif** : dashboard statique de qualité Awwwards, build propre, base solide.

- [x] Next.js 16 + TypeScript + Tailwind v4 installés
- [x] Design system navy+doré validé, tokens CSS
- [x] Fraunces + Geist + Geist Mono
- [x] Composants : MonenticaLogo · Ticker · Topbar · Masthead · LeadCard · DefiCard · SparkCard · LessonsSection · PodiumCard · IndexRail
- [x] Animations CSS (XP bar, marquee ticker, hover)
- [x] GSAP + Lenis + Motion installés
- [x] Build propre, zéro erreur TypeScript
- [x] Dev server port 3001

---

## Phase 2 — Animations GSAP (en cours)

**Objectif** : dashboard vivant, révèle fluide de chaque section.

- [ ] `ScrollTrigger` branché + registered
- [ ] `useGSAP` sur chaque composant dashboard (fade + translateY stagger)
- [ ] Séquencement : Masthead → LeadCard → DefiCard → SparkCard → LessonsSection → PodiumCard → IndexRail
- [ ] `prefers-reduced-motion` respecté
- [ ] Build propre validé

---

## Phase 3 — Smooth scroll Lenis

**Objectif** : scroll premium, fluide, compatible GSAP.

- [ ] Lenis initialisé dans `layout.tsx` (côté client)
- [ ] Synchronisation `Lenis.raf` avec `gsap.ticker`
- [ ] Scroll fluide testé sur tous les composants
- [ ] Build propre validé

---

## Phase 4 — Supabase (auth + base de données)

**Objectif** : utilisateurs réels, données persistées.

- [ ] Projet Supabase créé (région Frankfurt)
- [ ] Variables `.env.local` configurées
- [ ] Tables créées : `profiles`, `parcours`, `lecons`, `quiz`, `progression`, `classes`, `eleve_classe`
- [ ] RLS activé par rôle (élève / prof / établissement)
- [ ] Auth : inscription + connexion élève (email/password)
- [ ] Dashboard branché sur les vraies données utilisateur
- [ ] Supabase Realtime pour classements

---

## Phase 5 — Contenu éducatif & gamification réelle

**Objectif** : MVP présentable investisseurs.

- [ ] Parcours "Gérer son argent" — 5 leçons placeholder fonctionnelles
- [ ] Quiz interactifs avec calcul XP côté serveur
- [ ] Système Monetis (gain, solde, dépense)
- [ ] Customiseur avatar 2D (catalogue partiel)
- [ ] Streaks quotidiens
- [ ] Classement classe + classement national simplifié
- [ ] Badges essentiels (1ère leçon, 7j streak, quiz parfait)
- [ ] Interface prof (voir progressions, créer classe)
- [ ] Certification Monetica démo (PDF)

---

## Phase 6+ — Vision long terme

- Simulation entreprise isométrique 3D (R3F)
- Parcours éco complets (tous domaines, experts validés)
- Light mode
- App mobile (React Native ou PWA)
- Partenariat AMF / Éducation nationale officiel
- Classements nationaux par saison
- Multilangue (EN, ES)
- Sentry + PostHog + Beta publique

---

## Règle de progression

Chaque phase doit être :
1. Entièrement fonctionnelle (`npm run build` propre)
2. Visuellement validée par Samuel
3. Committed avant de passer à la phase suivante

Jamais deux phases en parallèle.
