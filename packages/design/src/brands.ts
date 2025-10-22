export type BrandKey =
  | 'avnir-studio' | 'muzidev' | 'muzipics' | 'muziweb' | 'muzimerch'
  | 'muzibase' | 'muzimanager' | 'muzitools' | 'promozic' | 'paradisebeats' | 'lyrix';

export const brands: Record<BrandKey, { name: string; logo?: string; favicon?: string; }> = {
  'avnir-studio': { name: 'AVNIR-Studio', logo: '/assets/avnir/logo.svg' },
  'muzidev':      { name: 'MUZIDEV',      logo: '/assets/muzidev/logo.svg' },
  'muzipics':     { name: 'MUZIPICS',     logo: '/assets/muzipics/logo.svg' },
  'muziweb':      { name: 'MUZIWEB',      logo: '/assets/muziweb/logo.svg' },
  'muzimerch':    { name: 'MUZIMERCH',    logo: '/assets/muzimerch/logo.svg' },
  'muzibase':     { name: 'MUZIBASE',     logo: '/assets/muzibase/logo.svg' },
  'muzimanager':  { name: 'MUZIMANAGER',  logo: '/assets/muzimanager/logo.svg' },
  'muzitools':    { name: 'MUZITOOLS',    logo: '/assets/muzitools/logo.svg' },
  'promozic':     { name: 'PROMOZIC',     logo: '/assets/promozic/logo.svg' },
  'paradisebeats':{ name: 'Paradise Beats', logo: '/assets/paradisebeats/logo.svg' },
  'lyrix':        { name: 'LYRIX',        logo: '/assets/lyrix/logo.svg' }
};
