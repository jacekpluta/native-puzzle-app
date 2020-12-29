import {
  UserActionType,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./types";
import { UserObject, ErrorObject } from "../types";

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

export const loginUserSuccess = (user: UserObject) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user,
  };
};

export const loginUserFailure = (error: ErrorObject) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};

export const registerUserRequest = () => {
  return {
    type: REGISTER_USER_REQUEST,
  };
};

export const registerUserSuccess = (user: UserObject) => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: user,
  };
};

export const registerUserFailure = (error: ErrorObject) => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user: UserObject) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

export const fetchUserFailure = (error: ErrorObject) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};
