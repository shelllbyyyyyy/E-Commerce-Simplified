import { 
  IsArray, 
  IsNotEmpty, 
  IsNumber, 
  IsString 
} from "class-validator";


export class CreateProductDTO {
  @IsString()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsNumber()
  readonly rating: number;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  readonly image: string[];

  @IsString()
  @IsNotEmpty()
  readonly slug: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}
