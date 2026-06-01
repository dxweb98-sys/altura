import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTripLogDto } from "./dto/create-trip-log.dto";
import { UpdateTripLogDto } from "./dto/update-trip-log.dto";
import { TripLogsRepository } from "./trip-logs.repository";

@Injectable()
export class TripLogsService {
  constructor(private readonly tripLogsRepository: TripLogsRepository) {}

  findMany() {
    return this.tripLogsRepository.findMany();
  }

  async findById(id: string) {
    const tripLog = await this.tripLogsRepository.findById(id);
    if (!tripLog) throw new NotFoundException("Trip log not found");
    return tripLog;
  }

  create(dto: CreateTripLogDto) {
    const { tripPlanId, ...data } = dto;
    return this.tripLogsRepository.create({
      ...data,
      tripPlan: { connect: { id: tripPlanId } },
    });
  }

  async update(id: string, dto: UpdateTripLogDto) {
    await this.findById(id);
    return this.tripLogsRepository.update(id, dto);
  }

  async delete(id: string) {
    await this.findById(id);
    return this.tripLogsRepository.delete(id);
  }
}
