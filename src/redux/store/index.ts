import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import modal from "../slice/modalSlice";
import test from "../slice/testSlice";

export function makeStore() {
  return configureStore({
    reducer: { modal, test },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
