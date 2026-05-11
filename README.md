# FillsGood — Site vitrine

Site vitrine de l'application mobile **FillsGood** — l'app qui connecte les commerçants bordelais ayant des créneaux libres avec les clients à proximité, en temps réel.

## Stack

- **HTML5 + CSS3** — zéro framework, zéro build
- **Tailwind CSS** via CDN (configuration inline dans `index.html`)
- **Google Fonts** — Inter (body) + Plus Jakarta Sans (titres)
- **JavaScript vanilla** — animations scroll, menu burger, smooth scroll
- **Vercel** pour le déploiement

## Structure

```
fillsgood-website/
├── index.html        → Tout le contenu HTML + config Tailwind
├── styles.css        → Animations, mockup iPhone, styles custom
├── script.js         → Intersection Observer, menu, smooth scroll
├── assets/           → Images, screenshots (à ajouter)
├── vercel.json       → Config déploiement Vercel
├── .gitignore
└── README.md
```

## Modifier le contenu

Tout le contenu est dans `index.html`. Chaque section est clairement délimitée :

- **Navbar** → cherche `NAVBAR`
- **Hero** → cherche `HERO`
- **Comment ça marche** → cherche `COMMENT ÇA MARCHE`
- **Pour les clients** → cherche `POUR LES CLIENTS`
- **Pour les commerçants** → cherche `POUR LES COMMERÇANTS`
- **Catégories** → cherche `CATÉGORIES`
- **Stats Bordeaux** → cherche `VILLE PILOTE`
- **CTA final** → cherche `CTA FINAL`
- **Footer** → cherche `FOOTER`

### Remplacer les mockups iPhone

Les mockups actuels sont des éléments CSS. Pour les remplacer par de vrais screenshots :

1. Ajoute tes screenshots dans `assets/` (ex: `assets/screenshot-map.png`)
2. Dans `index.html`, remplace le div `.iphone-screen` par :
   ```html
   <img src="assets/screenshot-map.png" alt="FillsGood App" class="w-full h-full object-cover" />
   ```

### Modifier la palette de couleurs

La couleur brand `#4F4698` est définie dans la config Tailwind (balise `<script>` dans `<head>`) et dans `styles.css`. Pour la changer, recherche-remplace `#4F4698` dans les deux fichiers.

## Déployer sur Vercel

### Méthode 1 — Via l'interface Vercel (recommandée)

1. Crée un compte sur [vercel.com](https://vercel.com) si ce n'est pas fait
2. Pousse le code sur GitHub :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TON_COMPTE/fillsgood-website.git
   git push -u origin main
   ```
3. Sur Vercel → "Add New Project" → importe le repo GitHub
4. Vercel détecte automatiquement un site statique → clique "Deploy"
5. Le site est en ligne en ~30 secondes

### Méthode 2 — Via la CLI Vercel

```bash
npm install -g vercel
vercel
```

Suis les instructions. Le site est déployé immédiatement.

## Connecter fillsgood.fr

Une fois le site déployé sur Vercel :

1. Dans le dashboard Vercel → ton projet → **Settings** → **Domains**
2. Ajoute `fillsgood.fr` et `www.fillsgood.fr`
3. Vercel t'affiche des enregistrements DNS à créer
4. Chez ton registrar (ex: OVH, Namecheap, Gandi) :
   - Crée un enregistrement **A** : `@` → l'IP fournie par Vercel (`76.76.21.21`)
   - Crée un enregistrement **CNAME** : `www` → `cname.vercel-dns.com`
5. Attends 5-15 minutes pour la propagation DNS
6. Vercel génère automatiquement le certificat SSL (HTTPS)

## Contact

thomas@fillsgood.fr
