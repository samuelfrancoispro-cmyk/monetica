# MVP — périmètre démo investisseurs

**Objectif** : démo présentable à investisseurs, incubateurs, AMF, Éducation nationale. Qualité > vitesse.

---

## Doit contenir

### Interface & Design
- Dashboard élève complet (XP, palier, streak, leçon suivante) ← **déjà construit**
- Animations GSAP ScrollTrigger (reveals, transitions fluides)
- Smooth scroll Lenis
- UI éditoriale premium (navy+doré, Fraunces, anti-template)

### Auth & Rôles
- Inscription / connexion élève via Supabase Auth
- Compte prof (crée sa classe, voit les progressions)
- Établissement de test seedé pour la démo

### Apprentissage
- 1 parcours complet "Gérer son argent" (5-10 leçons placeholder fonctionnelles)
- Quiz interactifs avec validation + XP distribué
- Célébration de leçon terminée (animation + Monetis)

### Gamification
- Système XP + niveau (Stagiaire → Employé pour la démo)
- Monnaie Monetis fonctionnelle (gain + solde affiché)
- Streaks quotidiens
- Customiseur avatar 2D (catalogue partiel, 10-20 items)
- 1 classement classe + 1 classement national simplifié
- Quelques badges (1ère leçon, 7j streak, quiz parfait)

### Interface prof
- Voir progressions des élèves de sa classe
- Créer / gérer une classe

---

## PAS inclus dans le MVP

- Simulation entreprise isométrique 3D (vision long terme)
- Multilangue (FR uniquement)
- Application mobile native
- Anti-cheat avancé (niveau beta)
- Tous les domaines éco (1 parcours suffit)
- Classement national complet avec saisons
- Light mode complet

---

## Critère de succès MVP

Un visiteur (investisseur, fonctionnaire EdNat) peut :
1. S'inscrire en tant qu'élève
2. Compléter une leçon complète
3. Voir son XP, son niveau, ses Monetis
4. Personnaliser son avatar
5. Voir le classement de sa classe

Et repartir en se disant : *"C'est PIX mais pour la finance, et c'est beau."*
