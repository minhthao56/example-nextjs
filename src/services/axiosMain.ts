import axios, { AxiosError, AxiosResponse } from "axios";

// const baseURL = process.env.URL_YOOT_JOB;

const axiosMain = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "content-type": "application/json",
    Authorization: "",
  },
});
axiosMain.interceptors.response.use(
  (res: AxiosResponse<{ content: any; message: string; result: number }>) => {
    // if (res.data.result === 0) {
    //   alert(`${res.data.message}`);
    // }
    return res;
  },
  (err: AxiosError) => {
    // if (err.response?.status === 401) {
    // logout();
    // }

    throw err;
  }
);
export default axiosMain;
