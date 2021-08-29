import AsyncStorage from "@react-native-community/async-storage";
import axios, { AxiosResponse } from "axios";
import { backendUrl } from "../constants/BackendUrl";
import { ErrorObject, UserObject } from "../types/types";
import { Alert } from "react-native";
import { Dispatch } from "redux";
import {
  loginUserRequest,
  loginUserFailure,
  loginUserSuccess,
  registerUserFailure,
  registerUserRequest,
  registerUserSuccess,
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../redux/actions";

const unknownErrorResponse = (errorMessage: string) => {
  return {
    status: 500,
    message: errorMessage,
  };
};

export function loginUser(username: string, password: string) {
  return (dispatch: Dispatch) => {
    dispatch(registerUserRequest());

    return axios
      .post(`http://localhost:3000/auth/signin`, {
        email: username,
        password: password,
      })
      .then((response: AxiosResponse<UserObject>) => {
        const { data } = response;
        console.log(data);
        if (data.error) {
          const errorResponse: ErrorObject = {
            status: data.status,
            message: data.message,
          };
          dispatch(loginUserFailure(errorResponse));
        }

        const postResponse: UserObject = {
          user: data.user,
          status: data.status,
          message: data.message,
          accessToken: data.accessToken,
          error: data.error,
        };

        if (data.accessToken) {
          AsyncStorage.setItem("token", data.accessToken);
        } else {
          console.log("Error, no token");
        }

        dispatch(loginUserSuccess(postResponse));
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Login Failed", "Unknown error occurred, please retry");
        dispatch(fetchUserFailure(unknownErrorResponse(err.message)));
      });
  };
}

export function registerUser(
  username: string,
  password: string,
  email: string
) {
  return (dispatch: Dispatch) => {
    dispatch(registerUserRequest());

    return axios
      .post(`http://localhost:3000/auth/signup`, {
        username,
        email,
        password,
      })
      .then((response: AxiosResponse<UserObject>) => {
        const { data } = response;

        if (data.error) {
          const errorResponse: ErrorObject = {
            status: data.status,
            message: data.message,
          };
          dispatch(registerUserFailure(errorResponse));
        }

        const postResponse: UserObject = {
          user: data.user,
          status: data.status,
          message: data.message,
          accessToken: data.accessToken,
          error: data.error,
        };

        if (data.accessToken) {
          AsyncStorage.setItem("token", data.accessToken);
        } else {
          console.log("Error, no token");
        }

        dispatch(registerUserSuccess(postResponse));
      })
      .catch((err) => {
        Alert.alert("Login Failed", "Unknown error occurred, please retry");
        dispatch(fetchUserFailure(unknownErrorResponse(err.message)));
      });
  };
}

export const logoutUser = () => {
  AsyncStorage.removeItem("token");
};

export const getUserByToken = async (token: string): Promise<any> => {
  return (dispatch: Dispatch) => {
    dispatch(fetchUserRequest());

    axios
      .post(`${backendUrl}/api/users/`, {
        token,
      })
      .then((response: AxiosResponse<UserObject>) => {
        const { data } = response;

        if (data.error) {
          const errorResponse: ErrorObject = {
            status: data.status,
            message: data.message,
          };
          dispatch(fetchUserFailure(errorResponse));
        }

        const postResponse: UserObject = {
          user: data.user,
          status: data.status,
          message: data.message,
          accessToken: data.accessToken,
          error: data.error,
        };

        dispatch(fetchUserSuccess(postResponse));
      })
      .catch((err) => {
        Alert.alert("Login Failed", "Unknown error occurred, please retry");

        dispatch(fetchUserFailure(unknownErrorResponse(err.message)));
      });
  };
};
