# Solomon Kamanga — Professional Portfolio

A responsive portfolio built with Next.js, TypeScript and Tailwind CSS, configured for static export and GitHub Pages.

## Before publishing

1. In `components/portfolio.tsx`, replace:
   - `YOUR_EMAIL@example.com`
   - `YOUR_GITHUB_USERNAME`
   - `YOUR_LINKEDIN_URL`
2. Add your CV as `public/cv.pdf`.
3. Review all project descriptions and your role. Remove any unverified claims or confidential information.
4. Confirm experience titles and dates against your CV.
5. Add approved screenshots if you have them. Current project visuals are illustrative, not product screenshots.

## Run locally

Install Node.js 20 or later, then:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To test the production export:

```bash
npm run build
```

The static website is generated in the `out/` directory.

## Deploy to GitHub Pages

1. Create a repository named exactly `YOUR_GITHUB_USERNAME.github.io`.
2. Upload the project files and folders to the repository root.
3. In GitHub, open Settings → Pages.
4. Set Source to **GitHub Actions**.
5. The workflow in `.github/workflows/deploy.yml` builds and deploys the static site automatically whenever you push to `main`.
6. Wait for the Pages workflow to finish successfully.

The user site URL is `https://YOUR_GITHUB_USERNAME.github.io`.

## CV

Place your PDF at `public/cv.pdf`. The Download CV link points to `/cv.pdf`.

## Notes

- GitHub Pages hosts static files; it does not run the FastAPI backend or PostgreSQL database.
- Do not upload secrets, credentials, private source code, personal data or confidential company screenshots.
- Add only authorised live demo and source-code links.
