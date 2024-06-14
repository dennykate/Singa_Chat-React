// src/hooks/useNewUser.ts
import useSocket from "@/hooks/use-socket";

const useNewUser = () => {
  const socket = useSocket();

  const newUser = (accessToken: string) => {
    if (socket && socket.connected) {
      socket.emit("new-user", { accessToken });
    } else {
      console.warn("Socket is not connected, cannot emit new-user event");
    }
  };

  return newUser;
};

export default useNewUser;
