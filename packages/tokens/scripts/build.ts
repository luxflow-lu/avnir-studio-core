import fs from "node:fs";
import path from "node:path";

// Resolve relative to the package directory (this script runs with cwd = packages/tokens)
const tokensPath = path.resolve("src/tokens.json");
const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf-8"));

const base = tokens.base;
const brands = tokens.brand;

const css = `
:root{
  --bg-dark:${base.bgDark};
  --bg-light:${base.bgLight};
  --bg:var(--bg-dark);
  --surface:${base.surface};
  --text-muted:${base.textMuted};

  --radius-xs:${base.radius.xs};
  --radius-sm:${base.radius.sm};
  --radius-md:${base.radius.md};
  --radius-lg:${base.radius.lg};
  --radius-xl:${base.radius.xl};
  --radius-full:${base.radius.full};

  --shadow-sm:${base.shadow.sm};
  --shadow-md:${base.shadow.md};
  --shadow-lg:${base.shadow.lg};
}

:root[data-brand="avnir"]{--brand:${brands.avnir.primary};--brand-on:${brands.avnir.onPrimary};}
:root[data-brand="muzidev"]{--brand:${brands.muzidev.primary};--brand-on:${brands.muzidev.onPrimary};}
:root[data-brand="muzipics"]{--brand:${brands.muzipics.primary};--brand-on:${brands.muzipics.onPrimary};}
:root[data-brand="muziweb"]{--brand:${brands.muziweb.primary};--brand-on:${brands.muziweb.onPrimary};}
:root[data-brand="muzimerch"]{--brand:${brands.muzimerch.primary};--brand-on:${brands.muzimerch.onPrimary};}
:root[data-brand="muzibase"]{--brand:${brands.muzibase.primary};--brand-on:${brands.muzibase.onPrimary};}
:root[data-brand="muzimanager"]{--brand:${brands.muzimanager.primary};--brand-on:${brands.muzimanager.onPrimary};}
:root[data-brand="promozic"]{--brand:${brands.promozic.primary};--brand-on:${brands.promozic.onPrimary};}
`.trim();
fs.mkdirSync(path.resolve("dist"), { recursive: true });
fs.writeFileSync(path.resolve("dist/vars.css"), css);
console.log("Wrote dist/vars.css");
