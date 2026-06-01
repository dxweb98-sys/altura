import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class GearRepository {
  constructor(private readonly prisma: PrismaService) {}

  findMany() {
    return this.prisma.gearItem.findMany({ orderBy: [{ priority: "asc" }, { name: "asc" }] });
  }

  findById(id: string) {
    return this.prisma.gearItem.findUnique({ where: { id } });
  }

  create(data: Prisma.GearItemCreateInput) {
    return this.prisma.gearItem.create({ data });
  }

  update(id: string, data: Prisma.GearItemUpdateInput) {
    return this.prisma.gearItem.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.gearItem.delete({ where: { id } });
  }
}
