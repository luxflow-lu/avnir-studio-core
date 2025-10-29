import { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://muzisystem.avnir.studio';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Homepage
    '',
    
    // Overview
    '/overview',
    '/overview/intro',
    '/overview/architecture',
    '/overview/principles',
    
    // Foundations
    '/foundations',
    '/foundations/colors',
    '/foundations/typography',
    '/foundations/tokens',
    '/foundations/spacing',
    '/foundations/shadows',
    '/foundations/breakpoints',
    
    // Guidelines
    '/guidelines',
    '/guidelines/accessibility',
    '/guidelines/responsive',
    '/guidelines/writing',
    
    // Patterns
    '/patterns',
    '/patterns/authentication',
    '/patterns/upload',
    
    // Components
    '/components',
    '/components/primitives',
    '/components/form',
    '/components/data-display',
    '/components/feedback',
    '/components/navigation',
    '/components/overlay',
    '/components/layout',
    '/components/content',
    '/components/marketing',
    '/components/ecommerce',
    '/components/saas',
    '/components/system',
    '/components/ai',
    '/components/media',
    '/components/auth',
    
    // Legal
    '/legal/privacy',
    '/legal/terms',
    '/legal/licenses',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/components') ? 0.8 : 0.7,
  }));
}
