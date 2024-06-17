import useSocket from "@/hooks/use-socket";
import { ReactionType } from "@/types/type";

import { useCallback } from "react";

interface SendMessageType {
  messageId: string;
  userId: string;
  reactionType: ReactionType;
}

const useRemoveReaction = () => {
  const socket = useSocket();

  const onRemoveReaction = useCallback(
    (data: SendMessageType) => {
      if (socket && socket.connected) {
        socket.emit("remove-reaction", data);
      } else {
        console.log("Socket is not connected");
      }
    },
    [socket]
  );

  return { onRemoveReaction };
};

export default useRemoveReaction;
