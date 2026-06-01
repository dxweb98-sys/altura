import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { GearPriority, GearType } from "@prisma/client";
import { IsEnum, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateGearItemDto {
  @ApiProperty({ example: "Headlamp" })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name!: string;

  @ApiProperty({ example: "Lighting" })
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  category!: string;

  @ApiProperty({ enum: GearType })
  @IsEnum(GearType)
  type!: GearType;

  @ApiProperty({ enum: GearPriority })
  @IsEnum(GearPriority)
  priority!: GearPriority;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(500)
  notes?: string;
}
