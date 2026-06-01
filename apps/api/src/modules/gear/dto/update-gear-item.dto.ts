import { PartialType } from "@nestjs/swagger";
import { CreateGearItemDto } from "./create-gear-item.dto";

export class UpdateGearItemDto extends PartialType(CreateGearItemDto) {}
