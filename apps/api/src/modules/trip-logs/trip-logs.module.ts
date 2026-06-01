import { Module } from "@nestjs/common";
import { TripLogsController } from "./trip-logs.controller";
import { TripLogsRepository } from "./trip-logs.repository";
import { TripLogsService } from "./trip-logs.service";

@Module({
  controllers: [TripLogsController],
  providers: [TripLogsService, TripLogsRepository],
  exports: [TripLogsService],
})
export class TripLogsModule {}
