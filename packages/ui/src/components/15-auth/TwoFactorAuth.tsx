import * as React from "react";

import { cx } from "../../utils/cx";
import { Button } from "../02-form/Button";

import { OTPInput } from "./OTPInput";

export type TwoFactorMethod = "app" | "sms" | "email";

export interface TwoFactorAuthProps extends React.HTMLAttributes<HTMLDivElement> {
  method?: TwoFactorMethod;
  onVerify: (code: string) => void | Promise<void>;
  onResend?: () => void | Promise<void>;
  onChangeMethod?: (method: TwoFactorMethod) => void;
  loading?: boolean;
  error?: string;
  phoneNumber?: string;
  email?: string;
  showMethodSelector?: boolean;
  resendCooldown?: number;
}

export const TwoFactorAuth = React.forwardRef<HTMLDivElement, TwoFactorAuthProps>(
  (
    {
      className,
      method = "app",
      onVerify,
      onResend,
      onChangeMethod,
      loading = false,
      error,
      phoneNumber,
      email,
      showMethodSelector = true,
      resendCooldown = 60,
      ...props
    },
    ref,
  ) => {
    const [code, setCode] = React.useState("");
    const [resendTimer, setResendTimer] = React.useState(0);
    const [isVerifying, setIsVerifying] = React.useState(false);

    React.useEffect(() => {
      if (resendTimer > 0) {
        const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
        return () => clearTimeout(timer);
      }
    }, [resendTimer]);

    const handleVerify = async (verificationCode: string) => {
      setIsVerifying(true);
      try {
        await onVerify(verificationCode);
      } finally {
        setIsVerifying(false);
      }
    };

    const handleResend = async () => {
      if (resendTimer > 0 || !onResend) return;
      
      await onResend();
      setResendTimer(resendCooldown);
      setCode("");
    };

    const getMethodInfo = () => {
      const info = {
        app: {
          icon: (
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          ),
          title: "Application d'authentification",
          description: "Entrez le code à 6 chiffres de votre application d'authentification",
        },
        sms: {
          icon: (
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          ),
          title: "SMS",
          description: phoneNumber
            ? `Code envoyé au ${phoneNumber}`
            : "Code envoyé par SMS",
        },
        email: {
          icon: (
            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          ),
          title: "Email",
          description: email ? `Code envoyé à ${email}` : "Code envoyé par email",
        },
      };
      return info[method];
    };

    const methodInfo = getMethodInfo();

    return (
      <div ref={ref} className={cx("two-factor-auth", className)} {...props}>
        <div className="two-factor-auth-header">
          <div className="two-factor-auth-icon">{methodInfo.icon}</div>
          <h2 className="two-factor-auth-title">{methodInfo.title}</h2>
          <p className="two-factor-auth-description">{methodInfo.description}</p>
        </div>

        {error && (
          <div className="two-factor-auth-error">
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

        <div className="two-factor-auth-input">
          <OTPInput
            length={6}
            value={code}
            onChange={setCode}
            onComplete={handleVerify}
            disabled={loading || isVerifying}
            error={!!error}
            autoFocus
          />
        </div>

        {onResend && (
          <div className="two-factor-auth-resend">
            {resendTimer > 0 ? (
              <span className="two-factor-auth-resend-timer">
                Renvoyer le code dans {resendTimer}s
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="two-factor-auth-resend-btn"
                disabled={loading || isVerifying}
              >
                Renvoyer le code
              </button>
            )}
          </div>
        )}

        {showMethodSelector && onChangeMethod && (
          <div className="two-factor-auth-methods">
            <p className="two-factor-auth-methods-title">Autres méthodes :</p>
            <div className="two-factor-auth-methods-list">
              {method !== "app" && (
                <button
                  type="button"
                  onClick={() => onChangeMethod("app")}
                  className="two-factor-auth-method-btn"
                  disabled={loading || isVerifying}
                >
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Application</span>
                </button>
              )}
              {method !== "sms" && phoneNumber && (
                <button
                  type="button"
                  onClick={() => onChangeMethod("sms")}
                  className="two-factor-auth-method-btn"
                  disabled={loading || isVerifying}
                >
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <span>SMS</span>
                </button>
              )}
              {method !== "email" && email && (
                <button
                  type="button"
                  onClick={() => onChangeMethod("email")}
                  className="two-factor-auth-method-btn"
                  disabled={loading || isVerifying}
                >
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email</span>
                </button>
              )}
            </div>
          </div>
        )}

        {(loading || isVerifying) && (
          <div className="two-factor-auth-loading">
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
            <span>Vérification...</span>
          </div>
        )}
      </div>
    );
  },
);

TwoFactorAuth.displayName = "TwoFactorAuth";
