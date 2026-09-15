# Stop Chris Moise

Build a responsive website based on the attached html file and design mockups.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://stop-chris-moise.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2bc62ecd-f2fd-446c-b7fe-629bd1fd4ce1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to GitHub Pages

A workflow (`.github/workflows/deploy-pages.yml`) builds this repo as a static
site and deploys it to GitHub Pages on every push to `main`.

1. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Push to `main` (or run the workflow manually). The site is published at
   `https://<org-or-user>.github.io/<repo-name>/`.

To password-protect the front page, add a repository secret named
`SITE_PASSCODE` (**Settings → Secrets and variables → Actions**). Visitors must
enter it once per browser session. This is a client-side check only — a
deterrent, not real security — so don't rely on it for anything sensitive.
Delete the secret to remove the gate.
