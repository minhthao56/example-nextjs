import axiosMain from "./axiosMain";

export const apiTest = {
  getTodos: () => {
    const url = "todos";
    return axiosMain.get(url);
  },
  getOneTodo: (id: any) => {
    const url = `todos/${id}`;
    return axiosMain.get(url);
  },
};
