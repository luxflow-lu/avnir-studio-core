import './globals.css';
import '@avnir/tokens/dist/themes.css';
import { Navbar, Footer } from '@avnir/ui';

export const metadata = { title: 'MUZIDEV' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-brand="muzidev">
      <body className="bg-bg">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
