import useSocket from "@/hooks/use-socket";
import { deleteMessage } from "@/lib/redux/services/chat-slice";
import { updateLastMessage } from "@/lib/redux/services/user-slice";
import { MessageType } from "@/types/type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface ReceiveDeleteMessageType {
  messageId: string;
  lastMessage: MessageType;
}

const useGetDeleteMessage = () => {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleMessage = ({
      messageId,
      lastMessage,
    }: ReceiveDeleteMessageType) => {
      dispatch(deleteMessage(messageId));

      dispatch(updateLastMessage(lastMessage));
    };

    socket.on("receive-delete-message", handleMessage);

    return () => {
      socket.off("receive-delete-message", handleMessage);
    };
  }, [dispatch, socket]);
};

export default useGetDeleteMessage;
