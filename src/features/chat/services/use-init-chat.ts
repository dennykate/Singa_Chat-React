import useProfile from "@/hooks/use-profile";
import useSocket from "@/hooks/use-socket";
import { useEffect } from "react";

const useInitChat = () => {
  const profile = useProfile();
  const socket = useSocket();

  useEffect(() => {
    if (socket && profile) {
      socket.emit("init-chat", profile?._id);
    }
  }, [socket, profile]);
};

export default useInitChat;
