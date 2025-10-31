"use client";
import { System } from "@avnir/ui";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <System.ServerError500
      title="Une erreur est survenue"
      description="Désolé, quelque chose s'est mal passé. Nous travaillons à résoudre le problème."
      onRetry={reset}
    />
  );
}
