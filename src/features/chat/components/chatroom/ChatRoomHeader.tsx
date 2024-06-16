import {
  PiPhoneFill,
  PiVideoCameraFill,
  PiWarningCircleFill,
} from "react-icons/pi";
import { MdHideSource } from "react-icons/md";
import { FiAlertTriangle } from "react-icons/fi";
import { GoBlocked } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";

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
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "@/lib/redux/services/global-action-slice";
import { RootState } from "@/lib/redux/store";

interface PropsType {}

const ChatRoomHeader: React.FC<PropsType> = () => {
  const dispatch = useDispatch();
  const { chatUser } = useSelector((state: RootState) => state.chat);

  return (
    <div className="w-full sm:px-4  px-2 md:pt-4 pt-2 flex items-center sm:gap-4 gap-2">
      <button
        onClick={() => dispatch(showSidebar())}
        className="relative bg-white min-w-[60px] h-[60px] rounded-full shadow-lg md:hidden flex justify-center items-center"
      >
        <IoPeopleOutline size={22} />
        <span className="sr-only">Friends Button</span>
      </button>

      <div className="w-full bg-white px-2 flex justify-between items-center h-[60px] rounded-full shadow-lg ">
        <div className="flex items-baseline sm:items-center gap-2">
          <Avatar
            src={chatUser?.profile as string}
            alt={chatUser?.username as string}
            className="w-[45px] h-[45px] "
          />

          <div className="flex flex-col items-start ">
            <p className="text-base sm:block hidden">{chatUser?.username}</p>
            <p className="text-xs text-gray-500 sm:block hidden">
              {chatUser?.email}
            </p>

            {/* <p className="text-xs text-gray-500 -translate-y-3">Typing...</p> */}
          </div>
        </div>

        <div className="flex items-center sm:gap-2">
          <ChatActionButton onClick={unsupportedAction}>
            <PiPhoneFill size={20} />
            <span className=" sr-only">Phone Call</span>
          </ChatActionButton>

          <ChatActionButton onClick={unsupportedAction}>
            <PiVideoCameraFill size={20} />
            <span className=" sr-only">Video Call</span>
          </ChatActionButton>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className=" w-[40px] h-[40px] hover:bg-primary-100/50 flex justify-center items-center rounded-full">
                <PiWarningCircleFill size={20} />
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
