# Conformité & accessibilité

## RGPD (public mineur — priorité haute)

- **Consentement parental** : géré par l'établissement scolaire qui crée les comptes (modèle PIX — à valider juridiquement).
- **Données minimisées** : collecte strictement nécessaire. Pas de tracking comportemental commercial.
- **Hébergement EU obligatoire** : Supabase région Frankfurt (Allemagne). Jamais de données hors UE.
- **Droits** : droit à l'oubli + portabilité implémentés.
- **Pas de pub** · Pas de tracking commercial · Pas d'in-app purchases.
- **CNIL EdTech** : conformité délégué à la protection des données (DPO) avant lancement public.

---

## Éducation nationale

- **CNIL EdTech** : référentiel à respecter pour tout traitement de données élèves.
- **Validation pédagogique** : tout contenu éco doit être approuvé par expert avant publication.
- **Modèle PIX** : référence pour les certifications, l'anti-triche, la création de comptes par établissement.
- **RGAA niveau AA minimum** : accessibilité des services numériques publics français.

---

## Accessibilité (dès le MVP)

- **Contrastes** : WCAG AA partout (ratio 4.5:1 minimum pour le texte normal).
- **Navigation clavier** : tous les éléments interactifs accessibles au clavier.
- **Lecteurs d'écran** : attributs ARIA corrects sur composants custom.
- **`prefers-reduced-motion`** : toutes les animations GSAP/CSS désactivées si setting système activé.
- **Focus visible** : outline focus clairement visible (ne jamais `outline: none` sans alternative).

---

## Interdits absolus

- Pas de publicité ou monétisation directe des données élèves.
- Pas d'in-app purchases (monnaie virtuelle non achetable avec argent réel).
- Pas de transfert de données personnelles hors UE.
- Pas de profiling commercial.

---

## Contraintes générales

- Pas de deadline dure : qualité et conformité > vitesse de livraison.
- Sécurité : endpoints API protégés, RLS Supabase par rôle (élève/prof/établissement).
- PII élève jamais exposée côté client sans autorisation explicite.
