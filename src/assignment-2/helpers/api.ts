import axios, { AxiosResponse } from "axios";

export const httpGetRequest = async <T>(
  url: string,
): Promise<AxiosResponse<T>> => {
  return await axios.get<T>(url);
};
