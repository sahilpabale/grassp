import axios from "axios";
import { UserSignUp, UserLogin } from "../interfaces/auth.interface";
import config from "../config";

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

export const loginUser = async (userData: UserLogin) => {};
