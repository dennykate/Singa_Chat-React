import Avatar from "@/components/custom/common/Avatar";
import Reaction from "./Reaction";
import useProfile from "@/hooks/use-profile";
import { IReaction, MessageType } from "@/types/type";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import useRemoveReaction from "@/features/chat/services/message/reaction/use-remove-reaction";

interface PropsType {
  reaction: IReaction;
  data: MessageType;
}

const DetailsReactionButton: React.FC<PropsType> = ({ reaction, data }) => {
  const profile = useProfile();
  const { onRemoveReaction } = useRemoveReaction();

  const isOwner = useMemo(
    () => reaction?.user?._id === profile?._id,
    [reaction, profile]
  );

  const onPressHandler = () => {
    const rmvReaction = {
      reactionType: reaction.type,
      userId: reaction.user._id,
      messageId: data._id,
    };

    onRemoveReaction(rmvReaction);
  };

  return (
    <button
      className={twMerge(
        "flex items-center px-4 py-2 h-[50px]  justify-between",
        isOwner ? "hover:bg-gray-100 cursor-pointer" : "cursor-default"
      )}
      onClick={() => isOwner && onPressHandler()}
    >
      <div className="flex items-center gap-4  w-[80%]">
        <Avatar
          src={reaction?.user?.profile as string}
          alt={reaction?.user?.username as string}
          className="min-w-[35px] h-[35px] "
        />

        <div className="flex flex-col justify-start w-[80%] ">
          <h6 className="text-sm whitespace-nowrap w-full truncate text-start">
            {reaction?.user?.username}
          </h6>
          {isOwner && (
            <p className="text-xs font-[300] truncate w-full text-start">
              Tap to remove
            </p>
          )}
        </div>
      </div>

      <Reaction type={reaction.type} emojiClassName="w-[20px] h-[20px]" />
    </button>
  );
};

export default DetailsReactionButton;
