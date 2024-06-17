import { LuSmilePlus } from "react-icons/lu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ReactionButton } from "./ReactionButton";
import ReactionCount from "./ReactionCount";
import DetailsReaction from "./DetailsReaction";
import { twMerge } from "tailwind-merge";
import { reactions } from "@/features/chat/data";
import { MessageType, ReactionType } from "@/types/type";

interface PropsType {
  isSender: boolean;
  data: MessageType;
}

const MessageReactions: React.FC<PropsType> = ({ isSender, data }) => {
  return (
    <div
      className={twMerge(
        "flex items-center gap-4",
        isSender ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Reaction Details  */}
      {data?.reactions?.length > 0 && (
        <Popover>
          <PopoverTrigger>
            <ReactionCount data={data} />
          </PopoverTrigger>
          <PopoverContent side="top" className="!w-auto !p-1">
            <DetailsReaction />
          </PopoverContent>
        </Popover>
      )}

      {/* Reaction Plus */}
      <Popover>
        <PopoverTrigger>
          <LuSmilePlus size={20} />
        </PopoverTrigger>
        <PopoverContent side="top" className="!w-auto">
          <div className="flex items-center gap-3 bg-white">
            {reactions?.map((reaction: { id: number; type: ReactionType }) => (
              <ReactionButton
                key={reaction.id}
                type={reaction.type}
                data={data}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MessageReactions;
