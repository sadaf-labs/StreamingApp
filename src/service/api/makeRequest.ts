import Axios, { AxiosRequestConfig, Method } from "axios";
import { decodeResponse } from "./utils";
import { IRequestOptions } from "./media-api-interface";


export const makeRequest = (api: string, options: IRequestOptions): Promise<any> => {
  return new Promise((resolve, reject) => {
    rawHttp(options.type, api, options)
      .then(response => {
        resolve(decodeResponse(response));
      })
      .catch(error => reject(error));
  });
};

const rawHttp = (method: Method, url: string, options: IRequestOptions) => {
  const config: AxiosRequestConfig = {
    method,
    url,
    headers: options.headers ? options.headers : {},
    data: options.params
  };

  return Axios(config);
};
