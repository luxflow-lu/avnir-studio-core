import { Testimonials } from "@avnir/ui";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "MUZISYSTEM has transformed our development workflow. The consistency and quality of components allowed us to ship features 3x faster while maintaining our design standards.",
      author: "Sarah Chen",
      role: "Lead Frontend Developer",
      company: "TechCorp",
    },
    {
      quote:
        "The accessibility features built into every component saved us months of work. Our WCAG compliance improved dramatically without any extra effort from our team.",
      author: "Marcus Rodriguez",
      role: "Senior UX Engineer",
      company: "AccessFirst",
    },
    {
      quote:
        "The multi-brand theming capability is incredible. We can white-label our product for different clients with just a few CSS variable changes. Game changer!",
      author: "Emily Watson",
      role: "Product Manager",
      company: "SaaS Solutions",
    },
  ];

  return (
    <Testimonials
      title="What Developers Are Saying"
      subtitle="Join thousands of developers who trust MUZISYSTEM for their projects"
      items={testimonials}
      className="py-12 md:py-16 lg:py-24"
    />
  );
}
