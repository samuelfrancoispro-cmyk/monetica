# Architecture Technique — Monetica

## Stack retenu

| Couche | Technologie |
|--------|-------------|
| Frontend | Next.js 14 (App Router) + TypeScript |
| Backend | API Routes Next.js (serverless) |
| Base de données | PostgreSQL via Supabase |
| Authentification | Supabase Auth |
| Autorisation | Row Level Security (RLS) Supabase |
| Temps réel | Supabase Realtime (classements) |
| Stockage fichiers | Supabase Storage (avatars, images) |
| Hébergement app | Vercel |
| Hébergement BDD | Supabase (région EU — Frankfurt) |

---

## Principes structurants

- **Monorepo** : une seule codebase Next.js, API Routes colocalisées
- **TypeScript strict** partout — frontend et API
- **Supabase comme source de vérité** : auth, data, storage, realtime dans un seul service
- **RLS** pour l'isolation des données par rôle (élève / prof / établissement)
- **RGPD** : données hébergées en Europe (Supabase Frankfurt), pas de transfert hors UE

---

## Rôles utilisateurs

| Rôle | Accès |
|------|-------|
| `eleve` | Leçons, quiz, progression, avatar, monnaie virtuelle |
| `professeur` | Gestion des comptes élèves, suivi des performances de sa classe |
| `etablissement` | Dashboard global, statistiques multi-classes |

Implémentation : colonne `role` dans la table `profiles`, policies RLS par rôle.

---

## Modèle de données (grandes tables)

```
users (géré par Supabase Auth)
profiles        — role, avatar, niveau, monnaie_virtuelle
parcours        — titre, description, ordre
lecons          — parcours_id, titre, format (video|slides|scenario), contenu
quiz            — lecon_id, questions (JSON)
progression     — user_id, lecon_id, statut, score, completed_at
classes         — etablissement_id, professeur_id, nom
eleve_classe    — eleve_id, classe_id
classements     — classe_id, user_id, score_total (vue matérialisée)
```

---

## Gamification

- **Niveaux** : calculés côté serveur à partir de `progression`, stockés dans `profiles`
- **Monnaie virtuelle** : créditée via triggers Supabase sur validation de leçon/quiz
- **Avatar** : JSON de personnalisation dans `profiles.avatar_config`
- **Classements** : mis à jour via Supabase Realtime

---

## Déploiement

```
git push → GitHub → Vercel CI/CD → Production
                  → Supabase migrations (CLI)
```

- Environnements : `development` (local) / `production` (Vercel + Supabase)
- Variables d'environnement : `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`

---

## Points ouverts

- [ ] **Hébergement vidéo** : les vidéos de leçons seront-elles hébergées dans Supabase Storage, ou intégrées depuis YouTube/Vimeo ?
- [ ] **Système anti-triche** : simple (timer côté serveur) ou plus élaboré (randomisation des questions, pool de questions) ?
