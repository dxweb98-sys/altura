import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "../../database/prisma.service";

@Injectable()
export class TripLogsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findMany() {
    return this.prisma.tripLog.findMany({ include: { tripPlan: true }, orderBy: { createdAt: "desc" } });
  }

  findById(id: string) {
    return this.prisma.tripLog.findUnique({ where: { id }, include: { tripPlan: true } });
  }

  create(data: Prisma.TripLogCreateInput) {
    return this.prisma.tripLog.create({ data, include: { tripPlan: true } });
  }

  update(id: string, data: Prisma.TripLogUpdateInput) {
    return this.prisma.tripLog.update({ where: { id }, data, include: { tripPlan: true } });
  }

  delete(id: string) {
    return this.prisma.tripLog.delete({ where: { id } });
  }
}
