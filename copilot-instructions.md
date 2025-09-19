# copilot-instructions.md

## Structure du projet
- Projet React optimisé avec Vite
- Composants principaux : Header, Home, Skills, Projects, Contact, Footer
- Assets dans `src/assets/` (img, svg, video, js, cv)
- Fonts dans `src/fonts/`

## Fonctionnalités migrées
- Animations au scroll, lazy loading, navigation active, vidéos au hover
- Optimisation des images et cartes projet (hooks React)
- Gestion dynamique du background (fallback gradient)

## Bonnes pratiques
- Utiliser les hooks React pour tout effet ou animation
- Ne jamais manipuler le DOM directement hors hooks
- Importer les assets via ES6 imports ou chemins relatifs

## Extensions recommandées
- Vite (antfu.vite)
- ESLint (dbaeumer.vscode-eslint)
- Prettier (esbenp.prettier-vscode)

## Lancer le projet
```bash
npm install
npm run dev
```

## Pour toute modification
- Ajouter les nouveaux assets dans `src/assets/`
- Ajouter les nouveaux composants dans `src/components/`
- Respecter la structure et les hooks existants
