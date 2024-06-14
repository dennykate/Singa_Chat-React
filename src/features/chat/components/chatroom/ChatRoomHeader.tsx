import {
  PiPhoneFill,
  PiVideoCameraFill,
  PiWarningCircleFill,
} from "react-icons/pi";
import { MdHideSource } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { GoBlocked } from "react-icons/go";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ChatActionButton from "./ChatActionButton";
import unsupportedAction from "@/utilities/unsupported-action";
import Avatar from "@/components/custom/common/Avatar";

const ChatRoomHeader = () => {
  return (
    <div className="w-full px-4 pt-2 ">
      <div className="w-full bg-white px-4 flex justify-between items-center h-[72px] rounded-full shadow-lg ">
        <div className="flex items-center gap-2">
          <Avatar
            src="/assets/images/logos/logo-square.webp"
            alt="logo"
            className="w-[50px] h-[50px] "
          />

          <div className="flex flex-col items-start ">
            <p className="text-base">Denny Kate</p>
            <p className="text-xs text-gray-500">dennykate22@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ChatActionButton onClick={unsupportedAction}>
            <PiPhoneFill size={22} />
            <span className=" sr-only">Phone Call</span>
          </ChatActionButton>

          <ChatActionButton onClick={unsupportedAction}>
            <PiVideoCameraFill size={22} />
            <span className=" sr-only">Video Call</span>
          </ChatActionButton>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="relative w-[50px] h-[50px] hover:bg-primary-100/50 flex justify-center items-center rounded-full">
                <PiWarningCircleFill size={22} />
                <span className=" sr-only">Video Call</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Privacy And Support</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button
                  onClick={unsupportedAction}
                  className="flex items-center gap-3 px-2"
                >
                  <FiAlertTriangle size={16} />
                  <span>Report</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={unsupportedAction}
                  className="flex items-center gap-3 px-2"
                >
                  <MdHideSource size={16} />
                  <span>Restrict</span>
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <button
                  onClick={unsupportedAction}
                  className="flex items-center gap-3 px-2"
                >
                  <GoBlocked size={16} />
                  <span>Block</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomHeader;