import { createSlice } from "@reduxjs/toolkit";
import { doGetOneTodo, doGetTodos } from "../asyncActions";

interface IinitialState {
  listTodos?: Array<any>;
  oneTodo?: any;
}

const initialState = {
  listTodos: [],
  oneTodo: [],
} as IinitialState;

const slice = createSlice({
  name: "test@",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //doGetTodos
    builder.addCase(doGetTodos.fulfilled, (state, action) => {
      state.listTodos = action.payload;
    });

    //doGetOneTodo
    builder.addCase(doGetOneTodo.fulfilled, (state, action) => {
      state.oneTodo = action.payload;
    });
  },
});

const { reducer } = slice;

export default reducer;
