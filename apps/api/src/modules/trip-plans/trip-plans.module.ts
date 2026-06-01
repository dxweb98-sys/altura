import { Module } from "@nestjs/common";
import { TripPlansController } from "./trip-plans.controller";
import { TripPlansRepository } from "./trip-plans.repository";
import { TripPlansService } from "./trip-plans.service";

@Module({
  controllers: [TripPlansController],
  providers: [TripPlansService, TripPlansRepository],
  exports: [TripPlansService],
})
export class TripPlansModule {}
