import useProfile from "@/hooks/use-profile";
import useSocket from "@/hooks/use-socket";
import { RootState } from "@/lib/redux/store";

import { useCallback } from "react";
import { useSelector } from "react-redux";

const useTyping = () => {
  const socket = useSocket();
  const profile = useProfile();
  const { chatUser } = useSelector((state: RootState) => state.chat);

  const onTyping = useCallback(
    (type: "is-typing" | "is-not-typing") => {
      if (socket && socket.connected) {
        socket.emit(type, { recipient: chatUser?._id, sender: profile?._id });
      } else {
        console.log("Socket is not connected");
      }
    },
    [socket]
  );

  return { onTyping };
};

export default useTyping;
