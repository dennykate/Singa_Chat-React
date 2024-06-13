import { HTMLAttributes } from "react";

interface ProspType extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const ChatActionButton: React.FC<ProspType> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="relative w-[50px] h-[50px] hover:bg-primary-100/50 flex justify-center items-center rounded-full"
    >
      {children}
    </button>
  );
};

export default ChatActionButton;
