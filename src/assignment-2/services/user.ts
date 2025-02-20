import { User } from "src/assignment-2/types/user";
import { httpGetRequest } from "src/assignment-2/helpers/api";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (): Promise<User[]> => {
  const url = `${API_BASE_URL}/users`;
  const response = await httpGetRequest<User[]>(url);
  return response.data;
};
