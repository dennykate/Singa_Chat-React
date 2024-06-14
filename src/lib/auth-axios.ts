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
    console.error("No token found in storage.");
    throw new Error("No token found.");
  }

  console.log("Token found:", token);

  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`, // Capitalized the 'A' in Authorization
    },
  });

  axiosInstance.interceptors.request.use((req) => {
    try {
      const decodedData = jwtDecode(token as string) as any;
      console.log("Decoded data:", decodedData);

      const isExpired = decodedData.exp - Math.floor(Date.now() / 1000) < 1;

      if (isExpired) {
        encryptStorage.remove("accessToken");
        encryptStorage.remove("profile");
        throw new Error("Session expired. Redirecting to login.");
      }

      return req;
    } catch (error) {
      console.error("Error decoding token:", error);
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
        if (error.response.status === 401) {
          encryptStorage.remove("accessToken");
          encryptStorage.remove("profile");
        } else if (error.response.status >= 400) {
          console.error("Error response:", error);
        }
      } else {
        console.error("Error without response:", error);
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance as AxiosStatic;
};

export default authAxios;
