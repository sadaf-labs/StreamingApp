import { Method } from 'axios';
import { makeRequest } from './makeRequest';
import { MEDIA_API } from '../../utils/constant';


export const fetchMediaCollection = async () => {
  const api = MEDIA_API;
  const options = {
    headers: { "Content-type": "application/json" },
    params: {},
    type: "GET" as Method
  };
  try {
    const response = await makeRequest(api, options);
    return response;
  } catch (error) {
    console.error('Error in fetchMediaCollection', error);
    throw error;
  }
};
