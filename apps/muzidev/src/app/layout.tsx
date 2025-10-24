import React from "react";
import "@avnir/design/themes.css";
import "@avnir/ui/styles.css";
import Providers from "./providers";

export const metadata = {
  title: "MUZIDEV | La formation en ligne des artistes & producteurs",
  description: "Formation complète pour artistes et producteurs indépendants : de la création à la monétisation.",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
