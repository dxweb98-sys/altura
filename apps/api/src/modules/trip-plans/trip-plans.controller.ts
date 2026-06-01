import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { successResponse } from "../../common/responses/api-response";
import { CreateTripPlanDto } from "./dto/create-trip-plan.dto";
import { UpdateTripPlanDto } from "./dto/update-trip-plan.dto";
import { TripPlansService } from "./trip-plans.service";

@ApiTags("trip-plans")
@Controller("trip-plans")
export class TripPlansController {
  constructor(private readonly tripPlansService: TripPlansService) {}

  @Get()
  async findMany() {
    return successResponse("Trip plans retrieved", await this.tripPlansService.findMany());
  }

  @Get(":id")
  async findById(@Param("id") id: string) {
    return successResponse("Trip plan retrieved", await this.tripPlansService.findById(id));
  }

  @Post()
  async create(@Body() dto: CreateTripPlanDto) {
    return successResponse("Trip plan created", await this.tripPlansService.create(dto));
  }

  @Patch(":id")
  async update(@Param("id") id: string, @Body() dto: UpdateTripPlanDto) {
    return successResponse("Trip plan updated", await this.tripPlansService.update(id, dto));
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return successResponse("Trip plan deleted", await this.tripPlansService.delete(id));
  }
}
