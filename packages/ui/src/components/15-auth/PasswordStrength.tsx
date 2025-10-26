import * as React from "react";

import { cx } from "../../utils/cx";

export type PasswordStrengthLevel = "weak" | "medium" | "strong" | "very-strong";

export interface PasswordStrengthProps extends React.HTMLAttributes<HTMLDivElement> {
  password: string;
  showLabel?: boolean;
  showRequirements?: boolean;
  minLength?: number;
}

interface PasswordRequirement {
  label: string;
  test: (password: string) => boolean;
}

export const PasswordStrength = React.forwardRef<HTMLDivElement, PasswordStrengthProps>(
  (
    {
      className,
      password,
      showLabel = true,
      showRequirements = false,
      minLength = 8,
      ...props
    },
    ref,
  ) => {
    const requirements: PasswordRequirement[] = [
      {
        label: `Au moins ${minLength} caractères`,
        test: (pwd) => pwd.length >= minLength,
      },
      {
        label: "Une lettre majuscule",
        test: (pwd) => /[A-Z]/.test(pwd),
      },
      {
        label: "Une lettre minuscule",
        test: (pwd) => /[a-z]/.test(pwd),
      },
      {
        label: "Un chiffre",
        test: (pwd) => /\d/.test(pwd),
      },
      {
        label: "Un caractère spécial",
        test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd),
      },
    ];

    const calculateStrength = (): {
      level: PasswordStrengthLevel;
      score: number;
      percentage: number;
    } => {
      if (!password) {
        return { level: "weak", score: 0, percentage: 0 };
      }

      let score = 0;
      const metRequirements = requirements.filter((req) => req.test(password));
      score = metRequirements.length;

      // Calculate percentage (0-100)
      const percentage = (score / requirements.length) * 100;

      // Determine level
      let level: PasswordStrengthLevel = "weak";
      if (score >= 5) {
        level = "very-strong";
      } else if (score >= 4) {
        level = "strong";
      } else if (score >= 3) {
        level = "medium";
      }

      return { level, score, percentage };
    };

    const { level, score, percentage } = calculateStrength();

    const getLevelLabel = (lvl: PasswordStrengthLevel): string => {
      const labels: Record<PasswordStrengthLevel, string> = {
        weak: "Faible",
        medium: "Moyen",
        strong: "Fort",
        "very-strong": "Très fort",
      };
      return labels[lvl];
    };

    const getLevelColor = (lvl: PasswordStrengthLevel): string => {
      const colors: Record<PasswordStrengthLevel, string> = {
        weak: "password-strength-bar--weak",
        medium: "password-strength-bar--medium",
        strong: "password-strength-bar--strong",
        "very-strong": "password-strength-bar--very-strong",
      };
      return colors[lvl];
    };

    if (!password) {
      return null;
    }

    return (
      <div ref={ref} className={cx("password-strength", className)} {...props}>
        <div className="password-strength-indicator">
          <div className="password-strength-bars">
            {[...Array(requirements.length)].map((_, index) => (
              <div
                key={index}
                className={cx(
                  "password-strength-bar",
                  index < score && getLevelColor(level),
                )}
              />
            ))}
          </div>
          {showLabel && (
            <span className={cx("password-strength-label", `password-strength-label--${level}`)}>
              {getLevelLabel(level)}
            </span>
          )}
        </div>

        {showRequirements && (
          <div className="password-strength-requirements">
            <p className="password-strength-requirements-title">Votre mot de passe doit contenir :</p>
            <ul className="password-strength-requirements-list">
              {requirements.map((req, index) => {
                const isMet = req.test(password);
                return (
                  <li
                    key={index}
                    className={cx(
                      "password-strength-requirement",
                      isMet && "password-strength-requirement--met",
                    )}
                  >
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isMet ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      ) : (
                        <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      )}
                    </svg>
                    <span>{req.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  },
);

PasswordStrength.displayName = "PasswordStrength";
