import MarkdownRenderer from "@/components/custom/common/MarkdownRenderer";
import { twMerge } from "tailwind-merge";
import MessageReactions from "./reactions/MessageReactions";
import Avatar from "@/components/custom/common/Avatar";

import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import MessageActions from "./message/MessageActions";

const isSender = true;
const markdownText = `Ma Ma Ko Chit Tel
`;

const MessageCard = () => {
  const [openActions, setOpenActions] = useState<boolean>(false);

  return (
    <div
      className={twMerge(
        "w-full flex items-end gap-2",
        isSender ? "justify-end" : "justify-start"
      )}
    >
      {!isSender && (
        <Avatar src="/assets/images/logos/logo-square.webp" alt="logo" />
      )}

      <Popover open={openActions} onOpenChange={() => setOpenActions(false)}>
        <PopoverTrigger asChild>
          <div
            onDoubleClick={() => setOpenActions(true)}
            className={twMerge(
              "px-4 pt-4 pb-2 shadow-md rounded-md max-w-[500px] min-w-[350px]",
              isSender ? "bg-white" : "bg-gray-100"
            )}
          >
            {/* Message Content  */}
            <MarkdownRenderer content={markdownText} />

            {/* Message Footer  */}
            <div
              className={twMerge(
                "flex items-center gap-2 justify-between w-full mt-2",
                isSender ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className="flex items-center gap-2">
                <p className="text-xs text-gray-500 font-[300]">dennykate</p>
                <p className="text-xs text-gray-500 font-[300]">•</p>
                <p className="text-xs text-gray-500 font-[300]">10 mins ago</p>
              </div>

              <MessageReactions isSender={isSender} />
            </div>
          </div>
        </PopoverTrigger>

        <PopoverContent side="top" className="!w-auto !p-1">
          <MessageActions />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MessageCard;
