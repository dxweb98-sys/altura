-- CreateEnum
CREATE TYPE "DifficultyLevel" AS ENUM ('EASY', 'MODERATE', 'HARD', 'EXTREME');

-- CreateEnum
CREATE TYPE "TripPace" AS ENUM ('SLOW', 'NORMAL', 'FAST');

-- CreateEnum
CREATE TYPE "TripTarget" AS ENUM ('SUNRISE', 'SUNSET', 'CAMPING', 'DAY_HIKE');

-- CreateEnum
CREATE TYPE "TripStatus" AS ENUM ('DRAFT', 'PLANNED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "GearType" AS ENUM ('PERSONAL', 'GROUP');

-- CreateEnum
CREATE TYPE "GearPriority" AS ENUM ('REQUIRED', 'RECOMMENDED', 'OPTIONAL');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "destinations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "region" TEXT,
    "elevation" INTEGER,
    "description" TEXT,
    "bestSeason" TEXT,
    "difficultyLevel" "DifficultyLevel" NOT NULL DEFAULT 'MODERATE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "destinations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "routes" (
    "id" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "basecampName" TEXT,
    "basecampLocation" TEXT,
    "estimatedUpHours" DOUBLE PRECISION,
    "estimatedDownHours" DOUBLE PRECISION,
    "difficultyLevel" "DifficultyLevel" NOT NULL DEFAULT 'MODERATE',
    "hasWaterSource" BOOLEAN NOT NULL DEFAULT false,
    "campAvailable" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trip_plans" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "destinationId" TEXT NOT NULL,
    "routeId" TEXT,
    "title" TEXT NOT NULL,
    "originCity" TEXT NOT NULL,
    "peopleCount" INTEGER NOT NULL,
    "budgetPerPerson" INTEGER NOT NULL,
    "target" "TripTarget" NOT NULL,
    "pace" "TripPace" NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "arrivalTime" TEXT,
    "startHikingTime" TEXT,
    "status" "TripStatus" NOT NULL DEFAULT 'DRAFT',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trip_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gear_items" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "type" "GearType" NOT NULL,
    "priority" "GearPriority" NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gear_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trip_logs" (
    "id" TEXT NOT NULL,
    "tripPlanId" TEXT NOT NULL,
    "actualBudget" INTEGER,
    "actualUpHours" DOUBLE PRECISION,
    "actualDownHours" DOUBLE PRECISION,
    "rating" INTEGER,
    "reflection" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trip_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "trip_logs_tripPlanId_key" ON "trip_logs"("tripPlanId");

-- AddForeignKey
ALTER TABLE "routes" ADD CONSTRAINT "routes_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "destinations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trip_plans" ADD CONSTRAINT "trip_plans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trip_plans" ADD CONSTRAINT "trip_plans_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "destinations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trip_plans" ADD CONSTRAINT "trip_plans_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trip_logs" ADD CONSTRAINT "trip_logs_tripPlanId_fkey" FOREIGN KEY ("tripPlanId") REFERENCES "trip_plans"("id") ON DELETE CASCADE ON UPDATE CASCADE;
