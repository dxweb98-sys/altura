export type ApiResponse<T> = {
  success: true;
  message: string;
  data: T;
};

export const successResponse = <T>(message: string, data: T): ApiResponse<T> => ({
  success: true,
  message,
  data,
});
