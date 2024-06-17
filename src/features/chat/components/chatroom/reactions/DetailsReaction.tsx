import { IReaction, MessageType } from "@/types/type";
import RemoveReactionButton from "./RemoveReactionButton";
import React from "react";

interface PropsType {
  data: MessageType;
}

const DetailsReaction: React.FC<PropsType> = ({ data }) => {
  return (
    <section>
      <div className="w-full flex items-center justify-between px-4 py-2">
        <h6 className="text-sm font-[400]">Reactions</h6>
      </div>
      <div className="flex flex-col gap-[2px] w-[260px] max-h-[350px] overflow-x-auto scrollbar-thin scrollbar-thumb-primary relative scrollbar-track-transparent">
        {data?.reactions?.map((reaction: IReaction) => (
          <RemoveReactionButton
            key={reaction.type + reaction.user._id}
            reaction={reaction}
            data={data}
          />
        ))}
      </div>
    </section>
  );
};

export default DetailsReaction;
