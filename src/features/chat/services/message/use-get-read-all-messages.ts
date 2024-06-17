import useSocket from "@/hooks/use-socket";
import { readAllMessages } from "@/lib/redux/services/chat-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetReadAllMessages = () => {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleMessage = (isCorrect: boolean) => {
      if (isCorrect) {
        dispatch(readAllMessages());
      }
    };

    socket.on("receive-read-all-messages", handleMessage);

    return () => {
      socket.off("receive-read-all-messages", handleMessage);
    };
  }, [dispatch, socket]);
};

export default useGetReadAllMessages;
