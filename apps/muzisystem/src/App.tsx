import * as React from "react";
import { ThemeBrandSwitcher } from "./components/ThemeBrandSwitcher";
import { Home } from "./pages/Home";
import { Components } from "./pages/Components";
import { Foundations } from "./pages/Foundations";
import { Colors } from "./pages/Colors";
import { Tokens } from "./pages/Tokens";
import { Guidelines } from "./pages/Guidelines";
import { Usage } from "./pages/Usage";
import { LayoutShowcase } from "./pages/LayoutShowcase";
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
      case 'foundations':
        return <Foundations />;
      case 'colors':
        return <Colors />;
      case 'components':
        return <Components />;
      case 'tokens':
        return <Tokens />;
      case 'guidelines':
        return <Guidelines />;
      case 'usage':
        return <Usage />;
      case 'layout-showcase':
        return <LayoutShowcase />;
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
      <ThemeBrandSwitcher />
      {renderPage()}
    </div>
  );
};
