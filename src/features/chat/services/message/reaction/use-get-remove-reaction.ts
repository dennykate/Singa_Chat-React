import useSocket from "@/hooks/use-socket";
import { removeReaction } from "@/lib/redux/services/chat-slice";
import { ReactionType } from "@/types/type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface ReceiveRemoveReactionType {
  messageId: string;
  reactionUserId: string;
  reactionType: ReactionType;
}

const useGetRemoveReaction = () => {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleReaction = (data: ReceiveRemoveReactionType) => {
      dispatch(removeReaction(data));
    };

    socket.on("receive-remove-reaction", handleReaction);

    return () => {
      socket.off("receive-remove-reaction", handleReaction);
    };
  }, [dispatch, socket]);
};

export default useGetRemoveReaction;
