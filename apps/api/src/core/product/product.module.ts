import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductContoller } from "./product.controller";

@Module({
  controllers: [ProductContoller],
  providers: [ProductService],
})
export class ProductModule {}
