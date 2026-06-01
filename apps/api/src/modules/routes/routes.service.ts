import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateRouteDto } from "./dto/create-route.dto";
import { UpdateRouteDto } from "./dto/update-route.dto";
import { RoutesRepository } from "./routes.repository";

@Injectable()
export class RoutesService {
  constructor(private readonly routesRepository: RoutesRepository) {}

  findMany(destinationId?: string) {
    return this.routesRepository.findMany(destinationId);
  }

  async findById(id: string) {
    const route = await this.routesRepository.findById(id);
    if (!route) throw new NotFoundException("Route not found");
    return route;
  }

  create(dto: CreateRouteDto) {
    const { destinationId, ...data } = dto;
    return this.routesRepository.create({
      ...data,
      destination: { connect: { id: destinationId } },
    });
  }

  async update(id: string, dto: UpdateRouteDto) {
    await this.findById(id);
    const { destinationId, ...data } = dto;
    return this.routesRepository.update(id, {
      ...data,
      ...(destinationId ? { destination: { connect: { id: destinationId } } } : {}),
    });
  }

  async delete(id: string) {
    await this.findById(id);
    return this.routesRepository.delete(id);
  }
}
