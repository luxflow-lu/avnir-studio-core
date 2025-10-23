import * as React from "react";
import { cx } from "../../utils/cx";

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

const DefaultErrorFallback = ({ error, resetError }: { error: Error; resetError: () => void }) => (
  <div className="min-h-[400px] flex items-center justify-center bg-[var(--bg)]">
    <div className="text-center max-w-md mx-auto p-6">
      <div className="w-16 h-16 mx-auto mb-4 text-red-400">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-white mb-2">Something went wrong</h2>
      <p className="text-[var(--text-muted)] mb-4">
        An unexpected error occurred. Please try again.
      </p>
      <details className="text-left mb-4">
        <summary className="cursor-pointer text-sm text-[var(--text-muted)] hover:text-white">
          Error details
        </summary>
        <pre className="mt-2 text-xs bg-[var(--surface)] p-3 rounded overflow-auto text-red-400">
          {error.message}
        </pre>
      </details>
      <button
        onClick={resetError}
        className="px-4 py-2 bg-[var(--brand)] text-[var(--brand-on)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </div>
  </div>
);

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  override render() {
    if (this.state.hasError && this.state.error) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

(ErrorBoundary as any).displayName = "ErrorBoundary";
