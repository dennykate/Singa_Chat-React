import useSocket from "@/hooks/use-socket";

import { useCallback } from "react";

interface SendMessageType {
  sender: string;
  recipient: string;
}

const useReadAllMessages = () => {
  const socket = useSocket();

  const onReadAllMessages = useCallback(
    (data: SendMessageType) => {
      if (socket && socket.connected) {
        socket.emit("read-all-messages", data);
      }
    },
    [socket]
  );

  return { onReadAllMessages };
};

export default useReadAllMessages;
