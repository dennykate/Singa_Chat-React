import useSocket from "@/hooks/use-socket";
import { useCallback } from "react";

const useDeleteMessage = () => {
  const socket = useSocket();

  const onDeleteMessage = useCallback(
    (messageId: string) => {
      console.log("socket => ", socket);
      if (socket && socket.connected) {
        socket.emit("delete-message", messageId);
      } else {
        console.log("Socket is not connected");
      }
    },
    [socket]
  );

  return { onDeleteMessage };
};

export default useDeleteMessage;
