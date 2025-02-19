import axios from "axios";
import { User } from "src/assignment-2/types/user";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>(`${API_BASE_URL}/users`);
  return response.data;
};
