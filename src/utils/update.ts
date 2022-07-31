import axios from "axios";
import config from "../config";
import { getToken } from "./token";

export const updateInterests = async (
  interests: string[],
  platform: string
) => {
  try {
    const token = getToken(platform);
    if (token) {
      const response = await axios.put(
        `${config.API_URL}/api/auth/interests`,
        {
          interests,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data.data;
    } else return false;
  } catch (error) {
    throw error;
  }
};
