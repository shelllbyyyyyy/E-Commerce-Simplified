import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from "class-validator";

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  @MaxLength(5)
  readonly rating: number;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  readonly slug: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
