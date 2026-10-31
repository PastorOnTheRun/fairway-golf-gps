# Publishing

The user approved public publishing on October 31, 2026. Publish this release in a public GitHub repository using GitHub Pages. This makes the application and source code publicly accessible. Personal rounds, photos, and shot positions remain in each visitor's local browser storage.

GitHub Pages restricts live website access only for eligible organization-owned repositories under GitHub Enterprise Cloud. A private personal repository does not by itself make a Pages website private. Official documentation: https://docs.github.com/en/enterprise-cloud@latest/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site

In the repository's Settings → Pages, choose **GitHub Actions** as the publishing source. The supplied `.github/workflows/pages.yml` checks the app and publishes only `dist/`. It runs on pushes to `main` or manual dispatch. All app URLs are relative and support a GitHub Pages project subdirectory.

Do not put API keys into `dist/`, GitHub source, or browser storage. No cloud AI key has been provisioned for this release. The source upload excludes downloaded reference PDFs, original map downloads, local hosting metadata, and local user data.

Making the repository private later does not automatically restrict website access. Revisit the Pages visibility requirements above before changing privacy settings.

The current release includes personal GPS, manual shot tracking, scorekeeping, photos, backups, and Oak Trail's nine mapped holes. Dispersion analysis, an automatic aiming optimizer, cloud AI analysis, and calibrated panorama overlays are still pending and must not be described as available in this release.
