import axios from "axios";
import { UserSignUp, UserLogin } from "../interfaces/auth.interface";
import config from "../config";
import { getToken } from "../utils/token";

export const signupUser = async (userData: UserSignUp) => {
  try {
    const response = await axios.post(
      `${config.API_URL}/api/auth/signup`,
      userData
    );
    return response.data;
  } catch (error) {
    return false;
  }
};

export const loginUser = async (userData: UserLogin) => {
  try {
    const response = await axios.post(
      `${config.API_URL}/api/auth/login`,
      userData
    );
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getUser = async (platform: string) => {
  try {
    const token = getToken(platform);
    if (token) {
      const response = await axios.get(`${config.API_URL}/api/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data;
    } else return false;
  } catch (error) {
    return false;
  }
};

export const getUserInterests = async (token: string) => {
  try {
    const response = await axios.get(`${config.API_URL}/api/interests`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    return false;
  }
};
