import useSocket from "@/hooks/use-socket";

import { useCallback } from "react";


interface SendMessageType {
  sender: string;
  recipient: string;
  content: string | undefined;
}



const useSendMessage = () => {
  const socket = useSocket();

  const onSendMessage = useCallback(
    (data: SendMessageType) => {
      if (socket && socket.connected) {
        socket.emit("send-message", data);
      } 
    },
    [socket]
  );



  return { onSendMessage };
};

export default useSendMessage;
