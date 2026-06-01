import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { DifficultyLevel } from "@prisma/client";
import { IsEnum, IsInt, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateDestinationDto {
  @ApiProperty({ example: "Gunung Merbabu" })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name!: string;

  @ApiProperty({ example: "Mountain" })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  type!: string;

  @ApiProperty({ example: "Jawa Tengah" })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  province!: string;

  @ApiPropertyOptional({ example: "Magelang / Boyolali" })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  region?: string;

  @ApiPropertyOptional({ example: 3145 })
  @IsOptional()
  @IsInt()
  @Min(0)
  elevation?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @MaxLength(120)
  bestSeason?: string;

  @ApiProperty({ enum: DifficultyLevel })
  @IsEnum(DifficultyLevel)
  difficultyLevel!: DifficultyLevel;
}
