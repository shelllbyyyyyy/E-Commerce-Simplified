import { Injectable } from "@nestjs/common";
import { Prisma } from "@v1/db";
import { EditProfileDTO } from "@v1/dto";

import { PrismaService } from "@/lib/prisma.service";

@Injectable()
export class ProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getProfile(id: string) {
    const profile = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
    return profile;
  }

  public async editProfile(id: string, editProfileDTO: EditProfileDTO) {
    const editProfilePayload: Prisma.UserUpdateInput = {
      ...editProfileDTO,
    };

    const updatedProfile = await this.prismaService.user.upsert({
      create: {
        name: String(editProfilePayload.name),
        id,
      },
      update: editProfilePayload,
      where: {
        id,
      },
    });
    return updatedProfile;
  }
}
