import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";
import { Input } from "../02-form/Input";

export interface LoginFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
  onSubmit: (data: { email: string; password: string }) => void | Promise<void>;
  onForgotPassword?: () => void;
  onSignUp?: () => void;
  loading?: boolean;
  error?: string;
  showRememberMe?: boolean;
  showSocialLogin?: boolean;
  socialProviders?: Array<{
    id: string;
    name: string;
    icon: React.ReactNode;
    onClick: () => void;
  }>;
}

export const LoginForm = React.forwardRef<HTMLFormElement, LoginFormProps>(
  (
    {
      className,
      onSubmit,
      onForgotPassword,
      onSignUp,
      loading = false,
      error,
      showRememberMe = true,
      showSocialLogin = false,
      socialProviders = [],
      ...props
    },
    ref,
  ) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rememberMe, setRememberMe] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      await onSubmit({ email, password });
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={cx("login-form", className)}
        {...props}
      >
        <div className="login-form-header">
          <h2 className="login-form-title">Se connecter</h2>
          <p className="login-form-subtitle">Accédez à votre compte</p>
        </div>

        {error && (
          <div className="login-form-error">
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

        {showSocialLogin && socialProviders.length > 0 && (
          <>
            <div className="login-form-social">
              {socialProviders.map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  onClick={provider.onClick}
                  className="login-form-social-btn"
                  disabled={loading}
                >
                  {provider.icon}
                  <span>Continuer avec {provider.name}</span>
                </button>
              ))}
            </div>

            <div className="login-form-divider">
              <span>ou</span>
            </div>
          </>
        )}

        <div className="login-form-fields">
          <div className="login-form-field">
            <label htmlFor="email" className="login-form-label">
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

          <div className="login-form-field">
            <div className="login-form-label-row">
              <label htmlFor="password" className="login-form-label">
                Mot de passe
              </label>
              {onForgotPassword && (
                <button
                  type="button"
                  onClick={onForgotPassword}
                  className="login-form-link"
                  disabled={loading}
                >
                  Mot de passe oublié ?
                </button>
              )}
            </div>
            <div className="login-form-password">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={loading}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="login-form-password-toggle"
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
          </div>

          {showRememberMe && (
            <div className="login-form-remember">
              <label className="login-form-checkbox">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={loading}
                />
                <span>Se souvenir de moi</span>
              </label>
            </div>
          )}
        </div>

        <Button
          type="submit"
          variant="solid"
          disabled={loading || !email || !password}
          className="login-form-submit"
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
              <span>Connexion...</span>
            </>
          ) : (
            "Se connecter"
          )}
        </Button>

        {onSignUp && (
          <div className="login-form-footer">
            <span className="login-form-footer-text">Pas encore de compte ?</span>
            <button
              type="button"
              onClick={onSignUp}
              className="login-form-link"
              disabled={loading}
            >
              S&apos;inscrire
            </button>
          </div>
        )}
      </form>
    );
  },
);

LoginForm.displayName = "LoginForm";
