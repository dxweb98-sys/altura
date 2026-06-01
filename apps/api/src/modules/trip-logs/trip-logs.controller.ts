import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { successResponse } from "../../common/responses/api-response";
import { CreateTripLogDto } from "./dto/create-trip-log.dto";
import { UpdateTripLogDto } from "./dto/update-trip-log.dto";
import { TripLogsService } from "./trip-logs.service";

@ApiTags("trip-logs")
@Controller("trip-logs")
export class TripLogsController {
  constructor(private readonly tripLogsService: TripLogsService) {}

  @Get()
  async findMany() {
    return successResponse("Trip logs retrieved", await this.tripLogsService.findMany());
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return successResponse("Trip log retrieved", await this.tripLogsService.findById(id));
  }

  @Post()
  async create(@Body() dto: CreateTripLogDto) {
    return successResponse("Trip log created", await this.tripLogsService.create(dto));
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateTripLogDto) {
    return successResponse("Trip log updated", await this.tripLogsService.update(id, dto));
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return successResponse("Trip log deleted", await this.tripLogsService.delete(id));
  }
}
