import React from "react";
import { ToastProvider, useToast } from "./Toast";
import { Button } from "../form/Button";

export default { title: "Overlay/Toast" };

const ToastDemo = () => {
  const { addToast } = useToast();

  return (
    <div className="bg-[var(--bg)] text-white p-6 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Toast Examples</h3>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() =>
            addToast({
              title: "Success!",
              description: "Your changes have been saved.",
              variant: "success",
            })
          }
        >
          Success Toast
        </Button>

        <Button
          onClick={() =>
            addToast({
              title: "Warning",
              description: "Please check your input.",
              variant: "warning",
            })
          }
        >
          Warning Toast
        </Button>

        <Button
          onClick={() =>
            addToast({
              title: "Error",
              description: "Something went wrong.",
              variant: "destructive",
            })
          }
        >
          Error Toast
        </Button>

        <Button
          onClick={() =>
            addToast({
              title: "Info",
              description: "This is an informational message.",
              variant: "default",
            })
          }
        >
          Default Toast
        </Button>
      </div>

      <div className="pt-4 border-t border-white/10">
        <Button
          onClick={() =>
            addToast({
              title: "Persistent Toast",
              description: "This toast won't auto-dismiss.",
              duration: 0,
            })
          }
          variant="outline"
        >
          Persistent Toast
        </Button>
      </div>
    </div>
  );
};

export const Default = () => (
  <ToastProvider>
    <ToastDemo />
  </ToastProvider>
);
