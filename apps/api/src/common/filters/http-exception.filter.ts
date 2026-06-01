import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Response } from "express";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = exception instanceof HttpException ? exception.getResponse() : "Internal server error";
    const message = typeof errorResponse === "string" ? errorResponse : (errorResponse as { message?: unknown }).message;

    response.status(status).json({
      success: false,
      statusCode: status,
      message: Array.isArray(message) ? message : message ?? "Internal server error",
      timestamp: new Date().toISOString(),
    });
  }
}
