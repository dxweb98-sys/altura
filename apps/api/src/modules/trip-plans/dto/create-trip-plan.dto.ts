import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { TripPace, TripTarget } from "@prisma/client";
import { IsDateString, IsEnum, IsInt, IsOptional, IsString, IsUUID, MaxLength, Min, MinLength } from "class-validator";

export class CreateTripPlanDto {
  @ApiProperty({ example: "Merbabu via Suwanting" })
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  title!: string;

  @ApiProperty()
  @IsUUID()
  destinationId!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  routeId?: string;

  @ApiProperty({ example: "Tangerang" })
  @IsString()
  @MinLength(2)
  @MaxLength(80)
  originCity!: string;

  @ApiProperty({ example: 4 })
  @IsInt()
  @Min(1)
  peopleCount!: number;

  @ApiProperty({ example: 900000 })
  @IsInt()
  @Min(0)
  budgetPerPerson!: number;

  @ApiProperty({ enum: TripTarget })
  @IsEnum(TripTarget)
  target!: TripTarget;

  @ApiProperty({ enum: TripPace })
  @IsEnum(TripPace)
  pace!: TripPace;

  @ApiProperty({ example: "2026-07-01" })
  @IsDateString()
  startDate!: string;

  @ApiPropertyOptional({ example: "02:00" })
  @IsOptional()
  @IsString()
  arrivalTime?: string;

  @ApiPropertyOptional({ example: "08:00" })
  @IsOptional()
  @IsString()
  startHikingTime?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
