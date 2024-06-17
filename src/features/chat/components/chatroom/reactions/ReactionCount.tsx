import { IReaction, MessageType } from "@/types/type";
import Reaction from "./Reaction";
import { useCallback, useEffect, useState } from "react";

interface PropsType {
  data: MessageType;
}

const ReactionCount: React.FC<PropsType> = ({ data }) => {
  const [reactions, setReactions] = useState<IReaction[]>([]);

  const generateReactionCount = useCallback(() => {
    const primaryReactions = ["love", "haha", "wow"];
    const rcts: IReaction[] = [];

    primaryReactions.forEach((type) => {
      const reaction = data?.reactions?.find(
        (reaction: IReaction) => reaction.type === type
      );
      if (reaction) rcts.push(reaction);
    });

    data.reactions.forEach((reaction: IReaction) => {
      if (rcts.length < 3 && !primaryReactions.includes(reaction.type)) {
        rcts.push(reaction);
      }
    });

    setReactions(rcts);
  }, [data]);

  useEffect(() => {
    generateReactionCount();
  }, [generateReactionCount]);

  return (
    <div className="bg-primary-300 hover:bg-primary-400 py-1 px-2 rounded-full flex gap-3 items-center cursor-pointer">
      <div className="flex items-center">
        {reactions.map((reaction: IReaction) => (
          <Reaction
            key={`${reaction.user._id}-${reaction.type}`}
            type={reaction.type}
          />
        ))}
      </div>
      <p className="text-[13px] text-primary-900 translate-y-[1px]">
        {data.totalReactions}
      </p>
    </div>
  );
};

export default ReactionCount;
