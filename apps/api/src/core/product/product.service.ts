import { PrismaService } from "@/lib/prisma.service";
import { Injectable } from "@nestjs/common";

import { CreateProductDTO } from "@v1/dto";

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  public async getAllProduct() {
    await this.prismaService.product.findMany();
  }

  public async getProduct(id: string) {
    const product = await this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
    return product;
  }

  public async addProduct(createProductDTO: CreateProductDTO): Promise<CreateProductDTO> {
    const product = await this.prismaService.product.create({
      data: {
        ...createProductDTO,
      },
    });
    return product;
  }

  public async deleteProduct(id: string) {
    const response = await this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}
