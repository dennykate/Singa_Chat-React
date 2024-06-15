import useProfile from "@/hooks/use-profile";
import useSocket from "@/hooks/use-socket";
import { useEffect } from "react";

const useInitChat = () => {
  const socket = useSocket();
  const profile = useProfile();

  useEffect(() => {
    if (profile && socket) {
      socket.emit("init-chat", profile._id);
    }
  }, [socket, profile]);
};

export default useInitChat;
