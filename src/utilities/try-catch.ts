/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";

type AsyncFunction = (...args: any[]) => Promise<any>;

const tryCatch = <T extends AsyncFunction>(fn: T): T => {
  return async function (
    ...args: Parameters<T>
  ): Promise<ReturnType<T> | void> {
    try {
      return await fn(...args);
    } catch (error) {
      toast.error("Something went wrong");
      throw error;
    }
  } as T;
};

export default tryCatch;
