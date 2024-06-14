import unsupportedAction from "@/utilities/unsupported-action";
import MessageActionButton from "./MessageActionButton";

import { BsPin, BsCopy, BsTrash, BsCheckCircle } from "react-icons/bs";
import { IoArrowRedoOutline, IoArrowUndoOutline } from "react-icons/io5";
import { useClipboard } from "@/hooks/use-clipboard";

const MessageActions = () => {
  const { copy } = useClipboard();

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
        onClick={() => copy("Hellow World")}
      />

      <MessageActionButton
        Icon={BsTrash}
        label="Delete"
        className="text-red-500"
      />
    </div>
  );
};

export default MessageActions;
