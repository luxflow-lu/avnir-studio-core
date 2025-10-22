import { Section } from '@avnir/ui';

export default function FoundationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Section>
        <h1 className="text-4xl font-bold text-titles mb-8">Foundations</h1>
        <p className="text-lg text-muted mb-12">
          Les fondations du design system : typographie, espacement, rayons, ombres, z-index, motion et focus ring.
        </p>

        {/* Typography */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Typography</h2>
          <div className="space-y-4">
            <div className="p-4 bg-surface rounded-lg">
              <h1 className="h1 mb-2">Heading 1 - h1</h1>
              <code className="text-sm text-muted">className="h1"</code>
            </div>
            <div className="p-4 bg-surface rounded-lg">
              <h2 className="h2 mb-2">Heading 2 - h2</h2>
              <code className="text-sm text-muted">className="h2"</code>
            </div>
            <div className="p-4 bg-surface rounded-lg">
              <h3 className="h3 mb-2">Heading 3 - h3</h3>
              <code className="text-sm text-muted">className="h3"</code>
            </div>
            <div className="p-4 bg-surface rounded-lg">
              <p className="text-base mb-2">Body text - Regular</p>
              <code className="text-sm text-muted">className="text-base"</code>
            </div>
            <div className="p-4 bg-surface rounded-lg">
              <p className="text-sm text-muted mb-2">Small text - Muted</p>
              <code className="text-sm text-muted">className="text-sm text-muted"</code>
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Spacing</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 4, 6, 8, 12, 16, 24].map((size) => (
              <div key={size} className="text-center">
                <div className={`bg-primary h-${size} w-full rounded mb-2`}></div>
                <code className="text-sm">h-{size}</code>
                <div className="text-xs text-muted">{size * 4}px</div>
              </div>
            ))}
          </div>
        </div>

        {/* Border Radius */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Border Radius</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full'].map((radius) => (
              <div key={radius} className="text-center">
                <div className={`bg-primary h-16 w-16 mx-auto mb-2 rounded-${radius}`}></div>
                <code className="text-sm">rounded-{radius}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Shadows */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Shadows</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['sm', 'md', 'lg', 'xl', '2xl'].map((shadow) => (
              <div key={shadow} className="text-center">
                <div className={`bg-surface h-20 w-20 mx-auto mb-2 rounded-lg shadow-${shadow}`}></div>
                <code className="text-sm">shadow-{shadow}</code>
              </div>
            ))}
          </div>
        </div>

        {/* Z-Index */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Z-Index</h2>
          <div className="relative h-32 bg-surface rounded-lg overflow-hidden">
            <div className="absolute inset-4 bg-primary/20 rounded z-10 flex items-center justify-center">
              <code>z-10</code>
            </div>
            <div className="absolute inset-8 bg-primary/40 rounded z-20 flex items-center justify-center">
              <code>z-20</code>
            </div>
            <div className="absolute inset-12 bg-primary/60 rounded z-30 flex items-center justify-center">
              <code>z-30</code>
            </div>
          </div>
        </div>

        {/* Focus Ring */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Focus Ring</h2>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-primary text-bg rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg">
              Button with focus ring
            </button>
            <input 
              type="text" 
              placeholder="Input with focus ring"
              className="px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Motion */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-titles mb-6">Motion</h2>
          <div className="space-y-4">
            <div className="p-4 bg-surface rounded-lg">
              <div className="w-16 h-16 bg-primary rounded transition-transform duration-300 hover:scale-110 cursor-pointer"></div>
              <code className="text-sm text-muted">transition-transform duration-300 hover:scale-110</code>
            </div>
            <div className="p-4 bg-surface rounded-lg">
              <div className="w-16 h-16 bg-primary rounded transition-colors duration-200 hover:bg-primary/80 cursor-pointer"></div>
              <code className="text-sm text-muted">transition-colors duration-200 hover:bg-primary/80</code>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
