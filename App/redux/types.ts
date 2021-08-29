import { UserObject } from "../types/types";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const LOGOUT_USER = "LOGOUT_USER";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

interface LoginUserRequestAction {
  type: typeof LOGIN_USER_REQUEST;
  payload: UserObject;
}

interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: UserObject;
}

interface LoginUserFailureAction {
  type: typeof LOGIN_USER_FAILURE;
  payload: UserObject;
}

interface RegisterUserRequestAction {
  type: typeof REGISTER_USER_REQUEST;
  payload: UserObject;
}

interface RegisterUserSuccessAction {
  type: typeof REGISTER_USER_SUCCESS;
  payload: UserObject;
}

interface RegisterUserFailureAction {
  type: typeof REGISTER_USER_FAILURE;
  payload: UserObject;
}

interface FetchUserRequestAction {
  type: typeof FETCH_USER_REQUEST;
  payload: UserObject;
}

interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: UserObject;
}

interface FetchUserFailureAction {
  type: typeof FETCH_USER_FAILURE;
  payload: UserObject;
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_USER;
}

export type UserActionType =
  | LoginUserRequestAction
  | LoginUserSuccessAction
  | LoginUserFailureAction
  | RegisterUserRequestAction
  | RegisterUserSuccessAction
  | RegisterUserFailureAction
  | FetchUserRequestAction
  | FetchUserFailureAction
  | FetchUserSuccessAction
  | LogoutSuccessAction;
