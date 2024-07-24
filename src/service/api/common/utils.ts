import { AxiosResponse } from 'axios';
import { IApiResponseData } from './common.interface';



export const decodeResponse = (response: AxiosResponse<IApiResponseData> | string): IApiResponseData | undefined => {
  if (!response) {
    return;
  }

  let data: IApiResponseData | undefined;

  if (typeof response === "string") {
    try {
      data = JSON.parse(response);
    } catch (error) {
      console.error("Failed to parse JSON response:", error);
      data = undefined;
    }
  } else if (response && typeof response === "object" && 'data' in response) {
    data = response.data;
  }

  return data;
};
