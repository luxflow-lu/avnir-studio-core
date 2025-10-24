# Standards de Sécurité AVNIR - ZERO COMPROMISE

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Contexte :** Gestion d'utilisateurs, données sensibles, paiements, APIs. Aucune faille tolérée.

---

## 🚫 INTERDICTIONS ABSOLUES - SÉCURITÉ

### Données & Secrets
- ❌ **JAMAIS** de secrets en dur dans le code
- ❌ **JAMAIS** de clés API commitées
- ❌ **JAMAIS** de mots de passe en plain text
- ❌ **JAMAIS** de données sensibles dans localStorage
- ❌ **JAMAIS** de logs contenant des données personnelles

### Frontend
- ❌ **JAMAIS** de logique d'authentification côté client uniquement
- ❌ **JAMAIS** de validation côté client uniquement
- ❌ **JAMAIS** d'exposition d'informations sensibles dans le DOM
- ❌ **JAMAIS** de requêtes API sans authentification
- ❌ **JAMAIS** de redirection non validée

### Backend/API
- ❌ **JAMAIS** d'endpoint sans authentification/autorisation
- ❌ **JAMAIS** de requête SQL directe (injection SQL)
- ❌ **JAMAIS** de données utilisateur non sanitisées
- ❌ **JAMAIS** d'erreurs exposant la structure interne
- ❌ **JAMAIS** de CORS ouvert à tous (*) en production

---

## 🔒 STANDARDS OBLIGATOIRES

### 1. Gestion des Secrets
```bash
# Structure obligatoire des secrets
.env.local           # Développement local uniquement
.env.example         # Template public (pas de vraies valeurs)
.env.production      # Production (Vercel/serveur uniquement)

# Variables obligatoires
DATABASE_URL=        # Base de données
JWT_SECRET=          # Token JWT (256 bits minimum)
API_KEY_STRIPE=      # Paiements
API_KEY_SENDGRID=    # Emails
NEXTAUTH_SECRET=     # NextAuth (si utilisé)
```

### 2. Authentification & Autorisation
```typescript
// Structure obligatoire
packages/auth/
├── src/
│   ├── providers/     # Providers OAuth (Google, GitHub, etc.)
│   ├── middleware/    # Middleware de protection
│   ├── utils/         # Utilitaires JWT, hash, etc.
│   ├── types.ts       # Types d'authentification
│   └── index.ts       # Exports

// Règles strictes
- JWT avec expiration courte (15min access + 7j refresh)
- Hash bcrypt minimum 12 rounds
- Rate limiting sur toutes les routes sensibles
- 2FA obligatoire pour admins
```

### 3. Validation & Sanitisation
```typescript
// Validation obligatoire avec Zod
import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
  name: z.string().min(1).max(100).regex(/^[a-zA-Z\s]+$/)
});

// TOUJOURS valider côté serveur
export async function createUser(data: unknown) {
  const validated = UserSchema.parse(data); // Throw si invalide
  // ... logique métier
}
```

### 4. Protection CSRF & XSS
```typescript
// Headers de sécurité obligatoires
const securityHeaders = {
  // Utiliser nonces/strict-dynamic, PAS 'unsafe-inline'
  // Exemple côté Next.js via middleware (nonce par requête)
  'Content-Security-Policy':
    "default-src 'self'; " +
    "script-src 'self' 'strict-dynamic' 'nonce-${nonce}' https:; " +
    "style-src 'self' 'nonce-${nonce}' https:; " +
    "img-src 'self' data: https:; connect-src 'self' https:; " +
    "base-uri 'self'; frame-ancestors 'none'; form-action 'self';",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
};

// CSRF protection avec tokens
// XSS protection avec sanitisation HTML
```

---

## 🛡️ ARCHITECTURE SÉCURISÉE

### 1. Packages de Sécurité
```
packages/auth/           # Authentification centralisée
packages/security/       # Utilitaires sécurité
packages/validation/     # Schémas de validation
packages/encryption/     # Chiffrement/déchiffrement
```

### 2. Middleware de Sécurité
```typescript
// packages/security/src/middleware/auth.ts
export function requireAuth(roles?: string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = extractToken(req);
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    
    const user = await verifyToken(token);
    if (!user) return res.status(401).json({ error: 'Invalid token' });
    
    if (roles && !roles.some(role => user.roles.includes(role))) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    
    req.user = user;
    next();
  };
}
```

### 3. Rate Limiting
```typescript
// packages/security/src/middleware/rateLimit.ts
export const rateLimits = {
  auth: { windowMs: 15 * 60 * 1000, max: 5 },      // 5 tentatives/15min
  api: { windowMs: 60 * 1000, max: 100 },          // 100 req/min
  payment: { windowMs: 60 * 1000, max: 3 },        // 3 paiements/min
  upload: { windowMs: 60 * 1000, max: 10 }         // 10 uploads/min
};
```

---

## 💳 SÉCURITÉ PAIEMENTS

### Standards PCI DSS
- ✅ **JAMAIS** stocker de numéros de carte
- ✅ **Stripe/PayPal** uniquement (PCI compliant)
- ✅ **Webhooks** avec signature validation
- ✅ **HTTPS** obligatoire partout
- ✅ **Logs** des transactions (sans données sensibles)

