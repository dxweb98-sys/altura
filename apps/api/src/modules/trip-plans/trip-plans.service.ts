import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTripPlanDto } from "./dto/create-trip-plan.dto";
import { UpdateTripPlanDto } from "./dto/update-trip-plan.dto";
import { TripPlansRepository } from "./trip-plans.repository";

@Injectable()
export class TripPlansService {
  constructor(private readonly tripPlansRepository: TripPlansRepository) {}

  findMany() {
    return this.tripPlansRepository.findMany();
  }

  async findById(id: string) {
    const tripPlan = await this.tripPlansRepository.findById(id);
    if (!tripPlan) throw new NotFoundException("Trip plan not found");
    return tripPlan;
  }

  create(dto: CreateTripPlanDto) {
    const { destinationId, routeId, startDate, ...data } = dto;
    return this.tripPlansRepository.create({
      ...data,
      startDate: new Date(startDate),
      destination: { connect: { id: destinationId } },
      ...(routeId ? { route: { connect: { id: routeId } } } : {}),
    });
  }

  async update(id: string, dto: UpdateTripPlanDto) {
    await this.findById(id);
    const { destinationId, routeId, startDate, ...data } = dto;
    return this.tripPlansRepository.update(id, {
      ...data,
      ...(startDate ? { startDate: new Date(startDate) } : {}),
      ...(destinationId ? { destination: { connect: { id: destinationId } } } : {}),
      ...(routeId ? { route: { connect: { id: routeId } } } : {}),
    });
  }

  async delete(id: string) {
    await this.findById(id);
    return this.tripPlansRepository.delete(id);
  }
}
