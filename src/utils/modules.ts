import axios from "axios";
import config from "../config";

export const getModulesByInterest = async (interest: string, token: string) => {
  try {
    const response = await axios.get(
      `${config.API_URL}/api/modules/${interest}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data.length === 0 ? null : response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getCardsFromModule = async (moduleId: string, token: string) => {
  try {
    const response = await axios.get(
      `${config.API_URL}/api/cards/${moduleId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data.length === 0 ? null : response.data.data;
  } catch (error) {
    throw error;
  }
};

export const markModuleAsCompleted = async (
  moduleId: string,
  token: string
) => {
  try {
    const response = await axios.post(
      `${config.API_URL}/api/module/complete/${moduleId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data.length === 0 ? false : response.data.data;
  } catch (error) {
    throw error;
  }
};
