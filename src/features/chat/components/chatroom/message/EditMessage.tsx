import unsupportedAction from "@/utilities/unsupported-action";
import { useState } from "react";
import { ImAttachment } from "react-icons/im";
import { twMerge } from "tailwind-merge";
import EmojiPicker from "../input/EmojiPicker";
import MessageCard from "./MessageCard";
import { MessageType } from "@/types/type";
import { IoSend } from "react-icons/io5";
import useUpdateMessage from "@/features/chat/services/message/use-update-message";

interface PropsType {
  editMessage: MessageType;
  onEditMessage: () => void;
}

const EditMessage: React.FC<PropsType> = ({ editMessage, onEditMessage }) => {
  const { onUpdateMessage } = useUpdateMessage();
  const [content, setContent] = useState<string>(editMessage?.content);

  const onSubmitHandler = () => {
    if (!content || content === "") return;

    const data = {
      messageId: editMessage._id,
      content,
    };

    onUpdateMessage(data);
    onEditMessage();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      setContent((prev) => prev + "\n "); // Append a newline character
    } else if (e.key === "Enter") {
      e.preventDefault();
      onSubmitHandler(); // Handle the submit action
    }
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full max-h-[300px] overflow-y-auto p-2">
        <MessageCard data={{ ...editMessage, content }} />
      </div>

      <div className="w-full items-center flex gap-2">
        <div
          className={twMerge(
            "w-[calc(100%-60px)] flex items-center  rounded-lg border border-black border-opacity-20 transition-all duration-300 ease-in-out h-[60px]"
          )}
        >
          <textarea
            autoFocus
            name="Chat Input"
            id="chat-input"
            value={content}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
            placeholder="Type here ..."
            className="border-none rounded-lg outline-none w-full h-full p-4 text-sm placeholder:text-sm scrollbar-hide resize-none"
          ></textarea>

          <div className="flex justify-center p-4 gap-4">
            {/* Attcahment Button  */}
            <button className="relative" onClick={unsupportedAction}>
              <ImAttachment size={20} />
              <span className="sr-only">Attachment</span>
            </button>

            {/* Emoji Button  */}
            <EmojiPicker setContent={setContent} />
          </div>
        </div>

        {/* Send Button  */}
        <button
          className="w-[50px] h-[50px] relative flex justify-center items-center rounded-full
       bg-primary-200 hover:bg-opacity-50"
          onClick={onSubmitHandler}
        >
          <IoSend size={20} className="text-black" />
          <span className="sr-only">Send</span>
        </button>
      </div>
    </div>
  );
};

export default EditMessage;
