import { Controller, Get, NotFoundException, UseGuards } from "@nestjs/common";

import { ProfileService } from "./profile.service";

import { AuthUser } from "@/core/auth/types";
import { SupabaseGuard } from "@/core/auth/supabase/supabase.guard";
import { User } from "@/core/auth/user.decorator";

@Controller("profiles")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  @UseGuards(SupabaseGuard)
  public async getProfileUser(@User() user: AuthUser) {
    const profile = await this.profileService.getProfile(user.sub);
    if (!profile) {
      throw new NotFoundException("profile not found");
    }

    return profile;
  }
}
