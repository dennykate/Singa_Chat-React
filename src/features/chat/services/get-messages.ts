import axios from "@/lib/auth-axios";
import config from "@/lib/config/config";
import tryCatch from "@/utilities/try-catch";

const getMessages = tryCatch(async (sender, recipient, page) => {
  const res = await axios.get(
    config.baseApiURL +
      `/messages?sender=${sender}&recipient=${recipient}&page=${page}`
  );

  return res?.data;
});

export default getMessages;
