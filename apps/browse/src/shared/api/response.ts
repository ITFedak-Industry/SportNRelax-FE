export type ApiResponse<T = unknown> = {
  data: T;
  errors: { name: string; message?: string }[];
};
