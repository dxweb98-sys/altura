import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class TripPlansRepository {
  constructor(private readonly prisma: PrismaService) {}

  findMany() {
    return this.prisma.tripPlan.findMany({
      include: { destination: true, route: true, tripLog: true },
      orderBy: { createdAt: "desc" },
    });
  }

  findById(id: string) {
    return this.prisma.tripPlan.findUnique({
      where: { id },
      include: { destination: true, route: true, tripLog: true },
    });
  }

  create(data: Prisma.TripPlanCreateInput) {
    return this.prisma.tripPlan.create({ data, include: { destination: true, route: true } });
  }

  update(id: string, data: Prisma.TripPlanUpdateInput) {
    return this.prisma.tripPlan.update({ where: { id }, data, include: { destination: true, route: true, tripLog: true } });
  }

  delete(id: string) {
    return this.prisma.tripPlan.delete({ where: { id } });
  }
}
