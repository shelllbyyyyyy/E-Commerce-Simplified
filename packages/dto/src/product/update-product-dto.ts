import { Transform } from "class-transformer";
import {
  IsArray,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
  Validate,
} from "class-validator";

export class UpdateProductDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsOptional()
  name?: string;

  @IsNumber()
  @Min(3)
  @Max(100)
  @Transform(({ value }) => parseInt(value))
  @IsOptional()
  price?: number;

  @IsString()
  @MinLength(3)
  @MaxLength(100)
  @IsOptional()
  description?: string;

  @IsArray()
  @IsString({ each: true })
  @MinLength(3)
  @MaxLength(100)
  @IsOptional()
  image?: string[];
}
