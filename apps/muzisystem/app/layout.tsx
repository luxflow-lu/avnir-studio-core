import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '../components/Navigation';

export const metadata: Metadata = {
  title: 'MUZISYSTEM - Design System Showcase',
  description: 'Comprehensive design system documentation and component showcase'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-brand="avnir" data-theme="dark">
      <body className="min-h-screen bg-bg text-text">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
