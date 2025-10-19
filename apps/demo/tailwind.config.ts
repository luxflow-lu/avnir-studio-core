import type { Config } from "tailwindcss";
// Delegate to CJS config to avoid dual-config conflicts
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cjs = require("./tailwind.config.cjs");
export default cjs as Config;
