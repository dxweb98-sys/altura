import { PartialType } from "@nestjs/swagger";
import { CreateTripPlanDto } from "./create-trip-plan.dto";

export class UpdateTripPlanDto extends PartialType(CreateTripPlanDto) {}
