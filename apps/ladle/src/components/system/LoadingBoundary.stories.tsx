import React, { useState, useEffect } from "react";
import { LoadingBoundary } from "./LoadingBoundary";
import { Button } from "../form/Button";

export default { title: "System/LoadingBoundary" };

const AsyncContent = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(["Item 1", "Item 2", "Item 3"]);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingBoundary loading={loading}>
      <div className="bg-[var(--bg)] text-white p-6">
        <h3 className="text-lg font-semibold mb-4">Loaded Content</h3>
        <ul className="space-y-2">
          {data.map((item, index) => (
            <li key={index} className="text-[var(--text-muted)]">{item}</li>
          ))}
        </ul>
      </div>
    </LoadingBoundary>
  );
};

export const Default = () => (
  <div className="bg-[var(--bg)]">
    <AsyncContent />
  </div>
);

export const Manual = () => {
  const [loading, setLoading] = useState(false);
  
  const simulateLoading = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Button onClick={simulateLoading} disabled={loading} className="mb-6">
        {loading ? "Loading..." : "Simulate Loading"}
      </Button>
      
      <LoadingBoundary loading={loading}>
        <div className="bg-[var(--surface)] p-6 rounded-[var(--radius-lg)]">
          <h3 className="text-lg font-semibold mb-2">Content Area</h3>
          <p className="text-[var(--text-muted)]">
            This content is shown when not loading.
          </p>
        </div>
      </LoadingBoundary>
    </div>
  );
};

export const CustomFallback = () => {
  const [loading, setLoading] = useState(false);
  
  const customFallback = (
    <div className="min-h-[200px] flex items-center justify-center bg-[var(--surface)] rounded-[var(--radius-lg)]">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-[var(--brand)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white font-medium">Custom Loading...</p>
        <p className="text-[var(--text-muted)] text-sm">Please wait while we fetch your data</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Button onClick={() => setLoading(!loading)} className="mb-6">
        Toggle Loading
      </Button>
      
      <LoadingBoundary loading={loading} fallback={customFallback}>
        <div className="bg-[var(--surface)] p-6 rounded-[var(--radius-lg)]">
          <h3 className="text-lg font-semibold mb-2">Custom Fallback Example</h3>
          <p className="text-[var(--text-muted)]">
            This uses a custom loading fallback component.
          </p>
        </div>
      </LoadingBoundary>
    </div>
  );
};
