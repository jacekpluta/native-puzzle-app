import AsyncStorage from "@react-native-community/async-storage";
import axios, { AxiosResponse } from "axios";
import { backendUrl } from "../constants/BackendUrl";
import { ErrorObject, UserObject } from "../types";
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

export const loginUser = async (
  username: string,
  password: string
): Promise<any> => {
  return (dispatch: Dispatch) => {
    dispatch(loginUserRequest());
    console.log("git");
    axios
      .post(`${backendUrl}/api/users/login`, {
        username,
        password,
      })
      .then((response: AxiosResponse<UserObject>) => {
        const { data } = response;

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
          token: data.token,
          error: data.error,
        };

        if (data.token) {
          AsyncStorage.setItem("token", data.token);
        } else {
          console.log("Error, no token");
        }

        dispatch(loginUserSuccess(postResponse));
      })
      .catch((err) => {
        Alert.alert("Login Failed", "Unknown error occurred, please retry");

        dispatch(fetchUserFailure(unknownErrorResponse(err.message)));
      });
  };
};

export const registerUser = async (
  username: string,
  password: string
): Promise<any> => {
  return (dispatch: Dispatch) => {
    dispatch(registerUserRequest());

    axios
      .post(`${backendUrl}/api/users/login`, {
        username,
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
          token: data.token,
          error: data.error,
        };

        if (data.token) {
          AsyncStorage.setItem("token", data.token);
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
};

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
          token: data.token,
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
