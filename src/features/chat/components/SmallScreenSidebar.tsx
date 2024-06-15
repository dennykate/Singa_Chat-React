import React from "react";
import { twMerge } from "tailwind-merge";
import Sidebar from "./Sidebar";

interface PropsType {
  showFriends: boolean;
  setShowFriends: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallScreenSidebar: React.FC<PropsType> = ({
  showFriends,
  setShowFriends,
}) => {
  return (
    <>
      <div
        className={twMerge(
          "transition-all duration-300 ease-in-out sm:w-[300px] w-full h-full z-20 fixed top-0 left-0",
          showFriends ? "translate-x-0" : "translate-x-[-100%]"
        )}
      >
        <Sidebar setShowFriends={setShowFriends} />
      </div>

      <div
        onClick={() => setShowFriends(false)}
        className={twMerge(
          "fixed z-10 top-0 right-0 bg-black w-full h-full bg-opacity-50",
          showFriends ? "block" : "hidden"
        )}
      />
    </>
  );
};

export default SmallScreenSidebar;
