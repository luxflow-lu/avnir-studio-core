import { LogoCloud } from "@avnir/ui";

export function LogoCloudSection() {
  const logos = [
    { alt: "AVNIR Studio", src: "/assets/avnir/logo.svg" },
    { alt: "MuziDev", src: "/assets/muzidev/logo.svg" },
    { alt: "MuziPics", src: "/assets/muzipics/logo.svg" },
    { alt: "MuziWeb", src: "/assets/muziweb/logo.svg" },
    { alt: "MuziMerch", src: "/assets/muzimerch/logo.svg" },
    { alt: "MuziBase", src: "/assets/muzibase/logo.svg" },
    { alt: "MuziManager", src: "/assets/muzimanager/logo.svg" },
    { alt: "Partner Brand", src: "/assets/partner/logo.svg" },
  ];

  return (
    <LogoCloud
      title="Trusted by Leading Brands"
      subtitle="Join the growing community of developers and designers using MUZISYSTEM"
      logos={logos}
      className="py-12 md:py-16 lg:py-24 bg-surface/50"
    />
  );
}
