import { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface PropsType extends HTMLAttributes<HTMLButtonElement> {
  Icon: IconType;
  label: string;
  iconClassName?: string;
  labelClassName?: string;
}

const MessageActionButton: React.FC<PropsType> = ({
  Icon,
  label,
  className,
  iconClassName,
  labelClassName,
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center gap-3 outline-none px-4 h-[50px] hover:bg-gray-100",
        className
      )}
    >
      <Icon className={twMerge("text-xl", iconClassName)} />
      <p className={twMerge("text-base font-[300]", labelClassName)}>{label}</p>
    </button>
  );
};

export default MessageActionButton;
