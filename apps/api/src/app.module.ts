import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";

import { SupabaseModule } from "./core/auth/supabase/supabase.module";

@Module({
  imports: [UserModule, SupabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
