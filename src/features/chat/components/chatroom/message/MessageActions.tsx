import unsupportedAction from "@/utilities/unsupported-action";
import MessageActionButton from "./MessageActionButton";

import { BsPin, BsCopy, BsTrash, BsCheckCircle } from "react-icons/bs";
import { IoArrowRedoOutline, IoArrowUndoOutline } from "react-icons/io5";
import { TfiPencilAlt } from "react-icons/tfi";
import { useClipboard } from "@/hooks/use-clipboard";
import { MessageType } from "@/types/type";
import { twMerge } from "tailwind-merge";
import useProfile from "@/hooks/use-profile";
import { useMemo } from "react";
import useDeleteMessage from "@/features/chat/services/message/use-delete-message";
import timeValidation from "@/utilities/time-validation";

interface PropsType {
  data: MessageType;
  onEditPress: () => void;
}

const MessageActions: React.FC<PropsType> = ({ data, onEditPress }) => {
  const profile = useProfile();
  const { onDeleteMessage } = useDeleteMessage();
  const { copy } = useClipboard();

  const isOwner = useMemo(
    () => data?.sender?._id === profile?._id,
    [data?.sender?._id, profile?._id]
  );
  
  const isTimeValid = timeValidation(data.createdAt, 5);

  return (
    <div className="w-[200px] flex flex-col gap-[2px]">
      <MessageActionButton
        Icon={IoArrowUndoOutline}
        label="Reply"
        onClick={unsupportedAction}
      />

      <MessageActionButton
        Icon={BsCheckCircle}
        label="Select"
        onClick={unsupportedAction}
      />

      <MessageActionButton
        Icon={BsPin}
        label="Pin"
        onClick={unsupportedAction}
      />

      <MessageActionButton
        Icon={IoArrowRedoOutline}
        label="Forward"
        onClick={unsupportedAction}
      />

      <MessageActionButton
        Icon={BsCopy}
        label="Copy Text"
        onClick={() => {
          copy("Hellow World");
        }}
      />

      <MessageActionButton
        Icon={TfiPencilAlt}
        label="Edit"
        className={twMerge(
          isTimeValid && isOwner
            ? "opacity-100"
            : "opacity-50 grayscale hover:bg-transparent cursor-default"
        )}
        onClick={() => isTimeValid && isOwner && onEditPress()}
      />

      <MessageActionButton
        Icon={BsTrash}
        label="Delete"
        onClick={() => isOwner && onDeleteMessage(data?._id)}
        className={twMerge(
          "text-red-500",
          isOwner
            ? "opacity-100"
            : "opacity-80 grayscale hover:bg-transparent cursor-default"
        )}
      />
    </div>
  );
};

export default MessageActions;
