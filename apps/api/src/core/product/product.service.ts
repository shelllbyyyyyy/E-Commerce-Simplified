import { PrismaService } from "@/lib/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, Product as ProductModel } from "@v1/db";

import { CreateProductDTO, UpdateProductDTO } from "@v1/dto";

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAllProduct() {
    try {
      const product = await this.prismaService.product.findMany();

      return product;
    } catch (error) {
      console.log(error);
    }
  }

  public async getProduct(productId: string) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id: productId,
      },
    });

    return product;
  }

  public async addProduct(createProductDTO: CreateProductDTO): Promise<ProductModel> {
    const addProductPayload: Prisma.ProductCreateInput = {
      ...createProductDTO,
    };

    const product = await this.prismaService.product.create({
      data: addProductPayload,
    });

    return product;
  }

  public async deleteProduct(productId: string) {
    await this.prismaService.product.delete({
      where: {
        id: productId,
      },
    });
  }

  public async updateProduct(productId: string, updateProductDTO: UpdateProductDTO) {
    const editProductPayload: Prisma.ProductUpdateInput = {
      ...updateProductDTO,
    };
    const product = await this.prismaService.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) throw new NotFoundException("product not found");

    const updatedProduct = await this.prismaService.product.update({
      where: {
        id: productId,
      },
      data: editProductPayload,
    });

    return updatedProduct;
  }
}
