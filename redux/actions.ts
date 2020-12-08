import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  UserActionType,
} from "./types";
import { UserObject } from "../types";

export const loginSuccess = (obj: UserObject): UserActionType => ({
  type: LOGIN_SUCCESS,
  payload: obj,
});

export const registerSuccess = (obj: UserObject): UserActionType => ({
  type: REGISTER_SUCCESS,
  payload: obj,
});

export const logoutSuccess = (): UserActionType => ({
  type: LOGOUT_SUCCESS,
});
