import useSocket from "@/hooks/use-socket";
import { updateMessage } from "@/lib/redux/services/chat-slice";
import { updateLastMessage } from "@/lib/redux/services/user-slice";
import { MessageType } from "@/types/type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetUpdateMessage = () => {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleMessage = (message: MessageType) => {
      dispatch(updateMessage(message));
      dispatch(updateLastMessage(message));
    };

    socket.on("receive-update-message", handleMessage);

    return () => {
      socket.off("receive-update-message", handleMessage);
    };
  }, [dispatch, socket]);
};

export default useGetUpdateMessage;
