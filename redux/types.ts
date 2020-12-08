import { UserObject } from "../types";

export const LOGIN_SUCCESS = "user/loginSuccess";
export const REGISTER_SUCCESS = "user/registerSuccess";
export const LOGOUT_SUCCESS = "user/logoutSuccess";

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: UserObject;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: UserObject;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export type UserActionType =
  | LoginSuccessAction
  | LogoutSuccessAction
  | RegisterSuccessAction;
