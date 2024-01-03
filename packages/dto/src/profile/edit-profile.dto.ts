import { Address } from "@v1/db";
import { IsString, MinLength } from "class-validator";

export class EditProfileDTO {
  @IsString()
  @MinLength(4)
  readonly name: string;

  @IsString()
  readonly profilePic: string;

  readonly address: Address;
}
