import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  UserActionType,
} from "./types";
import { UserActionObject } from "../types/types";

export const initialUserState: UserActionObject = {
  user: null,
  status: 0,
  message: "",
  token: "",
  loading: false,
  error: false,
};

const authUserReducer = (
  state = initialUserState,
  action: UserActionType
): UserActionObject => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        user: null,
        token: "",
        message: "",
        loading: true,
        error: false,
        status: 0,
      };
    case LOGIN_USER_SUCCESS:
      return {
        user: action.payload.user,
        token: action.payload.accessToken,
        message: action.payload.message,
        loading: false,
        error: action.payload.error,
        status: action.payload.status,
      };
    case LOGIN_USER_FAILURE:
      return {
        user: null,
        token: "",
        message: action.payload.message,
        loading: false,
        error: action.payload.error,
        status: action.payload.status,
      };

    case REGISTER_USER_REQUEST:
      return {
        ...state,
        user: null,
        token: "",
        message: "",
        loading: true,
        error: false,
        status: 0,
      };
    case REGISTER_USER_SUCCESS:
      return {
        user: action.payload.user,
        token: action.payload.accessToken,
        message: action.payload.message,
        loading: false,
        error: action.payload.error,
        status: action.payload.status,
      };
    case REGISTER_USER_FAILURE:
      return {
        user: null,
        token: "",
        message: action.payload.message,
        loading: false,
        error: action.payload.error,
        status: action.payload.status,
      };

    case LOGOUT_USER:
      return {
        loading: false,
        token: "",
        message: "",
        user: null,
        error: false,
        status: 200,
      };

    case FETCH_USER_REQUEST:
      return {
        ...state,
        user: null,
        token: "",
        message: "",
        loading: true,
        error: false,
        status: 0,
      };
    case FETCH_USER_SUCCESS:
      return {
        user: action.payload.user,
        token: action.payload.accessToken,
        message: action.payload.message,
        loading: false,
        error: action.payload.error,
        status: action.payload.status,
      };
    case FETCH_USER_FAILURE:
      return {
        user: null,
        token: "",
        message: action.payload.message,
        loading: false,
        error: action.payload.error,
        status: action.payload.status,
      };

    default:
      return state;
  }
};
export default authUserReducer;
