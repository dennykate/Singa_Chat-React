import config from "@/config/config";
import axios from "axios";

const googleAuth = async (accessToken: string) => {
  try {
    const res = await axios.post(config.apiBaseURL + "/auth/google", {
      access_token: accessToken,
    });

    return res.data;
  } catch (error) {
    console.log("error => ", error);
  }
};

export default googleAuth;
