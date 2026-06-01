# Altura Architecture

Altura uses a modular monolith architecture inside a pnpm + Turborepo monorepo.

## Principles

1. Mobile-first web experience.
2. Feature-based frontend structure.
3. Modular backend with controller/service/repository separation.
4. No Prisma calls inside controllers.
5. Shared enums/types/validation where useful.
6. AI module is planned for later, but intentionally not included in the first non-AI MVP.

## Apps

- `apps/web`: React app.
- `apps/api`: NestJS API.

## Packages

- `packages/shared`: shared constants, enums, and types.
- `packages/validation`: Zod validation schemas.
- `packages/tsconfig`: shared TypeScript config.
