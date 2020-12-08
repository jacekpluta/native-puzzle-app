/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import UserReducer from "./reducer";

const rootReducer = combineReducers({
  user: UserReducer,
});

const initialState = {
  user: undefined,
};

const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer, initialState, enhancer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
