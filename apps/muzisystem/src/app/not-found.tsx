"use client";
import { System } from "@avnir/ui";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <System.NotFound404
      title="Page non trouvée"
      description="Désolé, la page que vous recherchez n'existe pas ou a été déplacée."
      onHomeClick={() => router.push("/")}
    />
  );
}
