# Standards de Données AVNIR - GDPR COMPLIANT

<!-- METADATA -->
<!-- Version: 1.0.0 -->
<!-- Last Updated: 2025-10-24 -->
<!-- Last Validated: 2025-10-24 -->
<!-- Next Review: 2025-11-23 -->
<!-- Dependencies: None -->
<!-- Breaking Changes: None -->
<!-- Status: ACTIVE -->
<!-- /METADATA -->


**Contexte :** Collecte de données utilisateurs. Conformité RGPD obligatoire.

---

## 🚫 INTERDICTIONS ABSOLUES - DONNÉES

### Collecte & Stockage
- ❌ **JAMAIS** de collecte sans consentement explicite
- ❌ **JAMAIS** de données non nécessaires collectées
- ❌ **JAMAIS** de données sensibles non chiffrées
- ❌ **JAMAIS** de logs avec données personnelles
- ❌ **JAMAIS** de partage avec tiers sans consentement

### Analytics & Tracking
- ❌ **JAMAIS** de cookies non-essentiels sans consentement
- ❌ **JAMAIS** de tracking cross-site
- ❌ **JAMAIS** de fingerprinting utilisateur
- ❌ **JAMAIS** d'analytics sans anonymisation IP
- ❌ **JAMAIS** de données analytics en production accessible

---

## ✅ STANDARDS OBLIGATOIRES

### 1. Minimisation des Données (RGPD)
```typescript
// Collecte minimale obligatoire
interface UserData {
  // Données strictement nécessaires
  id: string;
  email: string;          // Pour auth uniquement
  name: string;           // Pour UX uniquement
  createdAt: Date;
  updatedAt: Date;
  
  // Données optionnelles avec consentement
  preferences?: {
    newsletter: boolean;
    analytics: boolean;
    marketing: boolean;
  };
  
  // JAMAIS collecté automatiquement
  // phone?: string;       // Seulement si nécessaire
  // address?: Address;    // Seulement pour e-commerce
  // birthDate?: Date;     // Seulement si légalement requis
}

// Validation de nécessité
const validateDataNecessity = (field: keyof UserData, purpose: string) => {
  const necessaryFields = {
    auth: ['id', 'email', 'name'],
    profile: ['id', 'name', 'preferences'],
    billing: ['id', 'email', 'name'] // + address si e-commerce
  };
  
  if (!necessaryFields[purpose]?.includes(field)) {
    throw new Error(`Field ${field} not necessary for purpose ${purpose}`);
  }
};
```

### 2. Consentement & Cookies (OBLIGATOIRE)
```typescript
// Gestion du consentement RGPD
interface ConsentData {
  userId?: string;
  sessionId: string;
  timestamp: Date;
  consents: {
    necessary: true;        // Toujours true
    analytics: boolean;     // Opt-in requis
    marketing: boolean;     // Opt-in requis
    personalization: boolean; // Opt-in requis
  };
  version: string;          // Version de la politique
  ipHash: string;          // IP hashée pour audit
}

// Cookie banner obligatoire
export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [consents, setConsents] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    personalization: false
  });
  
  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie-consent');
    if (!savedConsent) {
      setShowBanner(true);
    }
  }, []);
  
  const handleAcceptAll = () => {
    const newConsents = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    
    saveConsent(newConsents);
    setShowBanner(false);
  };
  
  const handleAcceptNecessary = () => {
    const newConsents = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    
    saveConsent(newConsents);
    setShowBanner(false);
  };
  
  if (!showBanner) return null;
  
  return (
    <div className="cookie-banner" role="dialog" aria-label="Gestion des cookies">
      <div className="cookie-content">
        <h3>Gestion des cookies</h3>
        <p>
          Nous utilisons des cookies pour améliorer votre expérience. 
          Les cookies nécessaires sont requis pour le fonctionnement du site.
        </p>
        
        <div className="cookie-actions">
          <Button variant="outline" onClick={handleAcceptNecessary}>
            Nécessaires uniquement
          </Button>
          <Button variant="solid" onClick={handleAcceptAll}>
            Accepter tout
          </Button>
          <Button variant="ghost" onClick={() => setShowCustomize(true)}>
            Personnaliser
          </Button>
        </div>
      </div>
    </div>
  );
};
```

