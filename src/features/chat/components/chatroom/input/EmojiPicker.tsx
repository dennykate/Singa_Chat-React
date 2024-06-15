import { SlEmotsmile } from "react-icons/sl";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";

interface PropsType {
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const EmojiPickerComponent: React.FC<PropsType> = ({ setContent }) => {
  const onEmojiClick = (emojiData: EmojiClickData) => {
    setContent((prev) => prev + emojiData.emoji);
    // setIsOpen(false);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <SlEmotsmile size={20} />
      </PopoverTrigger>
      <PopoverContent side="top" className="!w-auto !p-0 !z-10">
        <div className=" -translate-y-4 sm:translate-x-[-42%] -translate-x-2 z-10">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EmojiPickerComponent;
