# Mistara Ella — Frontend Only

Standalone **Vue 3 + Vite** frontend extracted from the original Laravel/Inertia hotel project for redesign work.

## What was intentionally removed

- Laravel / PHP / Composer
- Inertia.js and Ziggy routes
- Database and migrations
- Authentication
- Payment gateway code
- SaaSBeds API calls
- Backend controllers and services

The content in `src/data/site.js` is static/mock frontend data so the design can be developed independently.

## Tech stack

- Vue 3
- Vite
- Vue Router
- Lucide icons
- Plain CSS

## Project structure

```text
mistara-ella-frontend/
├─ .github/
│  └─ workflows/
│     └─ deploy-pages.yml
├─ public/
│  └─ Images/                 # Existing Mistara media from the old project
├─ src/
│  ├─ assets/
│  │  └─ styles/
│  │     └─ main.css
│  ├─ components/
│  │  ├─ home/
│  │  │  ├─ AboutSection.vue
│  │  │  ├─ AmenitiesSection.vue
│  │  │  ├─ FinalCta.vue
│  │  │  ├─ GallerySection.vue
│  │  │  ├─ HeroSection.vue
│  │  │  ├─ LocationSection.vue
│  │  │  └─ RoomsSection.vue
│  │  └─ layout/
│  │     ├─ InnerPageHero.vue
│  │     ├─ MainLayout.vue
│  │     ├─ SiteFooter.vue
│  │     └─ SiteHeader.vue
│  ├─ data/
│  │  └─ site.js              # Static frontend content / mock API data
│  ├─ router/
│  │  └─ index.js
│  ├─ views/
│  │  ├─ ContactView.vue
│  │  ├─ FacilitiesView.vue
│  │  ├─ GalleryView.vue
│  │  ├─ HomeView.vue
│  │  ├─ PackagesView.vue
│  │  └─ RoomsView.vue
│  ├─ App.vue
│  └─ main.js
├─ .gitignore
├─ index.html
├─ package.json
└─ vite.config.js
```

## Run locally

Install Node.js 20+ first, then:

```bash
npm install
npm run dev
```

Open the localhost URL shown by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
```

The production site is generated inside `dist/`.

## Push to a new GitHub repository

Create an **empty repository** on GitHub, for example `mistara-ella-frontend`. Do not initialize it with a README if you want the cleanest first push.

Inside this project folder run:

```bash
git init
git add .
git commit -m "Initial Mistara Ella frontend"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mistara-ella-frontend.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

## Publish with GitHub Pages

A GitHub Actions workflow is already included.

After pushing:

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main` again if needed. The included workflow will build and deploy the site.

This project uses Vue Router hash URLs (`/#/rooms`, `/#/gallery`, etc.), which avoids SPA 404 problems on GitHub Pages.

## Where to redesign the homepage

Start here:

```text
src/views/HomeView.vue
src/components/home/HeroSection.vue
src/components/home/AboutSection.vue
src/components/home/RoomsSection.vue
src/components/home/AmenitiesSection.vue
src/components/home/GallerySection.vue
src/components/home/LocationSection.vue
src/assets/styles/main.css
```

Header and footer:

```text
src/components/layout/SiteHeader.vue
src/components/layout/SiteFooter.vue
```

Static text, rooms, amenities and images:

```text
src/data/site.js
```

## Later backend integration

When the design is approved, keep the components and replace the static data layer with an API service, for example:

```text
src/services/api.js
src/services/rooms.js
src/services/packages.js
```

That keeps presentation and backend logic separate.
