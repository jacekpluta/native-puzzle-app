/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import authUserReducer, { initialUserState } from "./reducer";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

export type ReduxState = ReturnType<typeof rootReducer>;
// export type AuthStateType = ReturnType<typeof authReducer>;

export type TypedDispatch = typeof store.dispatch;
export type TypedThunk<R = void> = ThunkAction<R, ReduxState, unknown, Action>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;

const rootReducer = combineReducers({
  user: authUserReducer,
});

const initialState = {
  user: initialUserState,
};

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
