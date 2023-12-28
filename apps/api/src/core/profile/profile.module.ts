import { Module } from "@nestjs/common";

import { ProfileController } from "./profile.controller";
import { ProfileService } from "./profile.service";

import { SupabaseModule } from "@/core/auth/supabase/supabase.module";
import { PrismaService } from "@/lib/prisma.service";

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, SupabaseModule, PrismaService],
})
export class ProfileModule {}
