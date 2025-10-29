import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
import { Input } from "../02-form/Input";

export interface RegisterFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit: (data: { name: string; email: string; password: string }) => void | Promise<void>;
  onSignIn?: () => void;
  loading?: boolean;
  error?: string;
  showSocialRegister?: boolean;
  socialProviders?: Array<{
    id: string;
    name: string;
    icon: React.ReactNode;
    onClick: () => void;
  }>;
  requireTerms?: boolean;
  termsUrl?: string;
  privacyUrl?: string;
}

export const RegisterForm = React.forwardRef<HTMLFormElement, RegisterFormProps>(
  (
    {
      className,
      onSubmit,
      onSignIn,
      loading = false,
      error,
      showSocialRegister = false,
      socialProviders = [],
      requireTerms = true,
      termsUrl = "/terms",
      privacyUrl = "/privacy",
      ...props
    },
    ref,
  ) => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [acceptTerms, setAcceptTerms] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState("");

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      // Validation
      if (password !== confirmPassword) {
        setPasswordError("Les mots de passe ne correspondent pas");
        return;
      }
      
      if (password.length < 8) {
        setPasswordError("Le mot de passe doit contenir au moins 8 caractères");
        return;
      }
      
      if (requireTerms && !acceptTerms) {
        return;
      }
      
      setPasswordError("");
      await onSubmit({ name, email, password });
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cx("register-form", className)}
        {...props}
      >
        <div className="register-form-header">
          <h2 className="register-form-title">Créer un compte</h2>
          <p className="register-form-subtitle">Commencez gratuitement</p>
        </div>

        {error && (
          <div className="register-form-error">
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {showSocialRegister && socialProviders.length > 0 && (
          <>
            <div className="register-form-social">
              {socialProviders.map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  onClick={provider.onClick}
                  className="register-form-social-btn"
                  disabled={loading}
                >
                  {provider.icon}
                  <span>Continuer avec {provider.name}</span>
                </button>
              ))}
            </div>

            <div className="register-form-divider">
              <span>ou</span>
            </div>
          </>
        )}

        <div className="register-form-fields">
          <div className="register-form-field">
            <label htmlFor="name" className="register-form-label">
              Nom complet
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
              disabled={loading}
              autoComplete="name"
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="email" className="register-form-label">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vous@exemple.com"
              required
              disabled={loading}
              autoComplete="email"
            />
          </div>

          <div className="register-form-field">
            <label htmlFor="password" className="register-form-label">
              Mot de passe
            </label>
            <div className="register-form-password">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={loading}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="register-form-password-toggle"
                disabled={loading}
                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showPassword ? (
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {password && (
              <div className="register-form-password-strength">
                <div className="register-form-password-strength-bar">
                  <div
                    className={cx(
                      "register-form-password-strength-fill",
                      password.length < 8 && "register-form-password-strength-fill--weak",
                      password.length >= 8 && password.length < 12 && "register-form-password-strength-fill--medium",
                      password.length >= 12 && "register-form-password-strength-fill--strong",
                    )}
                    style={{
                      width: `${Math.min((password.length / 12) * 100, 100)}%`,
                    }}
                  />
                </div>
                <span className="register-form-password-strength-text">
                  {password.length < 8 && "Faible"}
                  {password.length >= 8 && password.length < 12 && "Moyen"}
                  {password.length >= 12 && "Fort"}
                </span>
              </div>
            )}
          </div>

          <div className="register-form-field">
            <label htmlFor="confirmPassword" className="register-form-label">
              Confirmer le mot de passe
            </label>
            <div className="register-form-password">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={loading}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="register-form-password-toggle"
                disabled={loading}
                aria-label={showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
              >
                {showConfirmPassword ? (
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {passwordError && (
              <span className="register-form-field-error">{passwordError}</span>
            )}
          </div>

          {requireTerms && (
            <div className="register-form-terms">
              <label className="register-form-checkbox">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  disabled={loading}
                  required
                />
                <span>
                  J&apos;accepte les{" "}
                  <a href={termsUrl} target="_blank" rel="noopener noreferrer" className="register-form-link">
                    conditions d&apos;utilisation
                  </a>{" "}
                  et la{" "}
                  <a href={privacyUrl} target="_blank" rel="noopener noreferrer" className="register-form-link">
                    politique de confidentialité
                  </a>
                </span>
              </label>
            </div>
          )}
        </div>

        <Button
          type="submit"
          variant="solid"
          disabled={loading || !name || !email || !password || !confirmPassword || (requireTerms && !acceptTerms)}
          className="register-form-submit"
        >
          {loading ? (
            <>
              <svg className="icon animate-spin" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Création...</span>
            </>
          ) : (
            "Créer mon compte"
          )}
        </Button>

        {onSignIn && (
          <div className="register-form-footer">
            <span className="register-form-footer-text">Vous avez déjà un compte ?</span>
            <button
              type="button"
              onClick={onSignIn}
              className="register-form-link"
              disabled={loading}
            >
              Se connecter
            </button>
          </div>
        )}
      </form>
    );
  },
);

RegisterForm.displayName = "RegisterForm";
