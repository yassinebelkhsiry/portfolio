# Portfolio premium - BEL-KHSIRY YASSINE

Portfolio Next.js 14 conçu comme une plateforme analytics professionnelle pour un profil Master Data Science orienté IA, BI, industrie et décision métier.

## Stack

- Next.js 14 App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion
- Recharts, Plotly et D3.js
- Lucide React
- Architecture modulaire compatible Vercel

## Sections

- Hero premium avec animation, KPI et identité cockpit analytique
- À propos avec statistiques animées
- Compétences techniques avec cartes et jauges
- Projets recruteur: maintenance prédictive NASA CMAPSS, Coupe du Monde, assistant IA universitaire, fraude et scoring bancaire
- Timeline expériences: Airbus Atlantic, Société Générale, Laboratoire MIPA
- GitHub avec statistiques et projets épinglés
- Contact avec formulaire et liens professionnels

## Installation

```bash
npm install
npm run dev
```

Ouvrir ensuite `http://localhost:3000`.

## Production

```bash
npm run build
npm run start
```

## Déploiement Vercel

1. Importer le dépôt sur Vercel.
2. Vérifier que le framework détecté est `Next.js`.
3. Lancer le déploiement avec la commande de build `npm run build`.
4. Ajouter le vrai fichier CV dans `public/cv-bel-khsiry-yassine.pdf`.

## Lien public GitHub Pages

Le workflow `.github/workflows/pages.yml` déploie automatiquement le site sur GitHub Pages à chaque push sur `main`.

URL prévue:

```text
https://yassinebelkhsiry.github.io/portfolio
```

## Personnalisation rapide

Les contenus principaux se trouvent dans `data/portfolio.ts`. Les sections sont dans `components/sections`. Les effets globaux et l'identité visuelle sont définis dans `app/globals.css` et `tailwind.config.ts`.
