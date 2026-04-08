# Micro-Crèche D'BEBE – Site officiel

Site vitrine moderne pour la micro-crèche D'BEBE à Besançon.

## Stack technique

- **Next.js 14** – React framework
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Animations fluides
- **Export statique** – Compatible Vercel, Netlify, GitHub Pages

## Installation locale

```bash
npm install
npm run dev
```

## Build & Déploiement

```bash
npm run build    # Crée la version production dans /out
npm run export   # Export statique (déjà configuré dans next.config.js)
```

## Déploiement Vercel

1. Connectez le dépôt à Vercel
2. Framework preset : Next.js
3. Build command : `npm run build`
4. Output directory : `out`
5. Déployez

Le site sera automatiquement déployé à chaque push sur la branche principale.

## Personnalisation

- **Logo** : Ajoutez vos fichiers dans `/public` et référencez-les dans les composants.
- **Couleurs** : Modifiez `tailwind.config.js` (thème `primary` et `accent`).
- **Contenu** : Éditez les composants dans `/components`.

## Licence

Propriété exclusive Micro-Crèche D'BEBE.