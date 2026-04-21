# Gamification — cœur du produit

## Progression : 15 niveaux (5 paliers × 3 sous-niveaux)

**Nomenclature retenue (Option A — carrière)**

| Palier | I | II | III |
|---|---|---|---|
| 1 | Stagiaire I | Stagiaire II | Stagiaire III |
| 2 | Employé I | Employé II | Employé III |
| 3 | Cadre I | Cadre II | Cadre III |
| 4 | Dirigeant I | Dirigeant II | Dirigeant III |
| 5 | Magnat I | Magnat II | Magnat III |

- Progression basée sur **apprentissage réel + validation des compétences**. Jamais achetable.
- Narration courte (cinématique + dialogue mascotte) à chaque montée de palier majeur.
- XP calculé côté serveur (Supabase), stocké dans `profiles.niveau`.

---

## Monnaie virtuelle — "Monetis"

- **Gagnés uniquement par** : cours terminés, quiz réussis, streaks, défis, premiers de classe.
- **Jamais** achetables avec de l'argent réel. Pas de pay-to-win.
- **Dépensés sur** : avatar 2D (vêtements, accessoires) + simulation entreprise (mobilier, déco).
- Multiplicateurs : streak actif (+10%), quiz parfait (+25%), 1er de classe (+50%).
- Stockés dans `profiles.monnaie_virtuelle`.

---

## Avatar 2D

- Style Bitmoji / Snapchat — personnage 2D stylisé, expressif.
- Customiseur : visage, cheveux, peau, yeux, tenue, accessoires, fonds.
- Skins thématiques : saisons, événements (rentrée, examens, événements EdNat).
- Visible partout : profil, classements, intro de leçon, célébrations de palier.
- Tech envisagée : layers SVG/PNG composables (à confirmer vs sprite atlas).
- Stocké : `profiles.avatar_config` (JSON).

---

## Simulation d'entreprise isométrique — vision long terme

> Feature signature. Inspiration : *PewDiePie's Tuber Simulator*.

- Vue isométrique 3D (React Three Fiber + caméra ortho).
- Départ : bureau vide.
- Évolution : achat mobilier / déco / employés PNJ animés / machines / étages.
- Catalogue : centaines d'items thématiques (open-space, salle réunion, lab fintech, terrasse...).
- Mécaniques : grille de placement, rotation, sauvegarde layout, bonus passifs (ex: analyste → +5% XP macro), visite profils amis.
- Style 3D : **low-poly stylisé** (charme + performance + cohérence brand).
- **MVP** : vertical slice — 1 espace entièrement jouable (placement, achat, sauvegarde).
- **Phase 5+** : catalogue complet + visiteurs + saisons.

---

## Classements

- **National par palier** : top FR isolé par tranche de niveau (style Clash of Clans — ligues séparées).
- **Établissement** : top classe + top école.
- **Saisons** : reset périodique (mensuel ?) + récompenses cosmétiques exclusives.
- **Anti-cheat** : limite de farming, validation serveur de chaque XP gagné.
- Tech : vues matérialisées Supabase + Supabase Realtime pour mise à jour live.

---

## Streaks & défis

- **Streaks quotidiens** (style Duolingo) : flammes visuelles, freeze tokens.
- **Défis hebdomadaires** : objectif spécial → grosse récompense Monetis.
- **Badges** : achievements visuels ("1ère leçon", "7j streak", "Top 10 école", "Maître ETF", "Parfait"...).
- Sons + micro-animations sur chaque action positive (cohérents, pas agressifs).

---

## Certifications

- Certification Monetica : épreuve formelle, certificat PDF téléchargeable.
- Objectif long terme : reconnaissance officielle AMF / Éducation nationale.
- Valorisable sur Parcoursup / CV.
- Modèle : PIX (anti-triche, validation serveur, randomisation questions).
