# آوارتا — Commercial E-Commerce Foundation

A production-oriented e-commerce starter built with **NestJS**, **TypeScript**, and a **pure HTML5/CSS3** frontend. This repository delivers a clean, scalable architecture and one premium, fully responsive Persian (RTL) homepage — ready to be customized and sold to real clients.

> This project intentionally includes only the technical foundation and the homepage. Business features (catalog, cart, checkout, auth, admin) are excluded by design and will be implemented in later phases.

---

## Technology Stack

| Layer        | Technology                                   |
| ------------ | -------------------------------------------- |
| Backend      | NestJS 10, Node.js, TypeScript               |
| API style    | REST                                         |
| Frontend     | Pure HTML5 + CSS3 (no frameworks)            |
| Architecture | Modular (feature modules), separation of concerns |
| Config       | `@nestjs/config` + `.env`                    |
| Static serve | `@nestjs/serve-static`                       |

---

## Project Structure

```
ecommerce-project/
│
├── src/                              # NestJS application source
│   ├── common/                       # Shared utilities & guards
│   ├── config/
│   │   └── app.config.ts             # Centralized configuration
│   ├── modules/
│   │   └── health/
│   │       ├── health.controller.ts
│   │       └── health.module.ts
│   ├── app.module.ts                 # Root module
│   └── main.ts                       # Application bootstrap
│
├── public/                           # Static frontend (served by NestJS)
│   ├── index.html                    # Homepage (Persian, RTL)
│   ├── css/
│   │   └── style.css                 # Design system + homepage styles
│   ├── js/
│   └── assets/
│       ├── images/
│       ├── fonts/
│       └── icons/
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json
├── nest-cli.json
├── .env
├── .env.example
├── .gitignore
└── README.md
```

NestJS is the single root application. The frontend is served directly from the `public/` directory — no separate frontend or backend project folders.

---

## Installation

Requirements: **Node.js 20+** and **npm 10+**.

```bash
# 1. Clone the repository
git clone <repo-url> ecommerce-project
cd ecommerce-project

# 2. Install dependencies
npm install

# 3. Prepare environment file
cp .env.example .env
```

---

## Environment Configuration

All runtime settings are read from environment variables (never hardcoded).

| Variable     | Description                        | Default      |
| ------------ | ---------------------------------- | ------------ |
| `NODE_ENV`   | `development` or `production`      | `development`|
| `PORT`       | HTTP port the server listens on    | `3000`       |
| `PUBLIC_DIR` | Directory of static frontend files | `public`     |

Copy `.env.example` to `.env` and adjust as needed.

---

## NPM Scripts

| Script              | Purpose                                            |
| ------------------- | -------------------------------------------------- |
| `npm run build`     | Compile TypeScript to `dist/` (production build)   |
| `npm run start`     | Start the compiled server                          |
| `npm run start:dev` | Start in watch mode (hot reload during development)|
| `npm run start:prod`| Build then run the compiled output                 |

### Development

```bash
npm run start:dev
```

The server reloads automatically on file changes.

### Production

```bash
npm run build
npm run start:prod
```

---

## Endpoints

| Address                          | Description                          |
| -------------------------------- | ------------------------------------ |
| `http://localhost:3000/`         | Homepage (Persian RTL)               |
| `http://localhost:3000/api/health` | Health check endpoint (JSON status) |

Example `/api/health` response:

```json
{
  "status": "ok",
  "timestamp": "2026-11-19T10:00:00.000Z",
  "environment": "development"
}
```

---

## Architecture Notes

- **Modular design:** each domain lives in its own module under `src/modules/`. New features (catalog, orders, auth) can be added as new modules without touching existing code.
- **Centralized config:** `src/config/app.config.ts` validates and exposes all environment settings from a single place.
- **Static serving:** the `public/` directory is served by NestJS; `/api/*` routes are excluded so the REST API and frontend coexist on one port.
- **Validation & serialization:** a global `ValidationPipe` and `ClassSerializerInterceptor` are registered at bootstrap for consistent API behavior.
- **No database:** intentionally omitted at this stage. Supabase or another provider can be integrated in a later phase.

---

## Frontend Notes

The homepage (`public/index.html`) is written in semantic HTML5 and styled entirely with a hand-crafted CSS design system (`public/css/style.css`):

- Persian-first, full RTL (`lang="fa"`, `dir="rtl"`), Vazirmatn typography.
- CSS custom properties for colors, spacing, radius, shadows, and motion.
- Reusable utility classes (`.container`, `.btn`, `.section`, `.icon-button`).
- Sections: announcement bar, header + nav + search, hero, trust strip, featured categories, featured products, promo banner, footer.
- Responsive breakpoints for desktop, tablet, and mobile.
- Respects `prefers-reduced-motion`.

No JavaScript frameworks, no CSS frameworks.

---

## License

UNLICENSED — proprietary foundation for commercial customization.
