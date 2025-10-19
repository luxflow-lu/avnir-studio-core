import fs from "node:fs";
import path from "node:path";

const TOK = JSON.parse(
  fs.readFileSync(path.resolve("packages/tokens/src/tokens.json"), "utf8")
);

const root = `
:root{
  --bg-dark:${TOK.base.bgDark};
  --surface:${TOK.base.surface};
  --bg-light:${TOK.base.bgLight};
  --bg:var(--bg-dark);
  --text-muted:${TOK.base.textMuted};

  --radius-xs:${TOK.base.radius.xs};
  --radius-sm:${TOK.base.radius.sm};
  --radius-md:${TOK.base.radius.md};
  --radius-lg:${TOK.base.radius.lg};
  --radius-xl:${TOK.base.radius.xl};
  --radius-full:${TOK.base.radius.full};

  --shadow-sm:${TOK.base.shadow.sm};
  --shadow-md:${TOK.base.shadow.md};
  --shadow-lg:${TOK.base.shadow.lg};
}
`.trim();

const brands = Object.entries(TOK.brand as Record<string, {primary:string; onPrimary:string}>)
  .map(([name, v]) => `:root[data-brand="${name}"]{--brand:${v.primary};--brand-on:${v.onPrimary};}`)
  .join("\n");

fs.mkdirSync(path.resolve("packages/tokens/dist"), { recursive: true });
fs.writeFileSync(path.resolve("packages/tokens/dist/vars.css"), `${root}\n${brands}\n`);
console.log("✓ Wrote packages/tokens/dist/vars.css");
