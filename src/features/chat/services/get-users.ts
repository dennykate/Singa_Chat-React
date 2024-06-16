import axios from "@/lib/auth-axios";
import config from "@/lib/config/config";
import tryCatch from "@/utilities/try-catch";

const getUsers = tryCatch(async () => {
  const res = await axios.get(config.baseApiURL + "/users");

  return res?.data;
});

export default getUsers;
