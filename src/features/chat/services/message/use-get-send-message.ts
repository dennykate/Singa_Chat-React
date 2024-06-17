import useSocket from "@/hooks/use-socket";
import { addNewMessage } from "@/lib/redux/services/chat-slice";
import { updateLastMessage } from "@/lib/redux/services/user-slice";
import { MessageType } from "@/types/type";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { toast } from "react-toastify";
import useProfile from "@/hooks/use-profile";

const useGetSendMessage = () => {
  const socket = useSocket();
  const profile = useProfile();
  const dispatch = useDispatch();
  const { chatUser } = useSelector((state: RootState) => state.chat);

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleMessage = (message: MessageType) => {
      dispatch(updateLastMessage(message));

      if (
        chatUser?._id !== message?.sender?._id &&
        profile?._id !== message?.sender?._id
      ) {
        toast.success(`${message?.sender?.username} send a new message`);
      }

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
