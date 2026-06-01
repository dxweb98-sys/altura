# Altura

Altura is a mobile-first personal trip planning system for hikers and intentional travelers.

## Stack

- Monorepo: pnpm workspace + Turborepo
- Web: React + Vite + TypeScript + Tailwind CSS
- API: NestJS + Prisma + PostgreSQL
- Shared packages: shared constants/types and validation schemas

## Getting started

```bash
pnpm install
cp .env.example .env
pnpm db:dev
pnpm api:prisma:generate
pnpm api:prisma:migrate
pnpm api:prisma:seed
pnpm dev
```

Web: http://localhost:5173  
API: http://localhost:4000/api/v1  
API docs: http://localhost:4000/docs

## Project structure

```txt
apps/web      React mobile-first web app
apps/api      NestJS modular monolith API
packages/*    shared code, validation, and TypeScript configs
```

## Naming convention

- Folders: kebab-case
- React components: PascalCase
- Functions/variables: camelCase
- Global constants: SCREAMING_SNAKE_CASE
- Backend files: `resource.type.ts`, e.g. `trip-plans.service.ts`
