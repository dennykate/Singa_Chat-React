import useSocket from "@/hooks/use-socket";
import { addNewMessage } from "@/lib/redux/services/chat-slice";
import { updateLastMessage } from "@/lib/redux/services/user-slice";
import { MessageType } from "@/types/type";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

interface SendMessageType {
  sender: string;
  recipient: string;
  content: string | undefined;
}

const useMessages = () => {
  const dispatch = useDispatch();
  const socket = useSocket();

  const onSendMessage = useCallback(
    (data: SendMessageType) => {
      if (socket && socket.connected) {
        console.log("Sending message: ", data);
        socket.emit("send-message", data);
      } else {
        console.log("Socket is not connected");
      }
    },
    [socket]
  );

  useEffect(() => {
    if (!socket) {
      console.log("Socket is not initialized");
      return;
    }

    console.log("Setting up socket listeners");

    const handleMessage = (message: MessageType) => {
      console.log("New message => ", message);
      dispatch(addNewMessage(message));
      dispatch(updateLastMessage(message));
    };

    socket.on("receive-message", handleMessage);

    return () => {
      socket.off("receive-message", handleMessage);
    };
  }, [dispatch, socket]);

  return { onSendMessage };
};

export default useMessages;
