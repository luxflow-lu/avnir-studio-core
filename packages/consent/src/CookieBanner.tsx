/**
 * Cookie Consent Banner
 * RGPD compliant cookie consent
 */

"use client";

import { useState, useEffect } from "react";
import { ConsentPreferences } from "./types";
import { getConsent, saveConsent, hasConsent } from "./storage";

interface CookieBannerProps {
  onAccept?: (preferences: ConsentPreferences) => void;
  onDecline?: () => void;
}

export function CookieBanner({ onAccept, onDecline }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already given consent
    if (!hasConsent()) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    saveConsent(allAccepted);
    setIsVisible(false);
    onAccept?.(allAccepted);
  };

  const handleDeclineAll = () => {
    const onlyNecessary: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    saveConsent(onlyNecessary);
    setIsVisible(false);
    onDecline?.();
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setIsVisible(false);
    onAccept?.(preferences);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <div className="cookie-banner-text">
          <h3 className="cookie-banner-title">🍪 Nous utilisons des cookies</h3>
          <p className="cookie-banner-description">
            Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic et personnaliser le contenu.
            {!showDetails && (
              <button
                onClick={() => setShowDetails(true)}
                className="cookie-banner-link"
              >
                En savoir plus
              </button>
            )}
          </p>
        </div>

        {showDetails && (
          <div className="cookie-preferences">
            <div className="cookie-preference-item">
              <label className="cookie-preference-label">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="cookie-preference-checkbox"
                />
                <div>
                  <strong>Nécessaires</strong>
                  <p className="cookie-preference-description">
                    Requis pour le fonctionnement du site
                  </p>
                </div>
              </label>
            </div>

            <div className="cookie-preference-item">
              <label className="cookie-preference-label">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences({ ...preferences, analytics: e.target.checked })
                  }
                  className="cookie-preference-checkbox"
                />
                <div>
                  <strong>Analytiques</strong>
                  <p className="cookie-preference-description">
                    Nous aident à comprendre comment vous utilisez le site
                  </p>
                </div>
              </label>
            </div>

            <div className="cookie-preference-item">
              <label className="cookie-preference-label">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="cookie-preference-checkbox"
                />
                <div>
                  <strong>Marketing</strong>
                  <p className="cookie-preference-description">
                    Utilisés pour afficher des publicités pertinentes
                  </p>
                </div>
              </label>
            </div>

            <div className="cookie-preference-item">
              <label className="cookie-preference-label">
                <input
                  type="checkbox"
                  checked={preferences.preferences}
                  onChange={(e) =>
                    setPreferences({ ...preferences, preferences: e.target.checked })
                  }
                  className="cookie-preference-checkbox"
                />
                <div>
                  <strong>Préférences</strong>
                  <p className="cookie-preference-description">
                    Mémorisent vos choix et préférences
                  </p>
                </div>
              </label>
            </div>
          </div>
        )}

        <div className="cookie-banner-actions">
          {showDetails ? (
            <>
              <button onClick={handleSavePreferences} className="cookie-btn cookie-btn-primary">
                Enregistrer mes choix
              </button>
              <button onClick={() => setShowDetails(false)} className="cookie-btn cookie-btn-secondary">
                Retour
              </button>
            </>
          ) : (
            <>
              <button onClick={handleAcceptAll} className="cookie-btn cookie-btn-primary">
                Tout accepter
              </button>
              <button onClick={handleDeclineAll} className="cookie-btn cookie-btn-secondary">
                Refuser
              </button>
              <button onClick={() => setShowDetails(true)} className="cookie-btn cookie-btn-ghost">
                Personnaliser
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
