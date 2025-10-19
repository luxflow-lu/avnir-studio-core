import * as React from "react";
import { ThemeToggleDemo } from "./components/ThemeToggleDemo";
import { Home } from "./pages/Home";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggleDemo />
      </div>
      <Home />
    </div>
  );
};
