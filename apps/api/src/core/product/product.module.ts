import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductContoller } from "./product.controller";
import { PrismaService } from "@/lib/prisma.service";

@Module({
  controllers: [ProductContoller],
  providers: [ProductService, PrismaService],
})
export class ProductModule {}
