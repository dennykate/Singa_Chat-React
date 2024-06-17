// src/hooks/useNewUser.ts
import useSocket from "@/hooks/use-socket";

const useNewUser = () => {
  const socket = useSocket();

  const newUser = (accessToken: string) => {
    if (socket && socket.connected) {
      socket.emit("new-user", { accessToken });
    }
  };

  return newUser;
};

export default useNewUser;
