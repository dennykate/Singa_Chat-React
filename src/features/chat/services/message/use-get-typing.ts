import useSocket from "@/hooks/use-socket";
import { setIsTyping } from "@/lib/redux/services/chat-slice";
import { RootState } from "@/lib/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface TypingType {
  sender: string;
}

const useGetTyping = () => {
  const socket = useSocket();
  const dispatch = useDispatch();
  const { chatUser } = useSelector((state: RootState) => state.chat);

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleTyping = (data: TypingType) => {
      if (data.sender === chatUser?._id) {
        dispatch(setIsTyping(true));
      }
    };

    const handleIsNotTyping = (data: TypingType) => {
      if (data.sender === chatUser?._id) {
        dispatch(setIsTyping(false));
      }
    };

    socket.on("receive-is-typing", handleTyping);
    socket.on("receive-is-not-typing", handleIsNotTyping);

    return () => {
      socket.off("receive-is-typing", handleTyping);
      socket.off("receive-is-not-typing", handleIsNotTyping);
    };
  }, [chatUser?._id, dispatch, socket]);
};

export default useGetTyping;
