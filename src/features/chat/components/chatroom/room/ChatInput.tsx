import { IoSend } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";
import unsupportedAction from "@/utilities/unsupported-action";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import EmojiPicker from "../input/EmojiPicker";
import PreviewMessage from "../input/PreviewMessage";
import useProfile from "@/hooks/use-profile";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import useSendMessage from "../../../services/message/use-send-message";
import useTyping from "../../../services/message/use-typing";

const ChatInput = () => {
  const profile = useProfile();
  const { chatUser } = useSelector((state: RootState) => state.chat);

  const { onSendMessage } = useSendMessage();
  const { onTyping } = useTyping();

  const [content, setContent] = useState<string>("");
  const [isStartTyping, setIsStartTyping] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 0) {
      onTyping("is-typing");
      setIsStartTyping(true);
    } else {
      onTyping("is-not-typing");
      setIsStartTyping(false);
    }

    setContent(e.target.value);
  };

  const onSubmitHandler = () => {
    if (!content || content === "") return;
    const data = {
      sender: profile?._id as string,
      recipient: chatUser?._id as string,
      content,
    };

    onSendMessage(data);

    setContent("");
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
          autoFocus
          name="Chat Input"
          id="chat-input"
          value={content}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          onFocus={() => setShowPreview(true)}
          onBlur={() => {
            setShowPreview(false);
            onTyping("is-not-typing");
          }}
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

      {/* Preview Message  */}
      {showPreview && content?.length > 0 && (
        <PreviewMessage content={content} />
      )}
    </div>
  );
};

export default ChatInput;
