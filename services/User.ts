import axios, { AxiosResponse } from "axios";
import { backendUrl } from "../constants/BackendUrl";
import { UserObject } from "../types";

export const GetUserByToken = async (token: string): Promise<UserObject> => {
  const resJson = await axios
    .post(`${backendUrl}/api/users/`, {
      token,
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
        error: data.error,
        status: data.status,
        message: data.message,
        data: data.data,
      };
      return postResponse;
    });

  return resJson;
};
