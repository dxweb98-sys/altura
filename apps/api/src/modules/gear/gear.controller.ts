import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { successResponse } from "../../common/responses/api-response";
import { CreateGearItemDto } from "./dto/create-gear-item.dto";
import { UpdateGearItemDto } from "./dto/update-gear-item.dto";
import { GearService } from "./gear.service";

@ApiTags("gear")
@Controller("gear")
export class GearController {
  constructor(private readonly gearService: GearService) {}

  @Get()
  async findMany() {
    return successResponse("Gear items retrieved", await this.gearService.findMany());
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return successResponse("Gear item retrieved", await this.gearService.findById(id));
  }

  @Post()
  async create(@Body() dto: CreateGearItemDto) {
    return successResponse("Gear item created", await this.gearService.create(dto));
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateGearItemDto) {
    return successResponse("Gear item updated", await this.gearService.update(id, dto));
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return successResponse("Gear item deleted", await this.gearService.delete(id));
  }
}
