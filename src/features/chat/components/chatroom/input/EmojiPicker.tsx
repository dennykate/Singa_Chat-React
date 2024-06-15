import { useState } from "react";
import { SlEmotsmile } from "react-icons/sl";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";

interface PropsType {
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const EmojiPickerComponent: React.FC<PropsType> = ({ setContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setContent((prev) => prev + emojiData.emoji);
    // setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative translate-y-1"
      >
        <SlEmotsmile size={20} />
        <span className="sr-only">Emoji</span>
      </button>
      {isOpen && (
        <div className="absolute bottom-[50px] right-0 mt-2 z-10">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default EmojiPickerComponent;
