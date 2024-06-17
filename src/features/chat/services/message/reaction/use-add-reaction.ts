import useSocket from "@/hooks/use-socket";
import { ReactionType } from "@/types/type";

import { useCallback } from "react";

interface SendMessageType {
  userId: string;
  messageId: string;
  reactionType: ReactionType;
}

const useAddReaction = () => {
  const socket = useSocket();

  const onAddReaction = useCallback(
    (data: SendMessageType) => {
      if (socket && socket.connected) {
        socket.emit("add-reaction", data);
      } else {
        console.log("Socket is not connected");
      }
    },
    [socket]
  );

  return { onAddReaction };
};

export default useAddReaction;
