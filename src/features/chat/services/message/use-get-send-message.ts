import useSocket from "@/hooks/use-socket";
import { addNewMessage } from "@/lib/redux/services/chat-slice";
import { updateLastMessage } from "@/lib/redux/services/user-slice";
import { MessageType } from "@/types/type";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";

const useGetSendMessage = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const { chatUser } = useSelector((state: RootState) => state.chat);

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleMessage = (message: MessageType) => {
      console.log("receive message => ", message);
      dispatch(updateLastMessage(message));

      if (
        chatUser?._id === message?.sender?._id ||
        chatUser?._id === message?.recipient?._id
      ) {
        dispatch(addNewMessage(message));
      }
    };

    socket.on("receive-message", handleMessage);

    return () => {
      socket.off("receive-message", handleMessage);
    };
  }, [dispatch, socket, chatUser]);
};

export default useGetSendMessage;
