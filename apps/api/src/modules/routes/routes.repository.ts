import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class RoutesRepository {
  constructor(private readonly prisma: PrismaService) {}

  findMany(destinationId?: string) {
    return this.prisma.route.findMany({
      where: destinationId ? { destinationId } : undefined,
      include: { destination: true },
      orderBy: { createdAt: "desc" },
    });
  }

  findById(id: string) {
    return this.prisma.route.findUnique({ where: { id }, include: { destination: true } });
  }

  create(data: Prisma.RouteCreateInput) {
    return this.prisma.route.create({ data });
  }

  update(id: string, data: Prisma.RouteUpdateInput) {
    return this.prisma.route.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.route.delete({ where: { id } });
  }
}
