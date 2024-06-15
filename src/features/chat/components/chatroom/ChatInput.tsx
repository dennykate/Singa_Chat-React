import { IoSend } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import unsupportedAction from "@/utilities/unsupported-action";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import EmojiPicker from "./input/EmojiPicker";
import PreviewMessage from "./input/PreviewMessage";

const ChatInput = () => {
  const [content, setContent] = useState<string>("");
  const [isStartTyping, setIsStartTyping] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 0) setIsStartTyping(true);
    else setIsStartTyping(false);

    setContent(e.target.value);
  };

  return (
    <div
      className={twMerge(
        "w-full md:pb-2 flex items-end sm:gap-4 gap-2 relative sm:h-[80px] h-[70px]"
      )}
    >
      <div
        className={twMerge(
          "w-[calc(100%-60px)] rounded-lg flex items-end  bg-white shadow-lg transition-all duration-300 ease-in-out",
          isStartTyping ? "sm:h-[70px] h-[56px]" : " h-[56px]"
        )}
      >
        <textarea
          name="Chat Input"
          id="chat-input"
          defaultValue={content}
          value={content}
          onChange={onChangeHandler}
          onFocus={() => setShowPreview(true)}
          onBlur={() => setShowPreview(false)}
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
      >
        <IoSend size={20} className="text-black" />
        <span className="sr-only">Send</span>
      </button>

      {/* Preview Message  */}
      {showPreview && content?.length > 0 && (
        <PreviewMessage content={content} />
      )}
    </div>
  );
};

export default ChatInput;
