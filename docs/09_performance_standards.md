# Standards de Performance AVNIR - ZERO REGRESSION

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Contexte :** Multiples sites/apps avec exigences performance strictes. Aucune régression tolérée.

---

## 🚫 INTERDICTIONS ABSOLUES - PERFORMANCE

### Bundle & Assets
- ❌ **JAMAIS** de bundle > 300KB (JavaScript)
- ❌ **JAMAIS** d'images non optimisées (WebP obligatoire)
- ❌ **JAMAIS** de polyfills inutiles
- ❌ **JAMAIS** de libraries entières importées (tree-shaking obligatoire)
- ❌ **JAMAIS** de fonts non préchargées

### Runtime
- ❌ **JAMAIS** de re-renders inutiles (React.memo obligatoire)
- ❌ **JAMAIS** de calculs lourds sans useMemo/useCallback
- ❌ **JAMAIS** de requêtes API non cachées
- ❌ **JAMAIS** de layout shifts (CLS > 0.1)
- ❌ **JAMAIS** de blocking scripts

---

## ✅ STANDARDS OBLIGATOIRES

### 1. CORE WEB VITALS (NON-NÉGOCIABLES)
```javascript
// Métriques obligatoires
const PERFORMANCE_BUDGET = {
  FCP: 1.5,      // First Contentful Paint ≤ 1.5s
  LCP: 2.5,      // Largest Contentful Paint ≤ 2.5s
  CLS: 0.1,      // Cumulative Layout Shift ≤ 0.1
  INP: 200,      // Interaction to Next Paint ≤ 200ms (p75)
  TTFB: 600      // Time to First Byte ≤ 600ms
};

// Lighthouse scores minimums
const LIGHTHOUSE_MINIMUMS = {
  performance: 95,
  accessibility: 100,
  bestPractices: 100,
  seo: 95
};
```

### 2. Bundle Size Budget
```javascript
// Budget par type d'app
const BUNDLE_BUDGETS = {
  'marketing-site': {
    javascript: '200KB',
    css: '50KB',
    images: '500KB'
  },
  'web-app': {
    javascript: '300KB',
    css: '75KB',
    images: '1MB'
  },
  'admin-dashboard': {
    javascript: '500KB',
    css: '100KB',
    images: '2MB'
  }
};
```

### 3. Image Optimization (OBLIGATOIRE)
```javascript
// Formats autorisés par usage
const IMAGE_STANDARDS = {
  hero: 'WebP + AVIF fallback',
  thumbnails: 'WebP optimized',
  icons: 'SVG uniquement',
  photos: 'WebP + lazy loading',
  
  // Tailles maximales
  maxSizes: {
    hero: '1920x1080',
    thumbnail: '400x400',
    avatar: '200x200'
  },
  
  // Qualité
  quality: {
    webp: 85,
    jpeg: 80,
    avif: 75
  }
};
```

### 4. Caching Strategy
```javascript
// Cache headers obligatoires
const CACHE_STRATEGIES = {
  static: 'max-age=31536000, immutable',     // 1 an
  api: 'max-age=300, stale-while-revalidate=60', // 5min
  html: 'max-age=0, must-revalidate',        // Pas de cache
  images: 'max-age=2592000',                 // 30 jours
  fonts: 'max-age=31536000, crossorigin'     // 1 an
};
```

---

## MONITORING OBLIGATOIRE

### 1. Real User Monitoring (RUM)
```typescript
// Métriques à tracker en production
interface PerformanceMetrics {
  // Core Web Vitals
  lcp: number;
  cls: number;
  inp: number;
  ttfb: number;
  
  // Custom metrics
  timeToInteractive: number;
  bundleSize: number;
  apiResponseTime: number;
  errorRate: number;
}

// Alertes automatiques
const ALERT_THRESHOLDS = {
  fcp: 2000,        // > 2s = alerte
  lcp: 3000,        // > 3s = alerte
  cls: 0.15,        // > 0.15 = alerte
  errorRate: 0.01   // > 1% = alerte
};
```

### 2. Performance CI/CD
```bash
# Pipeline obligatoire
1. Bundle analysis (webpack-bundle-analyzer)
2. Lighthouse CI (scores minimums)
3. Image optimization check
4. Performance regression test
5. Core Web Vitals validation
```

---

## 🚀 OPTIMISATIONS OBLIGATOIRES

### 1. Code Splitting
```typescript
// Lazy loading obligatoire
const LazyComponent = lazy(() => import('./HeavyComponent'));
const LazyPage = lazy(() => import('../pages/HeavyPage'));

// Route-based splitting
const routes = [
  { path: '/admin', component: lazy(() => import('./AdminApp')) },
  { path: '/dashboard', component: lazy(() => import('./Dashboard')) }
];
```

### 2. Resource Hints
```html
<!-- Preload critique resources -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/api/critical-data" as="fetch" crossorigin>

<!-- Prefetch next likely resources -->
<link rel="prefetch" href="/dashboard">
<link rel="dns-prefetch" href="//api.stripe.com">
```

### 3. Service Worker (PWA)
```typescript
// Cache strategy obligatoire
const CACHE_STRATEGIES = {
  static: 'CacheFirst',      // CSS, JS, images
  api: 'NetworkFirst',       // API calls
  html: 'StaleWhileRevalidate' // HTML pages
};
```

---

## 📋 CHECKLIST PERFORMANCE

### Avant chaque déploiement :
- [ ] Bundle size dans le budget
- [ ] Images optimisées (WebP/AVIF)
- [ ] Lighthouse scores ≥ minimums
- [ ] Core Web Vitals validés
- [ ] Pas de layout shifts
- [ ] Service Worker configuré
- [ ] Cache headers corrects

### Tests automatisés :
- [ ] Performance regression tests
- [ ] Bundle size monitoring
- [ ] Image optimization check
- [ ] API response time validation
- [ ] Memory leak detection

---

## 🎯 OBJECTIFS PERFORMANCE

### Court terme (1 mois) :
- ✅ Monitoring RUM sur tous les sites
- ✅ Bundle budgets respectés
- ✅ Images optimisées automatiquement
- ✅ Core Web Vitals > seuils

### Moyen terme (3 mois) :
- ✅ PWA avec Service Worker
- ✅ Edge caching (Cloudflare/Vercel)
- ✅ Advanced code splitting
- ✅ Performance dashboard

### Long terme (6 mois) :
- ✅ Predictive prefetching
- ✅ Advanced image optimization
- ✅ Performance AI monitoring
- ✅ Auto-optimization pipeline

---

**RÈGLE ULTIME PERFORMANCE : "Fast by default, not by accident"**
