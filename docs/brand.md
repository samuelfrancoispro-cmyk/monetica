# Brand & Design System — Monetica

## Direction validée (figée)

**"Le Journal Financier"** — esthétique éditoriale premium. Référence : Financial Times × Apple News × Awwwards SOTD.
Pas SaaS générique, pas gamer, pas EdTech basique.

---

## Palette couleurs

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Background principal | Navy | `#0F172A` | Fond page, topbar, cartes sombres |
| Accent signature | Doré | `#D4AF37` | Logo, CTA, highlights, icônes actives |
| Background doux | Cream | `#F8F5EC` | DefiCard, cartes secondaires |
| Positif / succès | Mint | `#86EFAC` | XP gagné, réussite quiz |
| Négatif / alerte | Ember | `#FF6B4A` | Erreur, perte, avertissement |
| Texte principal | White-ish | `#F1F5F9` | Corps de texte sur navy |

**Tokens CSS dans `globals.css`** : `--gold`, `--navy`, `--navy-light`, `--navy-deep`, `--cream`, `--mint`, `--ember`.

Ne jamais utiliser les hex directement dans le code — toujours via `var(--gold)` ou Tailwind custom.

---

## Typographie

| Rôle | Police | Caractéristiques |
|---|---|---|
| Display / titres | **Fraunces** | Serif variable, optique "opsz", italic expressif — pour mastheads, headlines |
| Interface / corps | **Geist** | Sans-serif moderne, lisible — pour labels, paragraphes, nav |
| Monospace / données | **Geist Mono** | Chiffres financiers, codes, stats — alignement tabulaire |

Fraunces = voix éditoriale. Geist = clarté UI. Geist Mono = données chiffrées.

---

## Logo officiel

- **Composition** : € doré (`#D4AF37`) + toque navy (`#0F172A`)
- **Fichiers sources** : `docs/logoSVGPNG/`
- **Composant React** : `src/components/ui/MonenticaLogo.tsx` — SVG inline avec hover animation `capWiggle`
- Déclinaisons : icon seul · wordmark dark · wordmark light · planche complète

Ne jamais modifier la composition logo sans décision explicite.

---

## Ton éditorial (textes UI)

- **Tutoiement** systématique (Asphalte-style).
- Phrases courtes, directes, concrètes. Zéro jargon corporate.
- Humour léger, références pop FR (mèmes éducation/gaming). Jamais condescendant.
- **Concret toujours** : ex. "Théo, 17 ans, met 50€/mois → 12 000€ en 5 ans. Math, pas magie."
- Erreur élève → bienveillance + humour, jamais punition morale.
- Pas de bullshit motivationnel ("Tu peux le faire !").

> Exemple cible : *"Tes parents t'ont jamais parlé d'inflation ? Normal, on leur a pas expliqué non plus. En 8 min, tu vas tout choper."*

---

## Effets visuels (code)

- **Grain CSS** : texture papier sur les cartes cream/doré (légère, pas surchargée).
- **Gradient mesh** : arrière-plans avec blob gradient navy/doré flou.
- **Marquee ticker** : `src/components/ui/Ticker.tsx` — cours marchés animés (CSS scroll).
- **Animations GSAP** : fade + translateY à l'entrée viewport via `ScrollTrigger`. Utiliser `useGSAP` obligatoirement.
- **Smooth scroll** : Lenis (à brancher phase 3).

---

## Moodboard inspirations

Awwwards SOTD · Financial Times · The Economist · Linear · Stripe · Apple Card · Duolingo (gamif uniquement, pas le style).

---

## Dark / Light

Dark mode = défaut (navy profond). Light mode = à traiter phase 5 ou MVP investisseur.
**Ne jamais créer un composant en light only sans prévoir dark.**
