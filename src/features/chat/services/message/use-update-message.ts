import useSocket from "@/hooks/use-socket";

import { useCallback } from "react";

interface UpdateMessageType {
  messageId: string;
  content: string;
}

const useUpdateMessage = () => {
  const socket = useSocket();

  const onUpdateMessage = useCallback(
    (data: UpdateMessageType) => {
      if (socket && socket.connected) {
        console.log("Sending message: ", data);
        socket.emit("update-message", data);
      } else {
        console.log("Socket is not connected");
      }
    },
    [socket]
  );

  return { onUpdateMessage };
};

export default useUpdateMessage;
