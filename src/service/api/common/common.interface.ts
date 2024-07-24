import { Method } from "axios";

export interface IRequestOptions {
  type: Method;
  headers?: Record<string, string>;
  params?: {};
}

export interface IApiResponseData {
  [key: string]: any;
}
