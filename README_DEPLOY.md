# Deployment (Vercel Monorepo)

Deploy two separate projects on Vercel, both using Node 20.x and pnpm:

- apps/ladle (Ladle playground)
  - Root Directory: `apps/ladle`
  - Install Command: `pnpm install`
  - Build Command: `pnpm build`
  - Output Directory: `apps/ladle/build`
  - Node Version: `20.x`

- apps/docs (Nextra docs site)
  - Root Directory: `apps/docs`
  - Install Command: `pnpm install`
  - Build Command: `pnpm build`
  - Output Directory: `.next`
  - Node Version: `20.x`

Notes:
- Do not add a single root `vercel.json` for both apps.
- Make sure `pnpm` is selected as the package manager.
- Build order locally:
  - `pnpm -w --filter @avnir/tokens build`
  - `pnpm -w --filter @avnir/ladle build`
  - `pnpm -w --filter @avnir/docs build`
