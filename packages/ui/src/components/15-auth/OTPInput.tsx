import * as React from "react";

import { cx } from "../../utils/cx";

export interface OTPInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  autoFocus?: boolean;
}

export const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>(
  (
    {
      className,
      length = 6,
      value = "",
      onChange,
      onComplete,
      disabled = false,
      error = false,
      autoFocus = false,
      ...props
    },
    ref,
  ) => {
    const [otp, setOtp] = React.useState<string[]>(Array(length).fill(""));
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    // Sync with external value
    React.useEffect(() => {
      if (value !== undefined) {
        const newOtp = value.split("").slice(0, length);
        while (newOtp.length < length) {
          newOtp.push("");
        }
        setOtp(newOtp);
      }
    }, [value, length]);

    const handleChange = (index: number, digit: string) => {
      // Only allow numbers
      if (digit && !/^\d$/.test(digit)) {
        return;
      }

      const newOtp = [...otp];
      newOtp[index] = digit;
      setOtp(newOtp);

      const otpString = newOtp.join("");
      onChange?.(otpString);

      // Auto-focus next input
      if (digit && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Call onComplete when all digits are filled
      if (otpString.length === length && !otpString.includes("")) {
        onComplete?.(otpString);
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Backspace") {
        if (!otp[index] && index > 0) {
          // Move to previous input if current is empty
          inputRefs.current[index - 1]?.focus();
        } else {
          // Clear current input
          const newOtp = [...otp];
          newOtp[index] = "";
          setOtp(newOtp);
          onChange?.(newOtp.join(""));
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
      e.preventDefault();
      const pastedData = e.clipboardData.getData("text/plain").replace(/\D/g, "").slice(0, length);
      
      const newOtp = Array(length).fill("");
      pastedData.split("").forEach((digit, index) => {
        if (index < length) {
          newOtp[index] = digit;
        }
      });
      
      setOtp(newOtp);
      onChange?.(newOtp.join(""));

      // Focus last filled input or first empty
      const lastFilledIndex = pastedData.length - 1;
      if (lastFilledIndex >= 0 && lastFilledIndex < length) {
        inputRefs.current[Math.min(lastFilledIndex + 1, length - 1)]?.focus();
      }

      // Call onComplete if all digits are filled
      if (pastedData.length === length) {
        onComplete?.(pastedData);
      }
    };

    const handleFocus = (index: number) => {
      // Select the content on focus for easier replacement
      inputRefs.current[index]?.select();
    };

    return (
      <div
        ref={ref}
        className={cx("otp-input", error && "otp-input--error", className)}
        {...props}
      >
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={() => handleFocus(index)}
            disabled={disabled}
            autoFocus={autoFocus && index === 0}
            className={cx(
              "otp-input-digit",
              digit && "otp-input-digit--filled",
              error && "otp-input-digit--error",
            )}
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>
    );
  },
);

OTPInput.displayName = "OTPInput";
