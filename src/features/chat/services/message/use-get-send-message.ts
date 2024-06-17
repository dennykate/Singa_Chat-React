import useSocket from "@/hooks/use-socket";
import { addNewMessage } from "@/lib/redux/services/chat-slice";
import { updateLastMessage } from "@/lib/redux/services/user-slice";
import { MessageType } from "@/types/type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetSendMessage = () => {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleMessage = (message: MessageType) => {
      console.log("new message  => ", message);
      dispatch(addNewMessage(message));
      dispatch(updateLastMessage(message));
    };

    socket.on("receive-message", handleMessage);

    return () => {
      socket.off("receive-message", handleMessage);
    };
  }, [dispatch, socket]);
};

export default useGetSendMessage;
