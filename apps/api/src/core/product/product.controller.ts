import { Controller } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("products")
export class ProductContoller {
  constructor(private readonly productService: ProductService) {}
}
