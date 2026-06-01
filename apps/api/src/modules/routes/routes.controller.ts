import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { successResponse } from "../../common/responses/api-response";
import { CreateRouteDto } from "./dto/create-route.dto";
import { UpdateRouteDto } from "./dto/update-route.dto";
import { RoutesService } from "./routes.service";

@ApiTags("routes")
@Controller("routes")
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  async findMany(@Query("destinationId") destinationId?: string) {
    return successResponse("Routes retrieved", await this.routesService.findMany(destinationId));
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return successResponse("Route retrieved", await this.routesService.findById(id));
  }

  @Post()
  async create(@Body() dto: CreateRouteDto) {
    return successResponse("Route created", await this.routesService.create(dto));
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateRouteDto) {
    return successResponse("Route updated", await this.routesService.update(id, dto));
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return successResponse("Route deleted", await this.routesService.delete(id));
  }
}