### 3. Analytics Privacy-First (OBLIGATOIRE)
```typescript
// Analytics respectueux de la vie privée
interface AnalyticsEvent {
  event: string;
  timestamp: Date;
  sessionId: string;        // Anonyme, pas lié à l'utilisateur
  userId?: string;          // Seulement si consentement analytics
  page: string;
  properties: Record<string, string | number | boolean>;
}

// Configuration analytics
const analyticsConfig = {
  // Anonymisation IP obligatoire
  anonymizeIP: true,
  
  // Pas de cookies cross-site
  cookieless: true,
  
  // Rétention limitée
  dataRetentionDays: 365,
  
  // Pas de données sensibles
  excludeFields: ['email', 'name', 'phone', 'address']
};

// Wrapper analytics sécurisé
class PrivacyAnalytics {
  private hasConsent(): boolean {
    const consent = localStorage.getItem('cookie-consent');
    return consent ? JSON.parse(consent).analytics : false;
  }
  
  track(event: string, properties: Record<string, any> = {}) {
    if (!this.hasConsent()) {
      console.debug('Analytics tracking skipped - no consent');
      return;
    }
    
    // Nettoyer les données sensibles
    const cleanProperties = this.sanitizeProperties(properties);
    
    // Envoyer seulement si consentement
    this.sendEvent({
      event,
      timestamp: new Date(),
      sessionId: this.getSessionId(),
      userId: this.getUserId(), // Seulement si consenti
      page: window.location.pathname,
      properties: cleanProperties
    });
  }
  
  private sanitizeProperties(properties: Record<string, any>): Record<string, any> {
    const sensitiveFields = ['email', 'password', 'token', 'key', 'secret'];
    const clean = { ...properties };
    
    Object.keys(clean).forEach(key => {
      if (sensitiveFields.some(field => key.toLowerCase().includes(field))) {
        delete clean[key];
      }
    });
    
    return clean;
  }
}
```

---

## 🔒 SÉCURITÉ DES DONNÉES

### 1. Chiffrement (OBLIGATOIRE)
```typescript
// Chiffrement des données sensibles
import crypto from 'crypto';

class DataEncryption {
  private static readonly ALGORITHM = 'aes-256-gcm';
  private static readonly KEY_LENGTH = 32;
  
  static encrypt(data: string, key: Buffer): string {
    const iv = crypto.randomBytes(12); // 96-bit IV recommandé en GCM
    const cipher = crypto.createCipheriv(this.ALGORITHM, key, iv);
    const encrypted = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);
    const tag = cipher.getAuthTag();
    return `${iv.toString('hex')}:${tag.toString('hex')}:${encrypted.toString('hex')}`;
  }
  
  static decrypt(encryptedData: string, key: Buffer): string {
    const parts = encryptedData.split(':');
    const iv = Buffer.from(parts[0], 'hex');
    const authTag = Buffer.from(parts[1], 'hex');
    const encrypted = parts[2];
    const decipher = crypto.createDecipheriv(this.ALGORITHM, key, iv);
    decipher.setAuthTag(authTag);
    const decrypted = Buffer.concat([decipher.update(Buffer.from(encrypted, 'hex')), decipher.final()]);
    return decrypted.toString('utf8');
  }
}

// Hachage pour logs (RGPD compliant)
const hashForLogs = (data: string): string => {
  return crypto.createHash('sha256').update(data).digest('hex').substring(0, 16);
};
```

### 2. Anonymisation & Pseudonymisation
```typescript
// Anonymisation des données utilisateur
interface AnonymizedUser {
  id: string;              // UUID anonyme
  hashedEmail: string;     // Hash de l'email
  createdMonth: string;    // Mois de création (pas date exacte)
  region: string;          // Région (pas adresse exacte)
  // Pas de nom, email, ou données identifiantes
}

const anonymizeUser = (user: UserData): AnonymizedUser => {
  return {
    id: crypto.randomUUID(),
    hashedEmail: hashForLogs(user.email),
    createdMonth: user.createdAt.toISOString().substring(0, 7), // YYYY-MM
    region: extractRegion(user.ipAddress) // Si disponible
  };
};

// Suppression complète (droit à l'oubli)
const deleteUserData = async (userId: string) => {
  // 1. Supprimer données personnelles
  await db.user.delete({ where: { id: userId } });
  
  // 2. Anonymiser dans les logs
  await db.log.updateMany({
    where: { userId },
    data: { userId: 'DELETED', userEmail: 'DELETED' }
  });
  
  // 3. Supprimer des services tiers
  await analytics.deleteUser(userId);
  await emailService.unsubscribe(userId);
  
  // 4. Log de la suppression (audit)
  logger.info('User data deleted', {
    userId: hashForLogs(userId),
    timestamp: new Date().toISOString(),
    reason: 'user_request'
  });
};
```

---

## 📊 ANALYTICS RESPECTUEUX

### 1. Métriques Anonymes (OBLIGATOIRES)
```typescript
// Métriques business sans données personnelles
interface BusinessMetrics {
  // Performance
  pageViews: number;
  uniqueVisitors: number;    // Basé sur session, pas utilisateur
  bounceRate: number;
  avgSessionDuration: number;
  
  // Engagement
  buttonClicks: number;
  formSubmissions: number;
  errorRate: number;
  
  // Business
  conversions: number;
  revenue: number;           // Agrégé, pas par utilisateur
  
  // Technique
  loadTime: number;
  errorCount: number;
  
  // Pas de données personnelles
  // email, name, phone, address, etc.
}

// Collecte respectueuse
const trackPageView = (page: string) => {
  if (!hasAnalyticsConsent()) return;
  
  analytics.track('page_view', {
    page: page,
    timestamp: Date.now(),
    sessionId: getAnonymousSessionId(), // Pas lié à l'utilisateur
    referrer: document.referrer ? new URL(document.referrer).hostname : null,
    // Pas d'IP, user agent complet, ou données identifiantes
  });
};
```

