# Arcadia — Gaming Portal (Static Homepage)

This repository contains a single-page static website suitable as a homepage for a gaming portal.
Files included:
- `index.html` — the homepage
- `styles.css` — styling
- `script.js` — interactivity
- `assets/` — example images (placeholders)

## How to host on GitHub Pages

1. Create a new repository on GitHub (e.g., `gaming-portal-homepage`).
2. Upload the files from this archive (or clone & push):
   ```
   git init
   git add .
   git commit -m "Initial commit — Arcadia homepage"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Go to the repository Settings → Pages (or "Pages" in the sidebar).
4. Under "Build and deployment", choose branch `main` and folder `/ (root)`, then Save.
5. Your site will be published at:
   `https://<your-username>.github.io/<repo-name>/`
   (It might take a minute to become active.)

## Notes
- Replace the placeholder images in `assets/` with your own game thumbnails and hero illustration.
- This is static HTML/CSS/JS — no build tooling required.
