import { ReactionType } from "@/types/type";
import { twMerge } from "tailwind-merge";

interface PropsType {
  type: ReactionType;
}

export const ReactionButton: React.FC<PropsType> = ({ type }) => {
  return (
    <button className={twMerge("relative p-1 ")}>
      <div className="w-[30px] h-[30px] rounded-full overflow-hidden 
      hover:-translate-y-1 transition-all duration-300 ease-in-out">
        <img
          src={`/assets/images/reacts/gif/${type}.gif`}
          alt={type}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="sr-only">Reaction Button</span>
    </button>
  );
};
