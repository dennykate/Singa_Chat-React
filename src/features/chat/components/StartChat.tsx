import { Button } from "@/components/ui/button";
import { showSidebar } from "@/lib/redux/services/global-action-slice";
import React from "react";
import { useDispatch } from "react-redux";

interface PropsType {}

const StartChat: React.FC<PropsType> = () => {
  const dispatch = useDispatch();

  return (
    <div className="md:w-[calc(100%-300px)] w-full bg-primary-100 flex justify-center items-center  flex-col gap-10 sm:gap-4">
      <div className="sm:w-[500px] w-full">
        <img src="/assets/images/start-chat.svg" alt="start-chat" />
      </div>

      <div className="bg-primary-800 px-8 py-4 md:block hidden">
        <p className="text-base text-white">
          Please select chat to start an conservation.
        </p>
      </div>

      <Button
        onClick={() => dispatch(showSidebar())}
        className="bg-primary-800 hover:bg-primary-900 md:hidden block w-[120px]"
      >
        Start Now
      </Button>
    </div>
  );
};

export default StartChat;
