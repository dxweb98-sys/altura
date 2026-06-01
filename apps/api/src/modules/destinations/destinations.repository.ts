import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class DestinationsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findMany() {
    return this.prisma.destination.findMany({
      orderBy: { createdAt: "desc" },
      include: { routes: true },
    });
  }

  findById(id: string) {
    return this.prisma.destination.findUnique({
      where: { id },
      include: { routes: true },
    });
  }

  create(data: Prisma.DestinationCreateInput) {
    return this.prisma.destination.create({ data });
  }

  update(id: string, data: Prisma.DestinationUpdateInput) {
    return this.prisma.destination.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.destination.delete({ where: { id } });
  }
}
