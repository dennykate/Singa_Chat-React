import { ReactionType } from "@/types/type";
import { twMerge } from "tailwind-merge";

interface PropsType {
  type: ReactionType;
  emojiClassName?: string;
}

const Reaction: React.FC<PropsType> = ({ type, emojiClassName }) => {
  return (
    <div className="reaction-wrapper">
      <div className={twMerge("w-[16px] h-[16px] ", emojiClassName)}>
        <img
          src={`/assets/images/reacts/svg/${type}.svg`}
          alt={type}
          className="w-full h-full overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Reaction;
