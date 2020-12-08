import axios, { AxiosResponse } from "axios";
import { backendUrl } from "../constants/BackendUrl";
import { UserObject } from "../types";

export const LoginWithToken = async (
  username: string,
  password: string
): Promise<UserObject> => {
  const resJson = await axios
    .post(`${backendUrl}/api/users/login`, {
      username,
      password,
    })
    .then((response: AxiosResponse<UserObject>) => {
      const { data } = response;
      if (data.error) {
        const postResponse: UserObject = {
          error: data.error,
          status: data.status,
          message: data.message,
        };
        return postResponse;
      }
      const postResponse: UserObject = {
        data: data.data,
        error: data.error,
        status: data.status,
        message: data.message,
        token: data.token,
      };
      return postResponse;
    });
  return resJson;
};

export const RegisterWithToken = async (
  username: string,
  password: string
): Promise<UserObject> => {
  const resJson = await axios
    .post(`${backendUrl}/api/users/register`, {
      username,
      password,
    })
    .then((response: AxiosResponse<UserObject>) => {
      const { data } = response;
      if (data.error) {
        const postResponse: UserObject = {
          error: data.error,
          status: data.status,
          message: data.message,
        };
        return postResponse;
      }
      const postResponse: UserObject = {
        data: data.data,
        error: data.error,
        status: data.status,
        message: data.message,
        token: data.token,
      };
      return postResponse;
    });
  return resJson;
};
