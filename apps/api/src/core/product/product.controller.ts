import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res, UseGuards } from "@nestjs/common";
import { CreateProductDTO, UpdateProductDTO } from "@v1/dto";

import { ProductService } from "./product.service";
import { SupabaseGuard } from "@/core/auth/supabase/supabase.guard";

@Controller("products")
export class ProductContoller {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @UseGuards(SupabaseGuard)
  public async getAllProduct() {
    return await this.productService.getAllProduct();
  }

  @Get("/:id")
  @UseGuards(SupabaseGuard)
  public async getProduct(@Param("id") id: string) {
    const getProduct = await this.productService.getProduct(id);

    return getProduct;
  }

  @Post()
  @UseGuards(SupabaseGuard)
  public async addProduct(@Body() createProductDTO: CreateProductDTO) {
    const addProduct = await this.productService.addProduct(createProductDTO);

    return addProduct;
  }

  @Patch("/:id")
  @UseGuards(SupabaseGuard)
  public async updateProduct(@Param("id") id: string, @Body() updateProductDTO: UpdateProductDTO) {
    const updateProduct = await this.productService.updateProduct(id, updateProductDTO);
    return updateProduct;
  }

  @Delete("/:id")
  @UseGuards(SupabaseGuard)
  public async deleteProduct(@Param("id") id: string) {
    await this.productService.deleteProduct(id);
  }
}
