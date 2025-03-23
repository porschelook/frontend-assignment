import axios from "axios";
import { User } from "../types/userTypes";

const API_URL = "https://dummyjson.com/users";

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};
