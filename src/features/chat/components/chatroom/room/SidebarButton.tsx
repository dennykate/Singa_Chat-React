import { RootState } from "@/lib/redux/store";
import { HTMLAttributes } from "react";
import { IoPeopleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";

interface PropsType extends HTMLAttributes<HTMLButtonElement> {}

const SidebarButton: React.FC<PropsType> = ({ className, ...props }) => {
  const { users } = useSelector((state: RootState) => state.users);

  return (
    <button
      {...props}
      className={twMerge(
        "relative bg-white min-w-[60px] h-[60px] rounded-full shadow-lg md:hidden flex justify-center items-center",
        className
      )}
    >
      <div className="relative">
        <IoPeopleOutline size={22} />

        {users?.length > 0 && (
          <div className="bg-orange-500 w-[8px] h-[8px] rounded-full absolute top-[-2px] right-[-2px]" />
        )}
      </div>
      <span className="sr-only">Friends Button</span>
    </button>
  );
};

export default SidebarButton;
