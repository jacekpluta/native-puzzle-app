import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  UserActionType,
} from "./types";
import { UserObject } from "../types";

export type UserState = UserObject | null;

const initialState: UserState = {
  error: false,
  status: 200,
  message: "",
  token: "",
  loading: false,
};

const userReducer = (
  state = initialState,
  action: UserActionType
): UserState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default userReducer;
