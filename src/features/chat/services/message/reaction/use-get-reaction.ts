import useSocket from "@/hooks/use-socket";
import { addReaction } from "@/lib/redux/services/chat-slice";
import { ReactionType } from "@/types/type";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface ReceiveAddReactionType {
  messageId: string;
  reactionUserId: string;
  reactionType: ReactionType;
}

const useGetReaction = () => {
  const socket = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) {
      return;
    }

    const handleReaction = (data: ReceiveAddReactionType) => {
      dispatch(addReaction(data));
    };

    socket.on("receive-add-reaction", handleReaction);

    return () => {
      socket.off("receive-add-reaction", handleReaction);
    };
  }, [dispatch, socket]);
};

export default useGetReaction;
