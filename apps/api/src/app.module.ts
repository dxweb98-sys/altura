import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { DatabaseModule } from "./database/prisma.module";
import { DestinationsModule } from "./modules/destinations/destinations.module";
import { GearModule } from "./modules/gear/gear.module";
import { HealthModule } from "./modules/health/health.module";
import { RoutesModule } from "./modules/routes/routes.module";
import { TripLogsModule } from "./modules/trip-logs/trip-logs.module";
import { TripPlansModule } from "./modules/trip-plans/trip-plans.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60_000, limit: 100 }]),
    DatabaseModule,
    HealthModule,
    DestinationsModule,
    RoutesModule,
    TripPlansModule,
    GearModule,
    TripLogsModule,
  ],
})
export class AppModule {}
