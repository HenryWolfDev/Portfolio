# Portfolio

Personal portfolio website showcasing my work, skills, and contact information. Built as a fast, responsive Single Page Application with Angular, TypeScript, and SCSS.

This project uses Angular CLI 19 and modern Angular features (standalone components, control flow, optimized builds).

## Features

- Projects overview with detail pages (Angular Router)
- Skills section with clear visual grouping
- Testimonials/colleagues thoughts cards with hover effects
- Responsive layout from mobile to desktop (custom SCSS breakpoints)
- Smooth micro‑interactions and animations
- Internationalization support via ngx‑translate
- Theming and typography via CSS variables and web fonts

## Tech Stack

- Framework: Angular 19 (TypeScript, RxJS, Zone.js)
- Styling: SCSS modules, custom mixins, CSS variables
- i18n: @ngx-translate/core + @ngx-translate/http-loader
- Tooling: Angular CLI, Jasmine/Karma for unit tests
- Fonts: @fontsource/bricolage-grotesque, @fontsource/kalam

## Project Structure

- `src/app/main-content/*` feature sections (hero, projects, skills, colleagues, contact)
- `src/app/shared-components/*` shared UI pieces (header, footer, etc.)
- `public/styles/*` global mixins and utilities (responsive breakpoints, animations)
- `assets/*` static assets (images, icons, i18n)
- `src/styles.scss` global variables, fonts, and base styles

## Styling & Responsiveness

- Breakpoints are centralized in `public/styles/responsive-points.scss` (forwarded from `responsive/breakpoints.scss`).
- Components use SCSS with small, focused partials. Spacing and sizing follow rem units for consistent scaling.
- Images use modern techniques (e.g., `srcset`/`picture`, `object-fit`) to keep visuals crisp without distortion.

## Internationalization

- Translations live under `assets/i18n/*.json`.
- Use the `translate` pipe in templates, e.g. `{{ 'home.title' | translate }}`.

## Commands

- `npm start` or `ng serve` – runs the dev server at `http://localhost:4200`
- `npm run build` – production build in `dist/`
- `npm run watch` – rebuild on changes (development configuration)
- `npm test` – unit tests (Jasmine/Karma)

## Development

Prerequisites:
- Node.js 18+ and npm
- Angular CLI `npm i -g @angular/cli`

Setup:
1) `npm install`
2) `npm start` and open `http://localhost:4200`

## Deployment

Production build:
- `npm run build` (outputs to `dist/portfolio/`)

Deploy the contents of the `dist/portfolio/browser` folder to any static host (e.g., GitHub Pages, Netlify, Vercel, S3/CloudFront). No server logic is required.

## Accessibility & Performance

- Semantic HTML, keyboard‑friendly interactions, and sufficient color contrast
- Responsive images and efficient asset loading
- Animations tuned to avoid jank and respect layout flow

## Roadmap

- Contact form with validation and email integration
- More project case studies and live demos
- Dark/Light theme toggle

## Author

Built with care using Angular. If you have feedback or opportunities, feel free to reach out!

