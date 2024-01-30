import axios, { AxiosInstance } from "axios";

const axiosInstance: any = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("maven_resume_token");

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    if (error.response) {
      if (
        error?.response?.status === 404 &&
        window.location.href.split("/")[
          window.location.href.split("/").length - 2
        ] === "editor"
      ) {
        window.location.href = "/page-not-fountd";
      }
      if (error.response.status === 401 || error.response.status === 403) {
        // clearBrowserStorage.removeUserRef();
        localStorage.setItem("authenticated", "false");
        window.location.href = "/";
      }
      throw error;
    } else {
      Promise.reject(error);
    }
  },
);

export default axiosInstance;
