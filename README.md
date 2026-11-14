# Kinza Mulazim — Personal Portfolio

A responsive personal portfolio for **Kinza Mulazim**, built with semantic HTML, CSS, and vanilla JavaScript.

**Tagline:** Where Mathematics Meets Technology.

## About

The portfolio presents Kinza's academic background in BS Mathematics at Bahauddin Zakariya University (BZU), Multan, interests in software development and AI, technical toolkit, and community learning initiative.

## Features

- Responsive layouts for mobile, tablet, and desktop
- Premium dark navy visual identity with blue/cyan accents
- Sticky navigation and accessible mobile menu
- Rotating role headline and scroll reveal effects
- Reduced-motion support
- Skills grouped by discipline without proficiency percentages
- Education, project concept, and community sections
- Configurable email link (no fabricated email or fake contact form)
- SEO and social sharing metadata
- Custom 404 page and favicon
- No build step, API key, or paid dependency required

## Project structure

```text
.
├── index.html
├── style.css
├── script.js
├── 404.html
├── vercel.json
└── assets/
    └── favicon/
        └── favicon.svg
```

## Run locally

1. Download or clone this repository.
2. Open the project folder.
3. Open `index.html` in a browser.

For a local development server, use the VS Code Live Server extension or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Configure your email

Open `script.js` and update the single configuration field:

```js
const PORTFOLIO_CONFIG = {
  email: "your-professional-email@example.com"
};
```

Until an email is configured, the contact button does not pretend to send a message.

## Update project links

The Chessboard / ChessMate section is intentionally marked as a project concept because its source repository, implementation stack, and live demo have not yet been verified. Add repository and demo links only after confirming the correct public URLs and technologies.

## Deploy to GitHub

For a fresh local project:

```bash
git init
git add .
git commit -m "Build personal portfolio website"
git branch -M main
git remote add origin https://github.com/kinzamulazim-stack/Kinza-Mulazim.git
git push -u origin main
```

If you cloned the existing repository, the remote is already configured. After changes:

```bash
git add .
git commit -m "Update portfolio website"
git push origin main
```

## Deploy to Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import `kinzamulazim-stack/Kinza-Mulazim` from GitHub.
3. Keep the Framework Preset as **Other**.
4. Leave Build Command and Output Directory empty (static site).
5. Select **Deploy**.

The included `vercel.json` supplies basic response headers. Vercel can redeploy after subsequent pushes to the connected branch.

## Alternative: GitHub Pages

1. Open repository **Settings → Pages**.
2. Under Build and deployment, choose **Deploy from a branch**.
3. Select `main` and `/(root)`, then save.
4. Wait for GitHub Pages to publish the site.

## Final testing checklist

- [ ] Check navigation links on desktop and mobile.
- [ ] Test mobile menu with keyboard and touch.
- [ ] Confirm the GitHub and LinkedIn links open correctly.
- [ ] Add a professional email before publishing contact email access.
- [ ] Verify project repository and demo URLs before adding them.
- [ ] Review the layout at mobile, tablet, and desktop widths.
- [ ] Test keyboard focus and reduced-motion settings.
- [ ] Check browser console for errors.
- [ ] Confirm page title, description, favicon, and social preview.

## Personal links

- GitHub: https://github.com/kinzamulazim-stack
- LinkedIn: https://www.linkedin.com/in/kinza-mulazim-3698233b4/

---

Built with HTML, CSS, and vanilla JavaScript.