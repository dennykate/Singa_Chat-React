import config from "@/lib/config/config";
import axios from "axios";
import { toast } from "react-toastify";

const googleAuth = async (accessToken: string) => {
  try {
    const res = await axios.post(config.baseApiURL + "/auth/google", {
      access_token: accessToken,
    });

    return res.data;
  } catch (error) {
    toast.error("Something went wrong");
  }
};

export default googleAuth;