### 2. Dashboards Privacy-Safe
```typescript
// Dashboard analytics sans exposition de données personnelles
interface AnalyticsDashboard {
  overview: {
    totalUsers: number;      // Compteur anonyme
    activeUsers: number;     // Sessions actives
    pageViews: number;
    conversionRate: number;
  };
  
  performance: {
    avgLoadTime: number;
    errorRate: number;
    uptime: number;
  };
  
  // Pas d'accès aux données individuelles
  // Pas de liste d'utilisateurs
  // Pas de tracking individuel
}

// API dashboard sécurisée
export async function GET() {
  // Vérifier permissions admin
  const user = await getCurrentUser();
  if (!user?.roles.includes('admin')) {
    return Response.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  // Retourner seulement données agrégées
  const metrics = await getAggregatedMetrics();
  
  return Response.json({
    overview: {
      totalUsers: metrics.userCount,        // Nombre total
      activeUsers: metrics.activeSessions, // Sessions actives
      pageViews: metrics.pageViews,
      conversionRate: metrics.conversionRate
    },
    // Jamais de données individuelles
  });
}
```

---

## 🎯 DROITS UTILISATEURS (RGPD)

### 1. Export des Données
```typescript
// Export RGPD des données utilisateur
export const exportUserData = async (userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId },
    include: {
      profile: true,
      preferences: true,
      orders: true, // Si e-commerce
      // Toutes les données liées
    }
  });
  
  if (!user) {
    throw new Error('User not found');
  }
  
  // Format RGPD standard
  const exportData = {
    personalData: {
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      lastLoginAt: user.lastLoginAt
    },
    preferences: user.preferences,
    activityData: {
      loginHistory: await getLoginHistory(userId),
      // Pas de données sensibles
    },
    exportDate: new Date().toISOString(),
    dataController: 'AVNIR Studio'
  };
  
  return exportData;
};
```

### 2. Interface de Gestion
```typescript
// Interface utilisateur pour gestion des données
export const DataManagement: React.FC = () => {
  return (
    <div className="data-management">
      <h2>Gestion de mes données</h2>
      
      <section>
        <h3>Mes données personnelles</h3>
        <p>Vous pouvez consulter et modifier vos données personnelles.</p>
        <Button onClick={() => navigate('/profile')}>
          Voir mon profil
        </Button>
      </section>
      
      <section>
        <h3>Consentements</h3>
        <p>Gérez vos préférences de cookies et consentements.</p>
        <Button onClick={() => setShowCookieSettings(true)}>
          Gérer les cookies
        </Button>
      </section>
      
      <section>
        <h3>Export de données</h3>
        <p>Téléchargez toutes vos données au format JSON.</p>
        <Button onClick={handleExportData}>
          Exporter mes données
        </Button>
      </section>
      
      <section>
        <h3>Suppression de compte</h3>
        <p>Supprimer définitivement votre compte et toutes vos données.</p>
        <Button variant="outline" onClick={() => setShowDeleteConfirm(true)}>
          Supprimer mon compte
        </Button>
      </section>
    </div>
  );
};
```

---

## 📋 CHECKLIST RGPD

### Avant collecte de données :
- [ ] Consentement explicite obtenu
- [ ] Finalité clairement définie
- [ ] Données minimales nécessaires
- [ ] Durée de conservation définie
- [ ] Sécurité appropriée mise en place

### Droits utilisateurs implémentés :
- [ ] Droit d'accès (export données)
- [ ] Droit de rectification (modification profil)
- [ ] Droit à l'effacement (suppression compte)
- [ ] Droit à la portabilité (export JSON)
- [ ] Droit d'opposition (opt-out)

---

## 🎯 OBJECTIFS DATA

### Court terme (1 mois) :
- ✅ Cookie banner RGPD compliant
- ✅ Analytics anonymisés
- ✅ Chiffrement données sensibles
- ✅ Export/suppression utilisateur

### Moyen terme (3 mois) :
- ✅ Audit RGPD externe
- ✅ Formation équipe protection données
- ✅ Processus de breach notification
- ✅ Privacy by design systématique

### Long terme (6 mois) :
- ✅ Certification ISO 27701
- ✅ Privacy impact assessments
- ✅ Automated compliance monitoring
- ✅ Cross-border data governance

---

**RÈGLE ULTIME DATA : "Privacy by design, not by compliance"**
