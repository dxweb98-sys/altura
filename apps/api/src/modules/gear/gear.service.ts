import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateGearItemDto } from "./dto/create-gear-item.dto";
import { UpdateGearItemDto } from "./dto/update-gear-item.dto";
import { GearRepository } from "./gear.repository";

@Injectable()
export class GearService {
  constructor(private readonly gearRepository: GearRepository) {}

  findMany() {
    return this.gearRepository.findMany();
  }

  async findById(id: string) {
    const gearItem = await this.gearRepository.findById(id);
    if (!gearItem) throw new NotFoundException("Gear item not found");
    return gearItem;
  }

  create(dto: CreateGearItemDto) {
    return this.gearRepository.create(dto);
  }

  async update(id: string, dto: UpdateGearItemDto) {
    await this.findById(id);
    return this.gearRepository.update(id, dto);
  }

  async delete(id: string) {
    await this.findById(id);
    return this.gearRepository.delete(id);
  }
}
