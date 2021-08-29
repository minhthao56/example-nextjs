import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiTest } from "../../services";

export const doGetTodos = createAsyncThunk("todos@doGetTodos", async () => {
  return await (
    await apiTest.getTodos()
  ).data;
});

export const doGetOneTodo = createAsyncThunk(
  "todo@doGetOneTodo",
  async (params: any) => {
    return await (
      await apiTest.getOneTodo(params)
    ).data;
  }
);
