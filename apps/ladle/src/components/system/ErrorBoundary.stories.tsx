import React, { useState } from "react";

import { Button } from "../form/Button";

import { ErrorBoundary } from "./ErrorBoundary";

export default { title: "System/ErrorBoundary" };

const BuggyComponent = ({ shouldError }: { shouldError: boolean }) => {
  if (shouldError) {
    throw new Error("This is a test error from BuggyComponent");
  }
  return <div className="text-white">Component working normally</div>;
};

export const Default = () => {
  const [shouldError, setShouldError] = useState(false);

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="mb-4">
        <Button onClick={() => setShouldError(!shouldError)}>
          {shouldError ? "Fix Component" : "Break Component"}
        </Button>
      </div>

      <ErrorBoundary onError={(error) => console.error("Caught error:", error)}>
        <BuggyComponent shouldError={shouldError} />
      </ErrorBoundary>
    </div>
  );
};

export const CustomFallback = () => {
  const [shouldError, setShouldError] = useState(false);

  const CustomErrorFallback = ({ error, resetError }: { error: Error; resetError: () => void }) => (
    <div className="bg-red-500/10 border border-red-500/20 rounded-[var(--radius-lg)] p-6 text-center">
      <h3 className="text-red-400 font-semibold mb-2">Custom Error Handler</h3>
      <p className="text-[var(--text-muted)] mb-4">Error: {error.message}</p>
      <Button onClick={resetError} variant="outline">
        Reset
      </Button>
    </div>
  );

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="mb-4">
        <Button onClick={() => setShouldError(!shouldError)}>
          {shouldError ? "Fix Component" : "Break Component"}
        </Button>
      </div>

      <ErrorBoundary fallback={CustomErrorFallback}>
        <BuggyComponent shouldError={shouldError} />
      </ErrorBoundary>
    </div>
  );
};
