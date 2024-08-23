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
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "@/lib/redux/services/global-action-slice";
import { RootState } from "@/lib/redux/store";
import SidebarButton from "./SidebarButton";

interface PropsType {}

const ChatRoomHeader: React.FC<PropsType> = () => {
  const dispatch = useDispatch();
  const { chatUser, isTyping } = useSelector((state: RootState) => state.chat);

  const maskGmail = (email: string): string => {
    if (!email) return "******@gmail.com";

    const [username, domain] = email.split("@");
    if (username.length > 2) {
      return `${username[0]}${"*".repeat(username.length - 2)}${
        username[username.length - 1]
      }@${domain}`;
    }
    return email;
  };

  return (
    <div className="w-full sm:px-4  px-2 md:pt-4 pt-2 flex items-center sm:gap-4 gap-2">
      <SidebarButton onClick={() => dispatch(showSidebar())} />

      <div className="w-full bg-white px-2 flex justify-between items-center h-[60px] rounded-full shadow-lg border-black border border-opacity-10">
        <div className="flex items-center gap-2">
          <Avatar
            src={chatUser?.profile as string}
            alt={chatUser?.username as string}
            className="w-[45px] h-[45px] "
          />

          <div className="flex flex-col items-start ">
            <p className="sm:text-base text-sm xs:w-[100px] sm:w-auto w-[70px] truncate sm:overflow-visible sm:whitespace-normal sm:text-ellipsis">
              {chatUser?.username}
            </p>
            <p className="sm:text-xs text-[10px] text-gray-500 sm:w-auto xs:w-[100px] w-[70px] truncate sm:overflow-visible sm:whitespace-normal sm:text-ellipsis">
              {isTyping ? "Typing" : maskGmail(chatUser?.email as string)}
            </p>
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
