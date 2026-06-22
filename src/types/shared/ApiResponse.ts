export type ApiErrorDetail =
  | string
  | string[]
  | Record<string, string | string[]>;

export interface IApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface IApiError {
  message: string;
  code?: string;
  details?: ApiErrorDetail;
}
