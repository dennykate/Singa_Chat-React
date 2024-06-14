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

interface PropsType {
  isSender: boolean;
}

const MessageReactions: React.FC<PropsType> = ({ isSender }) => {
  return (
    <div
      className={twMerge(
        "flex items-center gap-4",
        isSender ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Reaction Details  */}
      <Popover>
        <PopoverTrigger>
          <ReactionCount />
        </PopoverTrigger>
        <PopoverContent side="top" className="!w-auto !p-1">
          <DetailsReaction />
        </PopoverContent>
      </Popover>

      {/* Reaction Plus */}
      <Popover>
        <PopoverTrigger>
          <LuSmilePlus size={20} />
        </PopoverTrigger>
        <PopoverContent side="top" className="!w-auto">
          <div className="flex items-center gap-3 bg-white">
            <ReactionButton type="like" />
            <ReactionButton type="heart" />
            <ReactionButton type="haha" />
            <ReactionButton type="wow" />
            <ReactionButton type="sad" />
            <ReactionButton type="angry" />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MessageReactions;
