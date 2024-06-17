import useSocket from "@/hooks/use-socket";
import { useCallback } from "react";

const useDeleteMessage = () => {
  const socket = useSocket();

  const onDeleteMessage = useCallback(
    (messageId: string) => {
      if (socket && socket.connected) {
        socket.emit("delete-message", messageId);
      } 
    },
    [socket]
  );

  return { onDeleteMessage };
};

export default useDeleteMessage;
