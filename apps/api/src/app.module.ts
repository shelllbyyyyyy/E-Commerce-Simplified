import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";

import { SupabaseModule } from "@/core/auth/supabase/supabase.module";
import { ProfileModule } from "@/core/profile/profile.module";
import { ProductModule } from "./core/product/product.module";

@Module({
  imports: [ProfileModule, SupabaseModule, PassportModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
