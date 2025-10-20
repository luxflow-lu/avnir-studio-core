/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg))",
        foreground: "rgb(var(--on-bg))",
        surface: "rgb(var(--surface))",
        "on-surface": "rgb(var(--on-surface))",
        card: "rgb(var(--surface))",
        "card-foreground": "rgb(var(--on-surface))",
        popover: "rgb(var(--surface))",
        "popover-foreground": "rgb(var(--on-surface))",
        primary: "rgb(var(--primary))",
        "primary-foreground": "rgb(var(--on-primary))",
        "on-primary": "rgb(var(--on-primary))",
        secondary: "rgb(var(--surface))",
        "secondary-foreground": "rgb(var(--on-surface))",
        muted: "rgb(var(--neutral-2))",
        "muted-foreground": "rgb(var(--on-bg))",
        accent: "rgb(var(--surface))",
        "accent-foreground": "rgb(var(--on-surface))",
        destructive: "hsl(0 84.2% 60.2%)",
        "destructive-foreground": "hsl(210 40% 98%)",
        border: "rgb(var(--border))",
        input: "rgb(var(--border))",
        ring: "rgb(var(--primary))",
        
        // Neutrals
        "neutral-1": "rgb(var(--neutral-1))",
        "neutral-2": "rgb(var(--neutral-2))",
        "neutral-3": "rgb(var(--neutral-3))",
        
        // Accents
        "accent-blue": "var(--accent-blue)",
        "accent-green": "var(--accent-green)",
        "accent-orange": "var(--accent-orange)",
        "accent-purple": "var(--accent-purple)",
        "accent-yellow": "var(--accent-yellow)",
        
        // Badges
        "badge-artist": "var(--badge-artist)",
        "badge-studio": "var(--badge-studio)",
        "badge-beatmaker": "var(--badge-beatmaker)",
        "badge-draft": "var(--badge-draft)",
        "badge-producer": "var(--badge-producer)",
        "badge-archived": "var(--badge-archived)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      borderColor: { 
        DEFAULT: "rgb(var(--border))" 
      }
    },
  },
};
