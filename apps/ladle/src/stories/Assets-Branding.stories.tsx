import React from "react";
import { BrandLogo, ChevronRight, Menu, X } from "@avnir/ui";

export default {
  title: "System/Assets & Branding",
};

export const BrandLogos = () => (
  <div className="p-6 space-y-8">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Brand Logos</h2>
      <p className="text-muted">
        The BrandLogo component automatically adapts to the current brand and theme. It reads from{" "}
        <code>data-brand</code> and <code>data-theme</code> attributes on the document element.
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Full Logo Variants</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <BrandLogo variant="full" size="sm" />
          <BrandLogo variant="full" size="md" />
          <BrandLogo variant="full" size="lg" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Icon Only Variants</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <BrandLogo variant="icon" size="sm" />
          <BrandLogo variant="icon" size="md" />
          <BrandLogo variant="icon" size="lg" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Contrast Options</h3>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="p-4 bg-white rounded">
            <BrandLogo variant="full" contrast="dark" />
          </div>
          <div className="p-4 bg-gray-900 rounded">
            <BrandLogo variant="full" contrast="light" />
          </div>
          <div className="p-4 bg-gray-100 rounded">
            <BrandLogo variant="full" contrast="auto" />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-blue-50 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">💡 Usage Tips</h4>
      <ul className="text-sm space-y-1 text-blue-800">
        <li>
          • Use <code>variant="full"</code> in headers and main navigation
        </li>
        <li>
          • Use <code>variant="icon"</code> for compact spaces like mobile menus
        </li>
        <li>
          • <code>contrast="auto"</code> automatically adapts to light/dark themes
        </li>
        <li>• The logo updates automatically when switching brands via the theme toggle</li>
      </ul>
    </div>
  </div>
);

export const Icons = () => (
  <div className="p-6 space-y-8">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Icon System</h2>
      <p className="text-muted">
        Icons are provided by the <code>@avnir/icons</code> package. All icons are SVG-based React
        components with consistent sizing and styling.
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Available Icons</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-4 border rounded">
            <ChevronRight size={24} />
            <span className="text-xs mt-2">ChevronRight</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded">
            <Menu size={24} />
            <span className="text-xs mt-2">Menu</span>
          </div>
          <div className="flex flex-col items-center p-4 border rounded">
            <X size={24} />
            <span className="text-xs mt-2">X</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Icon Sizes</h3>
        <div className="flex gap-4 items-center">
          <ChevronRight size={16} />
          <ChevronRight size={20} />
          <ChevronRight size={24} />
          <ChevronRight size={32} />
        </div>
      </div>
    </div>

    <div className="bg-green-50 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">📦 When to use @avnir/icons vs app /public</h4>
      <div className="text-sm space-y-2 text-green-800">
        <div>
          <strong>Use @avnir/icons for:</strong>
          <ul className="ml-4 mt-1 space-y-1">
            <li>• UI icons (chevrons, menu, close, etc.)</li>
            <li>• Interactive elements</li>
            <li>• Icons that need to inherit color</li>
            <li>• Icons used across multiple apps</li>
          </ul>
        </div>
        <div>
          <strong>Use app /public for:</strong>
          <ul className="ml-4 mt-1 space-y-1">
            <li>• Large images and photos</li>
            <li>• App-specific illustrations</li>
            <li>• Raster images (PNG, JPG)</li>
            <li>• Images that don't need to be bundled</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const ImageHandling = () => (
  <div className="p-6 space-y-8">
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Image Handling</h2>
      <p className="text-muted">
        Learn how to properly pass images to UI components and when to use different approaches.
      </p>
    </div>

    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Passing Images to Components</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="text-sm">
            {`// Method 1: Pass image src and alt
<Hero 
  title="Welcome"
  image={{ src: "/images/hero.jpg", alt: "Hero image" }}
/>

// Method 2: Pass React node for more control
<Hero 
  title="Welcome"
  image={
    <img 
      src="/images/hero.jpg" 
      alt="Hero image"
      className="rounded-lg"
    />
  }
/>

// Method 3: Use placeholder for development
<Hero 
  title="Welcome"
  image={
    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
      <span>Image Placeholder</span>
    </div>
  }
/>`}
          </pre>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Image Organization</h3>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="text-sm space-y-2 text-yellow-800">
            <div>
              <strong>App Structure:</strong>
              <pre className="mt-1 text-xs bg-yellow-100 p-2 rounded">
                {`apps/muzisystem/
├── public/
│   ├── images/          # App-specific images
│   │   ├── hero.jpg
│   │   └── features/
│   └── logos/           # App-specific logos
└── brand.config.ts      # Image path configuration`}
              </pre>
            </div>
            <div>
              <strong>Shared Assets:</strong>
              <pre className="mt-1 text-xs bg-yellow-100 p-2 rounded">
                {`packages/brandkit/
├── src/brands/          # Brand logos (SVG)
├── src/social/          # OG images
└── src/favicons/        # Favicon sets`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
