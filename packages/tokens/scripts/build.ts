import fs from "node:fs";
import path from "node:path";

// Resolve relative to the package directory (this script runs with cwd = packages/tokens)
const tokensPath = path.resolve("src/tokens.json");
const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf-8"));

const root = `

:root{
--bg:${tokens.brand.avnir.bg};
--surface:${tokens.brand.avnir.surface};
--text-muted:${tokens.brand.avnir.muted};
--radius-xs:${tokens.radius.xs};
--radius-sm:${tokens.radius.sm};
--radius-md:${tokens.radius.md};
--radius-lg:${tokens.radius.lg};
--radius-xl:${tokens.radius.xl};
--radius-full:${tokens.radius.full};
--shadow-sm:${tokens.shadow.sm};
--shadow-md:${tokens.shadow.md};
--shadow-lg:${tokens.shadow.lg};
}
:root{--brand:${tokens.brand.avnir.accent};--brand-on:#FFFFFF;}
:root{--brand:${tokens.brand.muzidev.primary};--brand-on:${tokens.brand.muzidev.onPrimary};}
:root{--brand:${tokens.brand.muzipics.primary};--brand-on:${tokens.brand.muzipics.onPrimary};}
:root{--brand:${tokens.brand.muziweb.primary};--brand-on:${tokens.brand.muziweb.onPrimary};}
:root{--brand:${tokens.brand.muzimerch.primary};--brand-on:${tokens.brand.muzimerch.onPrimary};}
:root{--brand:${tokens.brand.muzibase.primary};--brand-on:${tokens.brand.muzibase.onPrimary};}
:root{--brand:${tokens.brand.muzimanager.primary};--brand-on:${tokens.brand.muzimanager.onPrimary};}
:root{--brand:${tokens.brand.promozic.primary};--brand-on:${tokens.brand.promozic.onPrimary};}
`.trim();
fs.mkdirSync(path.resolve("packages/tokens/dist"), { recursive: true });
fs.writeFileSync(path.resolve("packages/tokens/dist/vars.css"), root);
console.log("Wrote packages/tokens/dist/vars.css");