### Implementation Stripe
```typescript
// packages/payments/src/stripe.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16'
});

export async function createPaymentIntent(amount: number, currency = 'eur') {
  // Validation côté serveur uniquement
  if (amount < 50) throw new Error('Montant minimum 0.50€');
  if (amount > 100000) throw new Error('Montant maximum 1000€');
  
  return await stripe.paymentIntents.create({
    amount: amount * 100, // Centimes
    currency,
    metadata: { source: 'avnir-platform' }
  });
}
```

---

## 🔐 CHIFFREMENT & HACHAGE

### Données Sensibles
```typescript
// packages/encryption/src/crypto.ts
import crypto from 'crypto';
import bcrypt from 'bcrypt';

// Chiffrement AES-256-GCM pour données sensibles
export function encrypt(text: string, key: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipher('aes-256-gcm', key);
  // ... implementation
}

// Hash bcrypt pour mots de passe
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12); // 12 rounds minimum
}

// Hash pour tokens/sessions
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}
```

---

## 🚨 MONITORING & ALERTES

### Logs de Sécurité
```typescript
// packages/security/src/logger.ts
export const securityLogger = {
  authFailure: (ip: string, email?: string) => {
    console.log(JSON.stringify({
      type: 'AUTH_FAILURE',
      ip,
      email: email ? hashEmail(email) : null, // Hash pour RGPD
      timestamp: new Date().toISOString()
    }));
  },
  
  suspiciousActivity: (userId: string, activity: string) => {
    console.log(JSON.stringify({
      type: 'SUSPICIOUS_ACTIVITY',
      userId: hashUserId(userId),
      activity,
      timestamp: new Date().toISOString()
    }));
  }
};
```

### Alertes Automatiques
- 🚨 **5+ échecs d'authentification** → Alerte immédiate
- 🚨 **Tentative d'injection SQL** → Blocage IP + alerte
- 🚨 **Upload de fichier suspect** → Quarantaine + analyse
- 🚨 **Paiement frauduleux** → Blocage + investigation

---

## 🛡️ PROTECTION DES DONNÉES (RGPD)

### Minimisation des Données
```typescript
// Collecte uniquement les données nécessaires
const UserMinimal = {
  email: string,      // Obligatoire pour auth
  name: string,       // Obligatoire pour UX
  // PAS de téléphone si pas nécessaire
  // PAS d'adresse si pas e-commerce
};

// Anonymisation après suppression
export async function anonymizeUser(userId: string) {
  await db.user.update({
    where: { id: userId },
    data: {
      email: `deleted-${Date.now()}@anonymized.com`,
      name: 'Utilisateur supprimé',
      // Garder les données nécessaires pour l'historique
    }
  });
}
```

### Consentement & Droits
- ✅ **Consentement explicite** pour cookies non-essentiels
- ✅ **Export des données** en un clic
- ✅ **Suppression complète** en un clic
- ✅ **Historique des consentements** tracé

---

## 🔒 CHECKLIST SÉCURITÉ OBLIGATOIRE

### Avant chaque déploiement :
- [ ] Aucun secret en dur dans le code
- [ ] Toutes les routes protégées par authentification
- [ ] Validation côté serveur sur tous les inputs
- [ ] Rate limiting activé
- [ ] Headers de sécurité configurés
- [ ] HTTPS forcé partout
- [ ] Logs de sécurité fonctionnels

### Tests de sécurité :
- [ ] Test d'injection SQL
- [ ] Test XSS sur tous les formulaires
- [ ] Test CSRF sur toutes les actions
- [ ] Test de force brute sur l'auth
- [ ] Test d'upload de fichiers malveillants
- [ ] Audit des dépendances (npm audit)

### Monitoring continu :
- [ ] Alertes sur échecs d'auth répétés
- [ ] Monitoring des erreurs 500
- [ ] Surveillance des temps de réponse
- [ ] Audit des accès admin
- [ ] Vérification des certificats SSL

---

## 🚨 INCIDENT RESPONSE

### Plan d'Action Sécurité
1. **Détection** → Alerte automatique
2. **Isolation** → Blocage immédiat de la menace
3. **Investigation** → Analyse des logs
4. **Correction** → Patch de sécurité
5. **Communication** → Notification utilisateurs si nécessaire
6. **Post-mortem** → Documentation et amélioration

### Contacts d'Urgence
- **Sécurité** : security@avnir.studio
- **Technique** : tech@avnir.studio
- **Légal** : legal@avnir.studio (RGPD)

---

## 🎯 OBJECTIFS SÉCURITÉ

### Court terme (1 mois) :
- ✅ Framework d'authentification sécurisé
- ✅ Validation/sanitisation sur toutes les entrées
- ✅ Rate limiting sur toutes les APIs
- ✅ Monitoring des tentatives d'intrusion

### Moyen terme (3 mois) :
- ✅ Audit de sécurité externe
- ✅ Tests de pénétration
- ✅ Certification ISO 27001 (si nécessaire)
- ✅ Bug bounty program

### Long terme (6 mois) :
- ✅ SOC (Security Operations Center) interne
- ✅ Threat intelligence
- ✅ Automated security testing
- ✅ Zero-trust architecture

---

**RÈGLE ULTIME SÉCURITÉ : "Security by design, not as an afterthought"**

Chaque ligne de code doit être pensée avec la sécurité en tête, pas ajoutée après coup.
