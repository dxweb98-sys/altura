import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { DifficultyLevel } from "@prisma/client";
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, IsUUID, MaxLength, Min, MinLength } from "class-validator";

export class CreateRouteDto {
  @ApiProperty()
  @IsUUID()
  destinationId!: string;

  @ApiProperty({ example: "Suwanting" })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name!: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(100)
  basecampName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(200)
  basecampLocation?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  estimatedUpHours?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @Min(0)
  estimatedDownHours?: number;

  @ApiProperty({ enum: DifficultyLevel })
  @IsEnum(DifficultyLevel)
  difficultyLevel!: DifficultyLevel;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  hasWaterSource?: boolean;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  campAvailable?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  notes?: string;
}
