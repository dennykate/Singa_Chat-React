/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosStatic } from "axios";
import { EncryptStorage } from "use-encrypt-storage";
import config from "./config/config";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";

const authAxios = (): AxiosStatic => {
  const encryptStorage = new EncryptStorage(config.encryptStorageSecretKey);
  const token = encryptStorage.get("accessToken");

  if (!token) {
    throw new Error("No token found.");
  }


  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`, // Capitalized the 'A' in Authorization
    },
  });

  axiosInstance.interceptors.request.use((req) => {
    try {
      const decodedData = jwtDecode(token as string) as any;

      const isExpired = decodedData.exp - Math.floor(Date.now() / 1000) < 1;

      if (isExpired) {
        encryptStorage.remove("accessToken");
        encryptStorage.remove("refreshToken");
        encryptStorage.remove("profile");
        encryptStorage.remove("chatUser");

        window.location.reload();
      }

      return req;
    } catch (error) {
      throw new Error("Invalid token.");
    }
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      if (res.status < 300 && res.config.method !== "get") {
        toast.success("Success");
      }
      return res;
    },
    (error) => {
      if (error.response) {
        toast.error(error.response.data?.message || "Something went wrong");
        if (error.response.status === 403) {
          encryptStorage.remove("accessToken");
          encryptStorage.remove("refreshToken");
          encryptStorage.remove("profile");
          encryptStorage.remove("chatUser");

          window.location.reload();
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance as AxiosStatic;
};

const autAxios = authAxios();

export default autAxios;
