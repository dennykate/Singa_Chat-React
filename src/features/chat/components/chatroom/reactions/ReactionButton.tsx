import useAddReaction from "@/features/chat/services/message/reaction/use-add-reaction";
import useRemoveReaction from "@/features/chat/services/message/reaction/use-remove-reaction";
import useProfile from "@/hooks/use-profile";
import { IReaction, MessageType, ReactionType } from "@/types/type";
import { HTMLAttributes, useMemo } from "react";
import { twMerge } from "tailwind-merge";

interface PropsType extends HTMLAttributes<HTMLButtonElement> {
  type: ReactionType;
  data: MessageType;
}

export const ReactionButton: React.FC<PropsType> = ({
  type,
  className,
  data,
  ...props
}) => {
  const profile = useProfile();

  const { onAddReaction } = useAddReaction();
  const { onRemoveReaction } = useRemoveReaction();

  const onReactionAddHandler = (type: ReactionType, isExist: boolean) => {
    const reaction = {
      reactionType: type,
      userId: profile?._id as string,
      messageId: data._id,
    };

    if (isExist) {
      onRemoveReaction(reaction);
    } else {
      onAddReaction(reaction);
    }
  };

  const hasReaction = useMemo(() => {
    return data.reactions.find(
      (reaction: IReaction) =>
        reaction.type === type && reaction.user._id === profile?._id
    );
  }, [data, profile?._id, type]);

  return (
    <button
      onClick={() => {
        onReactionAddHandler(type, hasReaction ? true : false);
      }}
      {...props}
      className={twMerge("relative p-1 ", className)}
    >
      <div
        className={twMerge(
          "w-[30px] h-[30px] rounded-full overflow-hidden hover:-translate-y-1 transition-all duration-300 ease-in-out"
        )}
      >
        <img
          src={`/assets/images/reacts/gif/${type}.gif`}
          alt={type}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="sr-only">Reaction Button</span>

      {hasReaction && (
        <div className=" absolute bottom-0 left-0 flex justify-center items-center w-full">
          <div className="w-[7px] h-[3px] rounded-full bg-primary" />
        </div>
      )}
    </button>
  );
};
