import * as React from "react";
import { ThemeToggleDemo } from "./components/ThemeToggleDemo";
import { BrandSelector } from "./components/BrandSelector";
import { Home } from "./pages/Home";
import { Components } from "./pages/Components";
import { Tokens } from "./pages/Tokens";
import { Guidelines } from "./pages/Guidelines";
import { Primitives } from "./pages/categories/Primitives";
import { Form } from "./pages/categories/Form";
import { Data } from "./pages/categories/Data";
import { Marketing } from "./pages/categories/Marketing";
import { Ecommerce } from "./pages/categories/Ecommerce";
import { Layout } from "./pages/categories/Layout";
import { Avnir } from "./pages/categories/Avnir";
import { Navigation } from "./pages/categories/Navigation";
import { Overlay } from "./pages/categories/Overlay";
import { Saas } from "./pages/categories/Saas";
import { System } from "./pages/categories/System";

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(() => {
    const hash = window.location.hash.slice(1);
    return hash || 'home';
  });

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'components':
        return <Components />;
      case 'tokens':
        return <Tokens />;
      case 'guidelines':
        return <Guidelines />;
      case 'primitives':
        return <Primitives />;
      case 'form':
        return <Form />;
      case 'data':
        return <Data />;
      case 'marketing':
        return <Marketing />;
      case 'ecommerce':
        return <Ecommerce />;
      case 'layout':
        return <Layout />;
      case 'avnir':
        return <Avnir />;
      case 'navigation':
        return <Navigation />;
      case 'overlay':
        return <Overlay />;
      case 'saas':
        return <Saas />;
      case 'system':
        return <System />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed right-4 top-4 z-50 flex flex-col gap-4">
        <ThemeToggleDemo />
        <BrandSelector />
      </div>
      
      {renderPage()}
    </div>
  );
};
