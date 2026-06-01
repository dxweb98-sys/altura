import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateDestinationDto } from "./dto/create-destination.dto";
import { UpdateDestinationDto } from "./dto/update-destination.dto";
import { DestinationsRepository } from "./destinations.repository";

@Injectable()
export class DestinationsService {
  constructor(private readonly destinationsRepository: DestinationsRepository) {}

  findMany() {
    return this.destinationsRepository.findMany();
  }

  async findById(id: string) {
    const destination = await this.destinationsRepository.findById(id);
    if (!destination) throw new NotFoundException("Destination not found");
    return destination;
  }

  create(dto: CreateDestinationDto) {
    return this.destinationsRepository.create(dto);
  }

  async update(id: string, dto: UpdateDestinationDto) {
    await this.findById(id);
    return this.destinationsRepository.update(id, dto);
  }

  async delete(id: string) {
    await this.findById(id);
    return this.destinationsRepository.delete(id);
  }
}
