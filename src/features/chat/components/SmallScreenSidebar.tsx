import React from "react";
import { twMerge } from "tailwind-merge";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { hideSidebar } from "@/lib/redux/services/global-action-slice";

interface PropsType {
}

const SmallScreenSidebar: React.FC<PropsType> = () => {
  const dispatch = useDispatch()
  const {sidebar} = useSelector((state: RootState) => state.globalAction);

  return (
    <>
      <div
        className={twMerge(
          "transition-all duration-300 ease-in-out sm:w-[300px] w-full h-full z-20 fixed top-0 left-0",
          sidebar ? "translate-x-0" : "translate-x-[-100%]"
        )}
      >
        <Sidebar  />
      </div>

      <div
        onClick={() => dispatch(hideSidebar())}
        className={twMerge(
          "fixed z-10 top-0 right-0 bg-black w-full h-full bg-opacity-50",
          sidebar ? "block" : "hidden"
        )}
      />
    </>
  );
};

export default SmallScreenSidebar;
