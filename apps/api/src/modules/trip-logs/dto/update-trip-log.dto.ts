import { PartialType, OmitType } from "@nestjs/swagger";
import { CreateTripLogDto } from "./create-trip-log.dto";

export class UpdateTripLogDto extends PartialType(OmitType(CreateTripLogDto, ["tripPlanId"] as const)) {}
