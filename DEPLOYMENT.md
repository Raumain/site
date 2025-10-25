# Guide de Déploiement GitHub Pages

## 📋 Prérequis
- Compte GitHub
- Repository créé
- Code pushé sur la branche `main`

## 🚀 Configuration Initiale

### 1. Configuration du Repository GitHub
1. Allez sur votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu latéral, cliquez sur **Pages**
4. Dans **Source**, sélectionnez **GitHub Actions**

### 2. Configuration de la Base URL

#### Si votre repo s'appelle `username.github.io` :
Dans `vite.config.ts`, assurez-vous que :
```typescript
base: "/"
```

#### Si votre repo s'appelle `site` ou autre nom :
Dans `vite.config.ts`, modifiez :
```typescript
base: "/site/"  // Remplacez "site" par le nom de votre repo
```

### 3. Domaine Personnalisé (Optionnel)

Si vous avez un domaine personnalisé (ex: `lestudyo.fr`) :

1. Créez un fichier `public/CNAME` (sans extension) :
```
lestudyo.fr
```

2. Configurez vos DNS chez votre registrar :
```
Type: A
Host: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: CNAME
Host: www
Value: username.github.io
```

3. Dans `vite.config.ts`, utilisez :
```typescript
base: "/"
```

## 🔧 Déploiement

### Déploiement Automatique (Recommandé)
Le fichier `.github/workflows/deploy.yml` est déjà configuré.

À chaque `git push` sur `main`, le site sera automatiquement déployé :
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Le déploiement prend environ 1-2 minutes. Suivez la progression dans l'onglet **Actions** de votre repo.

### Déploiement Manuel
Si vous préférez déployer manuellement :

1. Allez dans l'onglet **Actions** sur GitHub
2. Cliquez sur le workflow **Deploy to GitHub Pages**
3. Cliquez sur **Run workflow**

## 🎯 Vérifications Post-Déploiement

### 1. Animations & View Transitions
✅ **Fonctionnent parfaitement** sur GitHub Pages
- Les animations CSS sont dans les fichiers CSS buildés
- Les View Transitions utilisent l'API native du navigateur
- Aucune configuration serveur nécessaire

### 2. SEO
✅ **Totalement compatible** avec GitHub Pages
- Toutes les meta tags sont dans le HTML généré
- Sitemap.xml est servi statiquement
- Robots.txt fonctionne normalement

⚠️ **Note** : Les meta tags dynamiques (via `head()` de TanStack Router) fonctionnent car le site est une SPA qui met à jour le DOM.

### 3. Accessibilité
✅ **100% fonctionnel**
- ARIA attributes dans le HTML
- Skip links fonctionnent
- Keyboard navigation OK
- Screen readers compatibles

### 4. Routing Client-Side
✅ **Configuré avec le système 404.html**
- Toutes les routes fonctionnent (`/projets`, `/a-propos`, etc.)
- Partage de liens directs OK
- Refresh de page OK
- Navigation browser back/forward OK

## 🔍 Tests Après Déploiement

1. **Test des routes** :
   - `https://username.github.io/` ✓
   - `https://username.github.io/projets` ✓
   - `https://username.github.io/projets/1` ✓
   - `https://username.github.io/a-propos` ✓

2. **Test des animations** :
   - Scroll pour voir les animations slide-up
   - Naviguer entre pages pour voir les view transitions
   - Tester sur mobile

3. **Test SEO** :
   - Vérifier les meta tags avec l'inspecteur
   - Tester `https://username.github.io/sitemap.xml`
   - Tester `https://username.github.io/robots.txt`

4. **Test Performance** :
   - Lighthouse dans Chrome DevTools
   - PageSpeed Insights
   - Web Vitals

## ⚠️ Limitations GitHub Pages

### Ce qui fonctionne :
✅ Sites statiques (HTML/CSS/JS)
✅ SPAs (Single Page Applications)
✅ React / Vue / Angular
✅ View Transitions API
✅ CSS Animations
✅ Service Workers
✅ Web Fonts
✅ SEO (meta tags statiques et dynamiques)

### Ce qui ne fonctionne PAS :
❌ Server-Side Rendering (SSR)
❌ API Routes côté serveur
❌ Bases de données
❌ Variables d'environnement backend
❌ Headers HTTP personnalisés (sauf via meta tags)
❌ Redirections serveur (301/302)

### Workarounds pour les limitations :

1. **Redirections** : Utilisez le système 404.html (déjà configuré)
2. **Headers** : Impossible, mais pas nécessaire pour un site statique
3. **Analytics** : Utilisez Google Analytics ou Plausible (client-side)
4. **Formulaires** : Web3Forms (déjà configuré) fonctionne parfaitement

## 📊 Optimisations Spécifiques GitHub Pages

### Fichiers Ajoutés :
- ✅ `public/.nojekyll` - Désactive Jekyll
- ✅ `public/404.html` - Gestion routing SPA
- ✅ `.github/workflows/deploy.yml` - CI/CD automatique
- ✅ Script dans `index.html` - Restauration des routes

### Cache et Performance :
GitHub Pages active automatiquement :
- ✅ Compression gzip
- ✅ Cache pour assets (avec hashes)
- ✅ CDN global
- ✅ HTTP/2
- ✅ HTTPS automatique

## 🐛 Troubleshooting

### Le site ne se charge pas :
1. Vérifiez que `base` dans `vite.config.ts` correspond au nom du repo
2. Attendez 1-2 minutes après le premier déploiement
3. Videz le cache du navigateur (Ctrl+Shift+R)

### Les routes ne fonctionnent pas :
1. Vérifiez que `404.html` est dans `/public`
2. Vérifiez le script dans `index.html`
3. Vérifiez que GitHub Actions a réussi

### Les animations sont saccadées :
1. Testez dans un navigateur moderne (Chrome/Firefox/Safari récents)
2. Vérifiez que vous n'êtes pas en mode "économie d'énergie"
3. Désactivez les extensions navigateur qui peuvent interférer

### Erreur 404 persistante :
- Assurez-vous que la configuration **Pages** dans GitHub Settings est sur **GitHub Actions**
- Relancez le workflow manuellement

## 📞 Support

Pour tout problème :
1. Vérifiez l'onglet **Actions** sur GitHub pour les logs de build
2. Consultez la documentation : https://docs.github.com/pages
3. Vérifiez la console du navigateur pour les erreurs JS

## 🎉 Résultat Final

Votre site sera disponible à :
- `https://username.github.io/` (si repo username.github.io)
- `https://username.github.io/repo-name/` (si autre nom)
- `https://votredomaine.com/` (si domaine personnalisé)

Avec :
- ⚡ Performance optimale
- 🎨 Animations fluides 60fps
- 🔄 View Transitions natives
- ♿ Accessibilité totale
- 🔍 SEO optimisé
- 📱 Responsive parfait
- 🚀 CDN global automatique
- 🔒 HTTPS par défaut
