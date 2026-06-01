import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { successResponse } from "../../common/responses/api-response";

@ApiTags("health")
@Controller("health")
export class HealthController {
  @Get()
  check() {
    return successResponse("API is healthy", {
      name: "Altura API",
      status: "ok",
      timestamp: new Date().toISOString(),
    });
  }
}
