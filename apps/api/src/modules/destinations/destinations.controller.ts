import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { successResponse } from "../../common/responses/api-response";
import { DestinationsService } from "./destinations.service";
import { CreateDestinationDto } from "./dto/create-destination.dto";
import { UpdateDestinationDto } from "./dto/update-destination.dto";

@ApiTags("destinations")
@Controller("destinations")
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Get()
  async findMany() {
    return successResponse("Destinations retrieved", await this.destinationsService.findMany());
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return successResponse("Destination retrieved", await this.destinationsService.findById(id));
  }

  @Post()
  async create(@Body() dto: CreateDestinationDto) {
    return successResponse("Destination created", await this.destinationsService.create(dto));
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateDestinationDto) {
    return successResponse("Destination updated", await this.destinationsService.update(id, dto));
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return successResponse("Destination deleted", await this.destinationsService.delete(id));
  }
}
